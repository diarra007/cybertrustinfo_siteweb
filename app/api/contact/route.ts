import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

// Initialisation de Resend déplacée dans le handler pour éviter les erreurs de build si la clé est manquante

// Validation schéma identique au front pour sécurité serveur
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
  consent: z.boolean().refine((val) => val === true),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validation des données
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Données invalides" },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    // 2. Simulation d'envoi si pas de clé API (pour éviter crash en dév sans env)
    if (!process.env.RESEND_API_KEY) {
      console.log("⚠️ RESEND_API_KEY manquante. Simulation d'envoi :");
      console.log({ name, email, subject, message });
      // Simule un délai réseau
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, message: "Email simulé (Clé API manquante)" });
    }

    // 3. Envoi réel avec Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: "CyberTrustInfo Contact <onboarding@resend.dev>", // Utiliser un domaine vérifié en prod
      to: ["contact@cybertrustinfo.com"], // Email de destination
      replyTo: email,
      subject: `[Contact Site] ${subject}`,
      html: `
        <h1>Nouveau message de ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (data.error) {
        console.error("Erreur Resend:", data.error);
        return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("Erreur API Contact:", error);
    return NextResponse.json(
      { error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
}

