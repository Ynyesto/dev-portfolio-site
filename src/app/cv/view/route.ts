import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

// Serves the CV PDF inline from our own domain so recruiters can read it
// without touching Google (blocked corporate networks, mobile Docs app nags).
export async function GET() {
  try {
    const res = await fetch(SITE.cvDownload, { next: { revalidate: 3600 } });
    const contentType = res.headers.get("content-type") ?? "";

    if (!res.ok || !res.body || !contentType.includes("application/pdf")) {
      throw new Error(`upstream ${res.status} ${contentType}`.trim());
    }

    return new Response(res.body, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Antonio Rodriguez-Ynyesto - CV.pdf"',
        "Cache-Control": "public, max-age=0, s-maxage=3600",
      },
    });
  } catch {
    // If Google is unreachable, fall back to the Docs view link
    return NextResponse.redirect(SITE.cvView, 302);
  }
}
