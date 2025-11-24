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
    
    // Utiliser le domaine vérifié si disponible, sinon le domaine de test Resend
    const fromEmail = process.env.RESEND_FROM_EMAIL || "CyberTrustInfo Contact <onboarding@resend.dev>";
    
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["contact@cybertrustinfo.com"], // Email de destination
      replyTo: email,
      subject: `[Contact Site] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #0F172A; border-bottom: 3px solid #3B82F6; padding-bottom: 10px;">
            Nouveau message de contact
          </h1>
          <div style="background: #F8FAFC; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Nom:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 5px 0;"><strong>Sujet:</strong> ${subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <h2 style="color: #1E293B; font-size: 18px;">Message:</h2>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #334155;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 30px 0;" />
          <p style="color: #64748B; font-size: 12px;">
            Ce message a été envoyé depuis le formulaire de contact du site CyberTrustInfo Consulting.
          </p>
        </div>
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

