import "./globals.css";
import { Cairo } from 'next/font/google';
import SessionProvider from './components/SessionProvider';
import { getServerSession } from "next-auth";


const cairo = Cairo({
  display: 'swap',
  weights: [400, 700],
  styles: ['normal', 'italic'],
  subsets: ['latin-ext']
})


export default async function RootLayout({ children }) {

  const session = await getServerSession();

  return (
      <html lang="en" className={cairo.className}>
        <body className="text-white bg-gradient-to-r from-purple-600 to-indigo-600 flex justify-center items-center p-24">
          <SessionProvider session={session}>
            {children}
          </SessionProvider>       
        </body>
      </html>  
  )
}
