'use client'

import '../styles/Home.css'
import Button from '@/components/ui/Button'
import Avatar from '@/components/ui/Avatar'
import Image from 'next/image'
import GitHub from '@/components/ui/GitHub'
import { authStateChanged, loginWithGitHub } from '@/firebase/client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useUser from '@/hooks/useUser'

export default function Home() {
  const { user } = useUser()
  const router = useRouter() 

  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  const handleClick = async () => {
    const user = await loginWithGitHub()
    console.log(user)
  }

  return (
    <>
      <Image src="/devter-logo.png" width={160} height={155} alt="Logo" />
      <h1>Dev<span>.</span>ter</h1>
      {
        user === undefined &&
        <Image src='/loading.svg'
        width={80} height={80}
        alt='Loading...'/>
      }
      {
        user === null && (
          <>
            <h2><span>&lt;</span>Develop your talk<br />with developers <span>/&gt;</span></h2>
            <Button onClick={handleClick}>
              <GitHub width='26px' height='26px' fill='#fff' />
              Login with GitHub
            </Button>
          </>
        )
      }
    </>
  );
}
