const sgMail = require('@sendgrid/mail'); // SENDGRID_API_KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.contactForm = (req, res) => {
  const { name, message } = req.body;
  // console.log(req.body);

  const emailData = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: `Contact form - ${process.env.APP_NAME}`,
    text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${process.env.EMAIL_FROM} \n Sender message: ${message}`,
    html: `
            <h4>Email received from contact form:</h4>
            <p>Sender name: ${name}</p>
            <p>Sender email: ${process.env.EMAIL_FROM}</p>
            <p>Sender message: ${message}</p>
            <hr />
            <p>This email may contain sensitive information</p>
            <p>https://foodie.com</p>
        `,
  };

  // sgMail.send(emailData).then((sent) => {
  //   return res
  //     .json({
  //       success: true,
  //     })
  //     .catch((error) => {
  //       console.log(error.response.body);
  //       // console.log(error.response.body.errors[0].message)
  //     });
  // });

  sgMail
    .send(emailData)
    .then(() => {
      return res.json({
        success: true,
      });
    })
    .catch((error) => {
      console.log('error', error);
    });
};

exports.contactBlogAuthorForm = (req, res) => {
  const { authorEmail, email, name, message } = req.body;
  // console.log(req.body);

  let maillist = [authorEmail, process.env.EMAIL_TO];

  const emailData = {
    to: authorEmail,
    from: process.env.EMAIL_FROM,
    subject: `Someone messaged you from ${process.env.APP_NAME}`,
    text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${process.env.EMAIL_FROM} \n Sender message: ${message}`,
    html: `
            <h4>Message received from:</h4>
            <p>name: ${name}</p>
            <p>Email: ${process.env.EMAIL_FROM}</p>
            <p>Message: ${message}</p>
            <hr />
            <p>This email may contain sensitive information</p>
            <p>https://foodie.com</p>
        `,
  };

  sgMail.send(emailData).then((sent) => {
    return res.json({
      success: true,
    });
  });
};
