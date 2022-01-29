import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { TodoProvider } from '../providers/TodoProvider'
import { UserProvider } from '../providers/UserProvider'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <TodoProvider>
        <ChakraProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </TodoProvider>
    </UserProvider>
  )
}

export default MyApp
