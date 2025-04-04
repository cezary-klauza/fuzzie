import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isPrivateRoute = createRouteMatcher(['/dashboard', '/settings'])
const isPublicRoute = createRouteMatcher(['/', '/sign-in', '/sign-up'])

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId, redirectToSignIn } = await auth()

  // For users visiting /onboarding, don't try to redirect
  if (userId && isPrivateRoute(req)) {
    return NextResponse.next()
  }

  // If the user isn't signed in and the route is private, redirect to sign-in
  if (!userId && !isPublicRoute(req)) return redirectToSignIn({ returnBackUrl: req.url })

  // If the user is logged in and the route is protected, let them view.
  if (userId && !isPublicRoute(req)) return NextResponse.next()

  return NextResponse.next();
})

export const config = {
  matcher: [
    // Exclude Next.js internals, static files, and API routes
    '/((?!_next|api/|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};