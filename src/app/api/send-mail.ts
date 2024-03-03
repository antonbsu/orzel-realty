import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req:NextApiRequest , res: NextApiResponse) {

    const message = {
        from: process.env.NEXT_MAIL_USER,
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.message
    };

    // Create a nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: process.env.NEXT_MAIL_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.NEXT_MAIL_USER,
            pass: process.env.NEXT_MAIL_PASS,
        },
    });

    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'user@gmail.com',
    //     pass: 'passowrd',
    //   },
    // });

    if (req.method === 'POST') {
        transporter.sendMail(message, (err: Error | null, info) => {
            if (err) {
                res.status(404).json({
                    error: `Connection refused for ${err.message}`,
                });
            } else {
                return res.status(200).json({
                    success: `Message delivered to ${info.accepted}`,
                });
            }
        });
    }
}