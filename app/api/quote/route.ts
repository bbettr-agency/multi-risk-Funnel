import { NextResponse } from "next/server";
import { validateLead, coverTypeLabel, type LeadPayload } from "@/lib/lead";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Receives a quote request from the native form, validates it, and forwards it
 * to the GoHighLevel inbound webhook (which emails the lead to the client and
 * creates the CRM contact). Returns JSON; the client then redirects to
 * /thank-you so Google Ads registers the conversion.
 *
 * Set GHL_WEBHOOK_URL in the environment (see .env.example).
 */
export async function POST(request: Request) {
  let body: Partial<LeadPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const { valid, errors, clean } = validateLead(body);
  if (!valid) {
    return NextResponse.json(
      { ok: false, error: errors.join(" ") },
      { status: 422 }
    );
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  // Payload shaped for GHL / email — flat keys are easiest to map in a workflow.
  const payload = {
    full_name: clean.name,
    phone: clean.phone,
    email: clean.email ?? "",
    cover_type: coverTypeLabel(clean.coverType),
    cover_needs: clean.needs.join(", "),
    message: clean.message ?? "",
    source: clean.source ?? "Multi Risk funnel",
    page_url: clean.pageUrl ?? "",
    submitted_at: new Date().toISOString(),
  };

  if (!webhookUrl) {
    // No endpoint configured yet — don't lose the lead silently in dev.
    console.warn(
      "[quote] GHL_WEBHOOK_URL not set. Lead received but NOT forwarded:",
      payload
    );
    // Allow the funnel to complete in development/preview.
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("[quote] Webhook responded", res.status);
      return NextResponse.json(
        { ok: false, error: "We couldn't submit your request. Please call us." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    console.error("[quote] Webhook error", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't submit your request. Please call us." },
      { status: 502 }
    );
  }
}
