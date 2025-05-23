import "./globals.css";
import Navigation from '@/components/Navigation';
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className='bg-[var(--background)] flex flex-col items-center gap-10 p-[3em]'
      >
        <Navigation />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
