import '../styles/globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Succinct ProverHub',
  description: 'A Prover hub for Succinct',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
