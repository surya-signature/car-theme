
"use client";
import { ThemeProvider } from 'next-themes'; // Import ThemeProvider
import { usePathname } from 'next/navigation';
import { Navbar, Footer } from '@/components';
import DashboardLayout from './dashboard/DashboardLayout';
import './globals.css'; // Import global styles

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class"> {/* Wrap everything inside ThemeProvider */}
          {pathname.startsWith('/dashboard') ? (
            <DashboardLayout>{children}</DashboardLayout>
          ) : (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}

