import Head from 'next/head'
import Image from 'next/image'
import Header from 'components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blocademy</title>
      </Head>

      <Header></Header>

      <div>
        Bodyy here
      </div>
    </div>
  )
}
