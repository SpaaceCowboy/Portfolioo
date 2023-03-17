import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Main } from 'next/document'

const roboto = Inter({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
