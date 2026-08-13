import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL;
// Resend's shared sandbox sender works without a verified domain, but can
// only deliver to the email address the Resend account itself signed up
// with. Once a real domain is verified in Resend, set RESEND_FROM_EMAIL to
// an address on that domain (e.g. forms@fireridgegolfcourse.com) to send to
// any recipient.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

const FORM_LABELS: Record<string, string> = {
  'membership-inquiry': 'Membership Inquiry',
  contact: 'Contact Form',
};

function buildEmailHtml(body: Record<string, string>) {
  const rows = Object.entries(body)
    .filter(([key]) => key !== 'formType')
    .map(
      ([key, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;text-transform:capitalize;">${key}</td><td style="padding:4px 0;">${value || '—'}</td></tr>`,
    )
    .join('');
  return `<table>${rows}</table>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, name, email, phone } = body;

    if (!formType || !name || !email || !phone) {
      return NextResponse.json({ ok: false, error: 'Missing required fields.' }, { status: 400 });
    }

    console.log('[form submission]', JSON.stringify(body, null, 2));

    if (!RESEND_API_KEY || !TO_EMAIL) {
      console.warn('[form submission] RESEND_API_KEY or CONTACT_FORM_TO_EMAIL not set — email not sent.');
      return NextResponse.json({ ok: true });
    }

    const subject = `${FORM_LABELS[formType] ?? 'Website Form'} — ${name}`;

    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        html: buildEmailHtml(body),
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error('[form submission] Resend send failed:', emailRes.status, errText);
      return NextResponse.json({ ok: false, error: 'Failed to send email.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }
}
