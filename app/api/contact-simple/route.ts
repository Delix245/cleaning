import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    console.log("📧 Contact form API called")

    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    console.log("📝 Form data received:", { name, email, phone, message: message?.substring(0, 50) + "..." })

    // Validate required fields
    if (!name || !email || !message) {
      console.log("❌ Missing required fields")
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: "827469001@smtp-brevo.com",
        pass: "TJ24EHQazMg9ZhYG",
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    console.log("📮 SMTP transporter created")

    // Collect file attachments
    const attachments = []
    let fileIndex = 0

    while (formData.get(`file${fileIndex}`)) {
      const file = formData.get(`file${fileIndex}`) as File
      if (file && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer())
        attachments.push({
          filename: file.name,
          content: buffer,
          contentType: file.type,
        })
        console.log(`📎 Attachment ${fileIndex}: ${file.name} (${file.size} bytes)`)
      }
      fileIndex++
    }

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #0A5189; margin-bottom: 20px; border-bottom: 2px solid #3D8B7D; padding-bottom: 10px;">
            🧹 Новая заявка с сайта клининговой компании
          </h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #3D8B7D; margin-bottom: 10px;">👤 Информация о клиенте:</h3>
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0A5189;">${email}</a></p>
            ${phone ? `<p><strong>Телефон:</strong> <a href="tel:${phone}" style="color: #0A5189;">${phone}</a></p>` : ""}
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #3D8B7D; margin-bottom: 10px;">💬 Сообщение:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #3D8B7D; border-radius: 5px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>

          ${
            attachments.length > 0
              ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #3D8B7D; margin-bottom: 10px;">📎 Прикрепленные файлы:</h3>
            <ul style="list-style-type: none; padding: 0;">
              ${attachments.map((att) => `<li style="padding: 5px 0;">📄 ${att.filename}</li>`).join("")}
            </ul>
          </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>Это сообщение отправлено с сайта клининговой компании ${new Date().toLocaleString("ru-RU")}</p>
          </div>
        </div>
      </div>
    `

    const mailOptions = {
      from: '"Клининговая компания" <827469001@smtp-brevo.com>',
      to: "harabugaslava@gmail.com",
      subject: `🧹 Новая заявка от ${name}`,
      html: htmlContent,
      attachments: attachments,
    }

    console.log("📤 Sending email to:", mailOptions.to)

    const info = await transporter.sendMail(mailOptions)
    console.log("✅ Email sent successfully:", info.messageId)

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    })
  } catch (error) {
    console.error("❌ Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Email service unavailable",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
