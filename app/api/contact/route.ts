import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // Валидация обязательных полей
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Все поля обязательны для заполнения' },
        { status: 400 }
      );
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Некорректный email адрес' },
        { status: 400 }
      );
    }

    // Отправка email через Resend
    const data = await resend.emails.send({
      from: 'SkillPeak Contact Form <noreply@skillpeak.com>',
      to: ['admin@skillpeak.com'],
      subject: `Новое сообщение от ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0395A6; border-bottom: 2px solid #0395A6; padding-bottom: 10px;">
            Новое сообщение с сайта SkillPeak
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Информация о пользователе:</h3>
            <p><strong>Имя:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0395A6;">${email}</a></p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Сообщение:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #666; font-size: 14px;">
            <p>Это сообщение было отправлено через контактную форму на сайте SkillPeak.</p>
            <p>Дата отправки: ${new Date().toLocaleString('ru-RU')}</p>
          </div>
        </div>
      `,
      text: `
Новое сообщение с сайта SkillPeak

Информация о пользователе:
Имя: ${firstName} ${lastName}
Email: ${email}

Сообщение:
${message}

---
Это сообщение было отправлено через контактную форму на сайте SkillPeak.
Дата отправки: ${new Date().toLocaleString('ru-RU')}
      `,
    });

    return NextResponse.json(
      { message: 'Сообщение успешно отправлено', id: data.data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Ошибка при отправке email:', error);
    return NextResponse.json(
      { error: 'Произошла ошибка при отправке сообщения. Попробуйте позже.' },
      { status: 500 }
    );
  }
}
