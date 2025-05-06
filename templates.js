export const emailHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact Form Submission</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #E1D6C2;
      color: #333;
    }

    header {
      background-color: #005A2F;
      color: white;
      padding: 20px;
      text-align: center;
    }

    .container {
      max-width: 800px;
      margin: 30px auto;
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .info {
      margin-bottom: 20px;
    }

    .info h2 {
      color: #005A2F;
      margin-bottom: 10px;
    }

    .info p {
      line-height: 1.6;
      border-left: 5px solid #86AF35;
      padding-left: 10px;
    }

    footer {
      text-align: center;
      padding: 20px;
      background-color: #005A2F;
      color: white;
      font-size: 14px;
      margin-top: 30px;
    }

    @media (max-width: 600px) {
      .container {
        margin: 10px;
        padding: 20px;
      }

      header, footer {
        font-size: 18px;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>New Contact Submission</h1>
  </header>

  <div class="container">
    <div class="info">
      <h2>Customer Details</h2>
      <p><strong>Company:</strong> {{company}}</p>
      <p><strong>Name:</strong> {{user_name}}</p>
      <p><strong>Phone:</strong> {{phone}}</p>
      <p><strong>Email:</strong> {{email}}</p>
      <p><strong>Message:</strong> {{message}}</p>
    </div>
  </div>

  <footer>
    &copy; 2025 Your Company Name
  </footer>
</body>
</html>
`