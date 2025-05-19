import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // In a real implementation, you would use a service like Nodemailer, SendGrid, or Resend
    // to send the email to rajeevaken03@gmail.com

    // For demonstration purposes, we'll just log the data and return a success response
    console.log("Email data:", { name, email, message, recipient: "rajeevaken03@gmail.com" })

    // Simulate a delay to make the loading state visible
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
