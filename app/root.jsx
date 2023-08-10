import { cssBundleHref } from "@remix-run/css-bundle";

import MainNavigation from "./components/Nav/MainNavigation"

import styles from './styles/main.css'

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links = () => {
  return [
    {...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [])},
    {rel: 'stylesheet', href: styles},
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// export function ErrorBoundary({ error }) {
// <html lang="en">
//     <head>
//       <meta charSet="utf-8" />
//       <meta name="viewport" content="width=device-width,initial-scale=1" />
//       <Meta />
//       <Links />
//       <title>An Error Occured</title>
//     </head>
//     <body>
//       <header>
//         <MainNavigation />
//       </header>
//       <main>
//         <h1>An error has occured!</h1>
//         <p>{error.message}</p>
//         <p>Back to <Link to="/">safety</Link>!</p>
//       </main>
//       <ScrollRestoration />
//       <Scripts />
//       <LiveReload />
//     </body>
//   </html>
// }