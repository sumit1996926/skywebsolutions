// const express = require("express");
// // const { handler } = require("./functions/server");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// // server used to send send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// server.use("/", router);
// exports.handler = serverless(app);

// const contactEmail = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "skywebsoln@gmail.com",
//     pass: "toztrkmwkfzephoh",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: "skywebsoln@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const serverless = require("serverless-http");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/.netlify/functions/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "skywebsoln@gmail.com",
        pass: "toztrkmwkfzephoh",
      },
    });

    await transporter.sendMail({
      from: "skywebsoln@gmail.com",
      to: "syadav1996926@gmail.com",
      subject: "Contact Form Submission",
      html: `
        <p>Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
});

module.exports.handler = serverless(app);
