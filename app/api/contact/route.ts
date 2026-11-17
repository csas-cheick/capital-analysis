import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export const runtime = "nodejs";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validatePayload(payload: Partial<ContactPayload>): string | null {
  if (!isNonEmptyString(payload.name)) {
    return "Le nom est obligatoire.";
  }

  if (!isNonEmptyString(payload.email) || !emailRegex.test(payload.email.trim())) {
    return "Un email valide est obligatoire.";
  }

  if (!isNonEmptyString(payload.subject)) {
    return "Le sujet est obligatoire.";
  }

  if (!isNonEmptyString(payload.message)) {
    return "Le message est obligatoire.";
  }

  if (payload.message.trim().length < 10) {
    return "Le message doit contenir au moins 10 caractères.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const validationError = validatePayload(body);

    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 });
    }

    const payload: ContactPayload = {
      name: body.name!.trim(),
      email: body.email!.trim(),
      phone: body.phone?.trim() ?? "",
      subject: body.subject!.trim(),
      message: body.message!.trim(),
    };

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? user;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? user;

    if (!host || !port || !user || !pass || !fromEmail || !toEmail) {
      return NextResponse.json(
        {
          message:
            "Configuration email incomplète. Vérifiez les variables SMTP dans l'environnement.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const safeName = escapeHtml(payload.name);
    const safeEmail = escapeHtml(payload.email);
    const safePhone = escapeHtml(payload.phone || "Non renseigné");
    const safeSubject = escapeHtml(payload.subject);
    const safeMessage = escapeHtml(payload.message).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: `Site Capital Analysis <${fromEmail}>`,
      to: toEmail,
      replyTo: payload.email,
      subject: `[Contact Site] ${payload.subject}`,
      text: [
        "Nouveau message via le formulaire de contact",
        `Nom: ${payload.name}`,
        `Email: ${payload.email}`,
        `Téléphone: ${payload.phone || "Non renseigné"}`,
        `Sujet: ${payload.subject}`,
        "",
        payload.message,
      ].join("\n"),
      html: `
        <h2>Nouveau message via le formulaire de contact</h2>
        <p><strong>Nom:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Téléphone:</strong> ${safePhone}</p>
        <p><strong>Sujet:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong><br />${safeMessage}</p>
      `,
    });

    return NextResponse.json(
      { message: "Votre message a été envoyé avec succès." },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        message:
          "Impossible d'envoyer votre message pour le moment. Veuillez réessayer.",
      },
      { status: 500 },
    );
  }
}
