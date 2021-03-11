import Head from "next/head"
import { useRouter } from "next/router"
import Header from "../components/header"

const layoutStyle = {
  border: '1px solid #DDD'
}

const Layout = props => {
  const { locale } = useRouter()

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={layoutStyle}>
        {props.children}
      </main>
      <footer>
        Locale: {locale}
      </footer>
    </>
  )
}

export default Layout