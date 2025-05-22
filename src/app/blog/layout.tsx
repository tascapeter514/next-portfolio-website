import '../globals.css'



export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <main>{children}</main>
 
  );
}