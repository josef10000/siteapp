"use server";

import { db } from "@/lib/firebase-admin";

export async function captureLead(formData: {
  name: string;
  whatsapp: string;
  quizAnswers: string[];
}) {
  if (!db) {
    console.error("Database connection not established");
    return { success: false, error: "Database error" };
  }

  try {
    const leadData = {
      name: formData.name,
      whatsapp: formData.whatsapp,
      notes: `Diagnóstico HubSumples v3.0: ${formData.quizAnswers.join(", ")}`,
      leadSource: "SiteApp Diagnostic",
      status: "Novo", // Status inicial no CRM
      createdAt: Date.now(),
      estimatedValue: 0,
      email: "",
      niche: "",
      activities: [
        {
          id: `act_${Date.now()}`,
          type: "NOTE",
          content: "Lead capturado via Quiz de Diagnóstico HubSumples.",
          timestamp: Date.now()
        }
      ]
    };

    const docRef = await db.collection("leads").add(leadData);
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error capturing lead:", error);
    return { success: false, error: "Failed to save lead" };
  }
}
