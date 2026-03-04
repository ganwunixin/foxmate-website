import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  metadataBase: new URL('https://foxmate-izg86rogz-nikkoyuhengmei-4002s-projects.vercel.app'),
  title: 'FoxMate AI - Your Cute Focus Companion',
  description: 'Stay focused and productive with your adorable fox companion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
