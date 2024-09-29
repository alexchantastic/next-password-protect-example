# next-password-protect-example

This is an example project that demonstrates how to password protect routes with [Next.js](https://nextjs.org/) (App Router) and [iron-session](https://github.com/vvo/iron-session).

Read the full walkthrough at [https://www.alexchantastic.com/revisiting-password-protecting-next](https://www.alexchantastic.com/revisiting-password-protecting-next).

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

Create an `.env.local` file:

```
IRON_SESSION_SECRET="replace_with_your_secret" # Must be at least 32 characters
IRON_SESSION_PASSWORD="replace_with_your_password"
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

