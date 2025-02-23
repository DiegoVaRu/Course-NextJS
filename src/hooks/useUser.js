import { useEffect, useState } from 'react'
import { authStateChanged } from '@/firebase/client'
import { useRouter } from 'next/navigation'
import { logout } from '@/firebase/client'

export default function useUser() {
    const [user, setUser] = useState(undefined)
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = authStateChanged(setUser)
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        user === null && router.replace('/')
    } ,[user])

    const handleLogout = async () => {
        await logout()
        setUser(null)
    }

    return { user, handleLogout }
}