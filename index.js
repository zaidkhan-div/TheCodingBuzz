import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import { emailHtml } from './templates.js';

const app = express();
const port = 3000;
app.use(cors({
    allowedHeaders: '*',
    methods: '*',
    origin: '*',
    preflightContinue: true
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "zaidscestudent@gmail.com",
        pass: "atdy bxeo zlci pcna",
    }
})

app.post('/sendmail', async (req, res) => {
    const { company, user_name, phone, email, message, customer_type } = req.body;

    // const htmlTemplate = `
    //     <p>Company: ${company}</p>
    //     <p>Name: ${user_name}</p>
    //     <p>Phone: ${phone}</p>
    //     <p>Email: ${email}</p>
    //     <p>Message: ${message}</p>
    //     <p>Customer Type: ${customer_type}</p>
    // `;

    const mailOptions = {
        from: email,
        to: 'salmankarim.khan42@gmail.com',
        subject: 'New Contact Form Submission',
        html: emailHtml.replace('{{company}}', company)
            .replace('{{user_name}}', user_name)
            .replace('{{phone}}', phone)
            .replace('{{email}}', email)
            .replace('{{message}}', message)
            .replace('{{customer_type}}', customer_type)
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        res.status(500).send('Error sending email');
    }
});

app.get('/', (req, res) => {
    res.send('This Checking')
})

app.listen(port, () => {
    console.log('Server is Running on port ', port);
})


// import express from 'express';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
// import fs from 'fs';

// const app = express();
// app.use(express.json());
// app.use(cors({
//     origin: '*',
//     methods: ['POST'],
//     allowedHeaders: '*',
// }));

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "zaidscestudent@gmail.com",
//         pass: "atdy bxeo zlci pcna",
//     }
// });

// app.post('/sendmail', (req, res) => {
//     const { company, user_name, phone, email, message, customer_type } = req.body;

//     fs.readFile('Form.html', 'utf-8', (err, data) => {
//         if (err) {
//             return res.status(500).send('Error reading template');
//         }

//         const mailOptions = {
//             from: email,
//             to: 'salmankarim.khan42@gmail.com',
//             subject: 'New Contact Form Submission',
//             html: data.replace('{{company}}', company)
//                 .replace('{{user_name}}', user_name)
//                 .replace('{{phone}}', phone)
//                 .replace('{{email}}', email)
//                 .replace('{{message}}', message)
//                 .replace('{{customer_type}}', customer_type),
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 return res.status(500).send('Error sending email');
//             }
//             res.status(200).send('Email sent successfully');
//         });
//     });
// });

// app.get('/', (req, res) => {
//     res.send('This is working');
// });
// console.log(port);

// // ⛔️ Remove app.listen()
// // ✅ Export the handler for Vercel
// export default app;
