import { Button, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSendTransaction } from 'wagmi'
import { BigNumber } from '@ethersproject/bignumber'

const Home: NextPage = () => {

  const { data, isIdle, isError, isLoading, isSuccess, sendTransaction } =
    useSendTransaction({
      request: {
        to: 'yanniksood.eth',
        value: BigNumber.from('10000000000000000'), // .1 ETH
      },
    })

  return (
    <div className={styles.container}>
      <Head>
        <title>Optimeme</title>
        <meta name="description" content="ETH + Next.js DApp Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome to Optimeme
        </h2>

        <div className={styles.grid}>
          <Link href='' isExternal>
            <Button
              backgroundColor="#9c44dc"
              borderRadius="25px"
              margin={2.5}
              _hover={{
                bg: '#E4007C'
              }}
              _active={{
                bg: '#E4007C'
              }}
            >
              <p>Upload</p>
            </Button>
          </Link>



        </div>
        <div>
          <Button
            backgroundColor="#32CD32"
            borderRadius="25px"
            margin={2.5}
            _hover={{
              bg: '#E4007C'
            }}
            _active={{
              bg: '#E4007C'
            }}
            onClick={() => sendTransaction()}
          >
            <p>Custom Url</p>
          </Button>
        </div>
        <div>
          <Button
            backgroundColor="#32CD32"
            borderRadius="25px"
            margin={2.5}
            _hover={{
              bg: '#E4007C'
            }}
            _active={{
              bg: '#E4007C'
            }}
            onClick={() => sendTransaction()}
          >
            <p>Go !</p>
          </Button>
        </div>
      </main>
    </div>
  )
}

export default Home
