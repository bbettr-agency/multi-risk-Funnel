import type { CoverTypeId } from "@/config/form-config";

export type LeadPayload = {
  coverType: CoverTypeId | "";
  needs: string[];
  name: string;
  phone: string;
  email?: string;
  message?: string;
  // Attribution (populated client-side from the URL / referrer)
  source?: string;
  pageUrl?: string;
};

export type LeadResult = { ok: boolean; error?: string };

// Basic server-side validation for the incoming lead.
export function validateLead(data: Partial<LeadPayload>): {
  valid: boolean;
  errors: string[];
  clean: LeadPayload;
} {
  const errors: string[] = [];

  const name = (data.name ?? "").toString().trim();
  const phone = (data.phone ?? "").toString().trim();
  const email = (data.email ?? "").toString().trim();

  if (name.length < 2) errors.push("Please enter your full name.");

  // Accept SA-style numbers: digits, spaces, +, (), - — need at least 9 digits.
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 9) errors.push("Please enter a valid phone number.");

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  const clean: LeadPayload = {
    coverType: (data.coverType as CoverTypeId) ?? "",
    needs: Array.isArray(data.needs) ? data.needs.slice(0, 10) : [],
    name,
    phone,
    email: email || undefined,
    message: (data.message ?? "").toString().trim().slice(0, 1000) || undefined,
    source: (data.source ?? "").toString().slice(0, 200) || undefined,
    pageUrl: (data.pageUrl ?? "").toString().slice(0, 500) || undefined,
  };

  return { valid: errors.length === 0, errors, clean };
}

// Human-readable cover-type label for the email/CRM payload.
export function coverTypeLabel(id: string): string {
  switch (id) {
    case "personal":
      return "Personal Insurance";
    case "commercial":
      return "Commercial Insurance";
    case "specialised":
      return "Specialised Insurance";
    default:
      return "General enquiry";
  }
}
