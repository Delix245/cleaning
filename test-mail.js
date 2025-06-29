import nodemailer from "nodemailer"

async function send() {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: "827469001@smtp-brevo.com",
      pass: "TJ24EHQazMg9ZhYG",
    },
  })

  const info = await transporter.sendMail({
    from: '"Тест отправка" <827469001@smtp-brevo.com>',
    to: "harabugaslava@gmail.com",
    subject: "🔧 Тестовое письмо от Brevo",
    text: "Если ты это читаешь — SMTP работает!",
  })

  console.log("📤 Отправлено:", info.messageId)
}

send().catch(console.error)
