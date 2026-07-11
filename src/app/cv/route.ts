import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

// Proxies the Google Docs PDF export so the downloaded file gets a
// recruiter-friendly name instead of the Drive document title.
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
        "Content-Disposition": 'attachment; filename="Antonio Rodriguez-Ynyesto - CV.pdf"',
        "Cache-Control": "public, max-age=0, s-maxage=3600",
      },
    });
  } catch {
    // If Google is unreachable, fall back to the direct export link
    return NextResponse.redirect(SITE.cvDownload, 302);
  }
}
