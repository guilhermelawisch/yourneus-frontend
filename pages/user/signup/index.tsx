import Head from "next/head"
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import cx from 'classnames'

import { Background } from "../../../src/components/Background"
import { Header } from "../../../src/components/Header"

import { ToggleContext } from "../../../src/context/ToggleContext"
import { AuthContext } from "../../../src/context/AuthContext"

import { Container } from "../../../src/styles/sign"

type IData = {
  username: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const { register, handleSubmit } = useForm()

  const { theme, toggleVisible } = useContext(ToggleContext)
  const { signUp } = useContext(AuthContext)

  const handleSignIn = async (data: IData) => {
    await signUp(data)
  }

  useEffect(() => {
    toggleVisible(true)
  }, [])

  return (
    <>
      <Head>
        <title>YourneuS | Sign Up</title>
      </Head>

      <Background>
        <Header />
        <Container>
          <div>
            <div>
              <h2>Create you account now</h2>
              <form onSubmit={handleSubmit(handleSignIn)} className={cx(
                theme ? 'dark' : ''
              )}>
                <input {...register('username')} type="text" name="username" id="username" placeholder="Name" />
                <input {...register('email')} type="text" name="email" id="email" placeholder="Email" />
                <input {...register('password')} type="password" name="password" id="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </Container>
      </Background>
    </>
  )
}