/* eslint-disable @typescript-eslint/no-unused-vars */
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/"]);

const authorizedParties = ["http://localhost:3000"];

// You would typically fetch these keys from a external store or environment variables.
const tenantKeys = {
  tenant1: {
    publishableKey: process.env.NEXT_PUBLIC_CLERK_ENCRYPTION_KEY,
    secretKey: process.env.NEXT_PUBLIC_CLERK_SECRET_KEY,
  },
};

export default clerkMiddleware(
  (auth, request) => {
    if (isPublicRoute(request)) {
      auth().protect();
    }
  },
  {
    secretKey: process.env.NEXT_PUBLIC_CLERK_SECRET_KEY,
    debug: false,
    authorizedParties: authorizedParties,
  }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
