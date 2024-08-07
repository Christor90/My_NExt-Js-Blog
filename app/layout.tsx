import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const montserrat = Montserrat({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
});

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MyBlog',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
        </ThemeProvider>
        {children}
        <Footer />
      </body>
    </html>
  );
}
