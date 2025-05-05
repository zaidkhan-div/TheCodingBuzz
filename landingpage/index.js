import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import fs from 'fs'

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "zaidscestudent@gmail.com",
        pass: "atdy bxeo zlci pcna",
    }
})

app.post('/sendmail', async (req, res) => {
    const { company, user_name, phone, email, message, customer_type } = req.body;

    fs.readFile('Form.html', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading template');
        }

        const mailOptions = {
            from: email,
            to: 'salmankarim.khan42@gmail.com',
            subject: 'New Contact Form Submission',
            html: data.replace('{{company}}', company)
                .replace('{{user_name}}', user_name)
                .replace('{{phone}}', phone)
                .replace('{{email}}', email)
                .replace('{{message}}', message)
                .replace('{{customer_type}}', customer_type),
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send('Error sending email');
            }
            res.status(200).send('Email sent successfully');
        });
    });
});


// app.get('/',(req,res)=>{
//     res.send('Checking if it is working')
// })

app.listen(port, () => {
    console.log('Server is Running on port ', port);
})