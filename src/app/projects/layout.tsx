import '../globals.css'



export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <main>{children}</main>
 
  );
}
