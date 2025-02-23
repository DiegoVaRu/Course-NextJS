import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signOut,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBlUM1PUzxBOHUBLPGQotjYmMeX5hVVU90",
    authDomain: "devter-8d897.firebaseapp.com",
    projectId: "devter-8d897",
    storageBucket: "devter-8d897.firebasestorage.app",
    messagingSenderId: "849559859956",
    appId: "1:849559859956:web:5118ac208ced3e6ad564a1",
    measurementId: "G-84FSDFCW62"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const mapUserAuth = (user) => {
  if (!user) return null
  const {reloadUserInfo} = user

  return {
    fullname: reloadUserInfo.displayName ?? null,
    username: reloadUserInfo.screenName ?? null,
    avatar: reloadUserInfo.photoUrl ?? null
  }
}

export const authStateChanged = (onChange) => {
  return onAuthStateChanged(auth, user => {
    if (user) {
      const normalizeUser = mapUserAuth(user)
      onChange(normalizeUser)
    } else {
      onChange(null)
    }
  })
}

export const loginWithGitHub = async () => {
    const provider = new GithubAuthProvider()
    try {
      await setPersistence(auth, browserLocalPersistence)
      const result = await signInWithPopup(auth, provider)
      console.log('User -login')
      return mapUserAuth(result.user)
    } catch (e) {
      console.log(`Login Failed: ${e}`)
    }
}

export const logout = async () => {
  try {
    await signOut(auth)
    console.log('User -logout')
  } catch (e) {
    console.log(`Logout Failed: ${e}`)
  }
}
