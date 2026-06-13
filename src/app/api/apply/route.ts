import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// recipient email
const RECIPIENT_EMAIL = 'digigrownex@gmail.com';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, job, portfolio, coverLetter } = data;

    if (!name || !email || !phone || !job || !portfolio) {
      return NextResponse.json(
        { success: false, message: 'All fields marked with * are required.' },
        { status: 400 }
      );
    }

    // Prepare content for email
    const subject = `New Job Application: ${job} - ${name}`;
    const emailBody = `
      ==================================================
      NEW JOB APPLICATION RECEIVED
      ==================================================
      Candidate Name  : ${name}
      Email Address   : ${email}
      Phone Number    : ${phone}
      Target Position : ${job}
      Portfolio/Resume: ${portfolio}
      Cover Letter    : 
      ${coverLetter || 'No cover letter provided.'}
      ==================================================
    `;

    console.log(emailBody);

    // Save locally in a JSON file as a local DB fallback so no data is lost
    const localDbPath = path.join(process.cwd(), 'applications_received.json');
    let existingApplications = [];
    
    if (fs.existsSync(localDbPath)) {
      try {
        const fileContent = fs.readFileSync(localDbPath, 'utf8');
        existingApplications = JSON.parse(fileContent);
      } catch (e) {
        console.error('Error reading local applications DB:', e);
      }
    }

    existingApplications.push({
      id: Date.now().toString(),
      name,
      email,
      phone,
      job,
      portfolio,
      coverLetter,
      submittedAt: new Date().toISOString(),
    });

    fs.writeFileSync(localDbPath, JSON.stringify(existingApplications, null, 2), 'utf8');

    // Attempt real email sending if SMTP variables are present
    const hasSmtp = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;
    if (hasSmtp) {
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `DigiGrowNex Recruitment <${process.env.SMTP_USER}>`,
        to: RECIPIENT_EMAIL,
        subject: subject,
        text: emailBody,
        replyTo: email,
      });

      console.log(`Real email sent successfully to ${RECIPIENT_EMAIL}`);
    } else {
      console.log(`SMTP env not configured. Logged application for ${name} to applications_received.json`);
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully. Our hiring team has been notified.',
    });
  } catch (error: any) {
    console.error('Error in apply API route:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}
