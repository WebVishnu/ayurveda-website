import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from '@/components/ScrollToTop';
import Aoscompo from "@/utils/aos";
import { DonationProvider } from "./context/donationContext";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";
const montserrat = Montserrat({ subsets: ["latin"] });
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
      <NextTopLoader color="#FF4D7E" />
      <DonationProvider>
        <AuthDialogProvider>
      <SessionProviderComp>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Aoscompo>
            <Header />
            
            {children}
            
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
        </SessionProviderComp>
        </AuthDialogProvider>
        </DonationProvider>
      </body>
    </html>
  );
}
