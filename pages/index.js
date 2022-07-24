import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>MyCryptoTrees</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>


      <div className="bg-slate-300 min-h-screen text-center  m-auto align-center">

        <h1 className='text-3xl pt-10 '> Hello and welcome to My Crypto Trees </h1>
        <h1 className='text-xl mt-4 mb-14 '> Your Crypto Information Center to help create your own crypto garden! </h1>
        <h3 className='text-xl mt-10 mb-8'> Use the following links to Learn More About Crypto!</h3>


        <div className=''>
          <li>
            <Link href="/how_to_transfer_crypto_from_a_centralized_exchange_to_a_metamask_wallet">
              <a target="_blank" rel="noopener noreferrer" className='hover:text-indigo-500'>How to transfer crypto from a Centralized Exchange to a Metamask Wallet</a>
            </Link>
          </li>

          <li>
            <Link href="/how_to_calculate_crypto_profit_percentage">
              <a target="_blank" rel="noopener noreferrer" className='hover:text-indigo-500'>How to calculate crypto profit percentage</a>
            </Link>
          </li>

          <li>
            <Link href="/how_use_a_crypto_stop_order" >
              <a target="_blank" rel="noopener noreferrer " className='hover:text-indigo-500'>How use a crypto stop order</a>
            </Link>

          </li>
          <li>
            <Link href="/how_use_a_crypto_limit_order">
              <a target="_blank" rel="noopener noreferrer" className='hover:text-indigo-500'>How use a crypto limit order</a>
            </Link>
          </li>


          <li>
            <Link href="/how_use_a_crypto_market_order">
              <a target="_blank" rel="noopener noreferrer" className='hover:text-indigo-500'>How use a crypto market order</a>
            </Link>
          </li>

        </div>





      </div>
    </>
  )
}
