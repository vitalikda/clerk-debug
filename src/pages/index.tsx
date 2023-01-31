import styles from '@/styles/Home.module.css'
import { getAuth } from '@clerk/nextjs/server'
import { Inter } from '@next/font/google'
import { GetServerSideProps } from 'next/types'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <main className={styles.main}>
        <div className={styles.description}>Hello</div>
      </main>
    </div>
  )
}

export const config = {
  runtime: 'experimental-edge'
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { userId } = getAuth(ctx.req)
  console.log('getServerSideProps', userId)

  return {
    props: {}
  }
}
