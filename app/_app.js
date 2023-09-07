import { Lato } from 'next/font/google'


const Lato = Lato({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={Lato.className}>
      <Component {...pageProps} />
    </main>
  )
}