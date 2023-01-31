import { AuthenticateWithRedirectCallback } from '@clerk/nextjs'

/**
 * Clerk auth flow redirect page
 * @note This is only called on Sign Up (Not on Sign In)
 */
const AuthCallbackPage = () => {
  return (
    <div>
      <AuthenticateWithRedirectCallback redirectUrl={'/'} />
    </div>
  )
}

export default AuthCallbackPage
