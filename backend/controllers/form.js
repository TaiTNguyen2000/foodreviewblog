const sgMail = require('@sendgrid/mail'); // SENDGRID_API_KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.contactForm = (req, res) => {
  const { name, message } = req.body;
  // console.log(req.body);

  const emailData = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: `Liên hệ - ${process.env.APP_NAME}`,
    text: `Nhận được email từ \n Tên người gửi: ${name} \n Địa chỉ email: ${process.env.EMAIL_FROM} \n Lời nhắn: ${message}`,
    html: `
            <h4>Nhận được email từ:</h4>
            <p>Tên người gửi: ${name}</p>
            <p>Địa chỉ email: ${process.env.EMAIL_FROM}</p>
            <p>Lời nhắn: ${message}</p>
            <hr />
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
    subject: `Ai đó đã liên hệ với bạn từ ${process.env.APP_NAME}`,
    text: `Nhận được lời nhắn từ \n Tên người gửi: ${name} \n Địa chỉ email: ${process.env.EMAIL_FROM} \n Lời nhắn: ${message}`,
    html: `
            <h4>Nhận được lời nhắn từ:</h4>
            <p>Tên người gửi: ${name}</p>
            <p>Địa chỉ email: ${process.env.EMAIL_FROM}</p>
            <p>Lời nhắn: ${message}</p>
            <hr />
            <p>https://foodie.com</p>
        `,
  };

  sgMail.send(emailData).then((sent) => {
    return res.json({
      success: true,
    });
  });
};
