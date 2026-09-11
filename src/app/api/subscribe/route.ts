import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID;

export async function POST(req: NextRequest) {
  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
    console.error("Brevo is not configured (missing API key or list ID).");
    return NextResponse.json({ error: "Mailing list is not configured yet." }, { status: 500 });
  }

  let email: unknown;
  try {
    ({ email } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": BREVO_API_KEY,
    },
    body: JSON.stringify({
      email,
      listIds: [Number(BREVO_LIST_ID)],
      updateEnabled: true,
    }),
  });

  // Brevo returns 400 "duplicate_parameter" when the contact already exists —
  // treat that as a successful signup rather than an error.
  if (!res.ok && res.status !== 400) {
    const body = await res.text();
    console.error("Brevo subscribe failed:", res.status, body);
    return NextResponse.json({ error: "Could not sign up right now. Try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
