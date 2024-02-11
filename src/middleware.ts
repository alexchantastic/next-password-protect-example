import { withAuth } from 'next-auth/middleware';

export default withAuth({
  secret: 'thisisasecret',
});

export const config = { matcher: ["/middleware-protected/:path*"] }