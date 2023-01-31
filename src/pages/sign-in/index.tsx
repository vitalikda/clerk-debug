import { useState } from 'react'

import { useSignIn } from '@clerk/nextjs'
import { getAuth } from '@clerk/nextjs/server'
import { GetServerSideProps } from 'next'

const SignInIndexPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { signIn } = useSignIn()
  const handleButtonClick = async () => {
    setIsLoading(true)

    try {
      return signIn?.authenticateWithRedirect({
        strategy: 'oauth_github',
        redirectUrl: '/sign-in/redirect',
        redirectUrlComplete: '/'
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <button onClick={handleButtonClick} disabled={isLoading}>
        Continue with GitHub
      </button>
    </div>
  )
}

export const config = {
  runtime: 'experimental-edge'
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { userId } = getAuth(req)

  if (!userId) {
    return { props: {} }
  }

  return {
    redirect: {
      permanent: true,
      destination: '/'
    }
  }
}

export default SignInIndexPage
