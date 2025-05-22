import '../globals.css'



export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <main>{children}</main>
 
  );
}