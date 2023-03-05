import { AppShell } from '@mantine/core';
import type { MetaFunction } from "@remix-run/node";
import styles from "~/styles/global.css";
import { MantineProvider, createEmotionCache, Container } from '@mantine/core';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavbarDashboard from './components/layouts/NavbarDashboard';
import HeaderDashboard from './components/layouts/HeaderDashboard';
import Breadcrumbs2 from './components/Breadcrumbs2';

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

createEmotionCache({ key: 'mantine' });

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          <AppShell
            navbarOffsetBreakpoint="sm"
            navbar = {
              <NavbarDashboard />
            }
          >
            <div style={{ minHeight: '92vh' , borderRadius: '10px', margin: '2rem'}}>
              <Breadcrumbs2 />
              <Outlet />
            </div>  
          </AppShell>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
    
  );
}
