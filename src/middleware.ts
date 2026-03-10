import { NextRequest, NextResponse } from "next/server";

const USERNAME = process.env.AUTH_USERNAME ?? "";
const PASSWORD = process.env.AUTH_PASSWORD ?? "";

export function middleware(req: NextRequest) {
  const auth = req.headers.get("authorization");

  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const colonIndex = decoded.indexOf(":");
      const user = decoded.substring(0, colonIndex).trim();
      const pass = decoded.substring(colonIndex + 1).trim();
      if (user === USERNAME.trim() && pass === PASSWORD.trim()) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Lek Records"',
    },
  });
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
