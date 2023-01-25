import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>My NEXT Hike</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <h1 className='text-3xl font-bold underline'>Hello World</h1>
        <Footer email="aaron.mitchell.vt@gmail.com" phone="832-540-8313" />
      </main>
    </>
  )
}
