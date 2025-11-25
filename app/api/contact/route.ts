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

    // 2. Vérification de la clé API avec diagnostic
    const apiKey = process.env.RESEND_API_KEY;
    
    // Diagnostic pour comprendre pourquoi la clé n'est pas accessible
    if (!apiKey) {
      console.error("❌ RESEND_API_KEY manquante. Impossible d'envoyer l'email.");
      console.error("🔍 Diagnostic:");
      console.error("  - process.env.RESEND_API_KEY:", apiKey);
      console.error("  - Toutes les variables RESEND_*:", Object.keys(process.env).filter(k => k.startsWith('RESEND')));
      console.error("  - NODE_ENV:", process.env.NODE_ENV);
      console.log("Données du formulaire:", { name, email, subject, message });
      return NextResponse.json(
        { 
          error: "Configuration manquante",
          message: "La clé API Resend n'est pas accessible au runtime. Vérifiez que la variable est configurée dans Vercel et que le projet a été redéployé.",
          simulated: true
        },
        { status: 500 }
      );
    }

    // Vérifier que la clé a le bon format
    if (!apiKey.startsWith('re_')) {
      console.error("⚠️ Format de clé API invalide. La clé doit commencer par 're_'");
      return NextResponse.json(
        {
          error: "Configuration invalide",
          message: "Le format de la clé API Resend est invalide."
        },
        { status: 500 }
      );
    }

    // 3. Envoi réel avec Resend
    try {
      const resend = new Resend(apiKey);
      
      // Utiliser le domaine vérifié (cybertrustinfo.com est vérifié dans Resend)
      const fromEmail = process.env.RESEND_FROM_EMAIL || "CyberTrustInfo Contact <contact@cybertrustinfo.com>";
      
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
        console.error("❌ Erreur Resend:", JSON.stringify(data.error, null, 2));
        
        // Gestion spécifique de l'erreur de domaine de test
        const errorMessage = data.error.message || "";
        if (errorMessage.includes("testing emails") || errorMessage.includes("your own email")) {
          return NextResponse.json(
            { 
              error: "Configuration Resend requise",
              message: "Le domaine cybertrustinfo.com doit être vérifié dans Resend pour envoyer des emails. En attendant, contactez-nous directement à contact@cybertrustinfo.com",
              details: "Avec le domaine de test onboarding@resend.dev, vous ne pouvez envoyer qu'à votre propre email. Vérifiez votre domaine dans Resend pour utiliser contact@cybertrustinfo.com comme expéditeur."
            },
            { status: 500 }
          );
        }
        
        return NextResponse.json(
          { 
            error: "Erreur lors de l'envoi de l'email",
            details: errorMessage || "Vérifiez votre configuration Resend"
          },
          { status: 500 }
        );
      }

      console.log("✅ Email envoyé avec succès:", data);
      return NextResponse.json({ success: true, data });
    } catch (resendError: any) {
      console.error("❌ Erreur lors de l'appel Resend:", resendError);
      return NextResponse.json(
        {
          error: "Erreur lors de la communication avec le service d'email",
          details: resendError.message || "Vérifiez votre clé API Resend"
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Erreur API Contact:", error);
    return NextResponse.json(
      { error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
}

