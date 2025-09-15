import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email via Resend to admin@skillpeak.ca from user's email
    const data = await resend.emails.send({
      from: `admin@skillpeak.ca`,
      replyTo: email,
      to: ['admin@skillpeak.ca'],
      subject: `New message from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0395A6; border-bottom: 2px solid #0395A6; padding-bottom: 10px;">
            New message from ${firstName} ${lastName}
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">User Information:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0395A6;">${email}</a></p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #666; font-size: 14px;">
            <p>This message was sent through the contact form on the SkillPeak website.</p>
            <p><strong>Reply directly to this email to respond to ${firstName} ${lastName} at ${email}</strong></p>
            <p>Date sent: ${new Date().toLocaleString('en-US')}</p>
          </div>
        </div>
      `,
      text: `
New message from ${firstName} ${lastName}

User Information:
Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}

---
This message was sent through the contact form on the SkillPeak website.
Date sent: ${new Date().toLocaleString('en-US')}
      `,
    });

    return NextResponse.json(
      { message: 'Message sent successfully', id: data.data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending the message. Please try again later.' },
      { status: 500 }
    );
  }
}
