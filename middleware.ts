import { NextResponse } from "next/server"


export function middleware(request: { url: string | URL | undefined }) {
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ["/about/:path*"]
}