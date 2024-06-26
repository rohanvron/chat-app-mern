import SibApiV3Sdk from '@sendinblue/client';

const sendVerificationEmail = async (email, verificationCode) => {
  try {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = 'Email Verification';
    sendSmtpEmail.htmlContent = `<html><body><p>Your verification code is: <strong>${verificationCode}</strong></p></body></html>`;
    sendSmtpEmail.sender = { name: 'Your ChatApp', email: 'your-email@example.com' };
    sendSmtpEmail.to = [{ email: email }];

    await tranEmailApi.sendTransacEmail(sendSmtpEmail);
    console.log('Verification email sent');
  } catch (error) {
    console.log('Error sending verification email', error.message);
  }
};

export default sendVerificationEmail;
