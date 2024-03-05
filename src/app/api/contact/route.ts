import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, country, email, message } = req.body;

      // Создаем транспорт для отправки почты (замените данными вашего почтового сервера)
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Хост для Gmail SMTP
        port: 465, // Порт для SSL
        secure: true, // Использовать SSL
        auth: {
          user: 'realtyorzel@gmail.com', // Ваш адрес электронной почты Gmail
          pass: 'cDa*8BZ_My]edv', // Ваш пароль приложения Gmail
        },
      });

      // Опции для отправки письма
      const mailOptions = {
        from: email,
        to: 'realtyorzel@gmail.com',
        subject: `New message from ${name} - Academgo`,
        text: `${message}\n\nContact Details:\nName: ${name}\nCountry: ${country}\nEmail: ${email}`,
      };

      // Отправляем письмо
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}