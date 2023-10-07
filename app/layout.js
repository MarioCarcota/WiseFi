import Header from '@/components/header'
import './globals.css'


export const metadata = {
  title: 'WiseFi',
  description: 'Your all-in app for personal finance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-nero">
        <Header />
        {children}
        
        </body>
    </html>
  )
}
