import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, country, email, message } = await req.json();

    // Создаем транспорт для отправки почты (используйте переменные окружения)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Хост для SMTP
      port: Number(process.env.SMTP_PORT), // Порт для SSL
      secure: true, // Использовать SSL
      auth: {
        user: process.env.EMAIL_USER, // Ваш адрес электронной почты
        pass: process.env.EMAIL_PASS, // Ваш пароль приложения
      },
    });

    // Опции для отправки письма
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name} - Academgo`,
      text: `${message}\n\nContact Details:\nName: ${name}\nCountry: ${country}\nEmail: ${email}`,
    };

    // Отправляем письмо
    await transporter.sendMail(mailOptions);

    return new NextResponse(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new NextResponse(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
  }
}