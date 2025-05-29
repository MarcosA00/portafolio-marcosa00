import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { nombre, email, mensaje } = await req.json();

    await sendgrid.send({
      to: "maracastror@gmail.com", // Cambia por tu correo real
      from: "maracastror@gmail.com", // Debe estar verificado en SendGrid
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}