'use client'

import { LanguageProvider } from '@/components/LanguageContext'
import FeedbackButton from '@/components/FeedbackButton'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      {children}
      <FeedbackButton />
    </LanguageProvider>
  )
}
