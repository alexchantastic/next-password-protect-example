# next-password-protect-example

This is an example project that demonstrates how to password protect routes with [Next.js](https://nextjs.org/) (App Router) and [NextAuth.js](https://next-auth.js.org/) (aka Auth.js) might work.

Read the full walkthrough at [https://www.alexchantastic.com/password-protecting-next](https://www.alexchantastic.com/password-protecting-next).

## Setup

Clone the repository:

```sh
git clone git@github.com:alexchantastic/next-password-protect-example.git
```

Change directories into the project and install dependencies:

```sh
cd next-password-protect-example
npm install
```

## Usage

Run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project structure

```
src/
└── app/
    ├── api/
    ├── middleware-protected/
    │   └── nested-middleware-protected/
    ├── protected/
    ├── sign-in/
    └── unprotected/
```