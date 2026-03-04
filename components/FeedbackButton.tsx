'use client'

export default function FeedbackButton() {
  const surveyUrl = 'https://qualtricsxmhssf9mhds.qualtrics.com/jfe/form/SV_9RAaLyd9YUWyBNk'

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href={surveyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-orange-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-orange-600 hover:scale-110 cursor-pointer"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </a>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        问卷调查
      </span>
    </div>
  )
}
