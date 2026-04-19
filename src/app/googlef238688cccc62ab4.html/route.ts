/**
 * Google Search Console site verification.
 * Serves the verification file at /googlef238688cccc62ab4.html
 */
export async function GET() {
  return new Response(
    "google-site-verification: googlef238688cccc62ab4.html",
    {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    }
  );
}
