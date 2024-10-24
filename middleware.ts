import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

interface UserCred {
  email: string;
  id: string;
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token");

  if (!token) return NextResponse.redirect(new URL("/login", request.url));

  try {
    const secret = new TextEncoder().encode(process.env.JWT_KEY)
    const payload = (await jwtVerify(token.value, secret)).payload as unknown as UserCred;
    const res = NextResponse.next();
    res.headers.set('x-user-id', payload.id);
    res.headers.set('x-user-email', payload.email);

    return (res);
  } catch (error) {
    console.log("here: ", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!api|login|signup|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    "/api/v1/job"
  ],
};
