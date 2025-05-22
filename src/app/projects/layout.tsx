import '../globals.css'



export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <main className='bg-[var(--background)]'>{children}</main>
 
  );
}
