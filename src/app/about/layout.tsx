import '../globals.css'



export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <main className='w-full flex justify-center'>{children}</main>
 
  );
}