import Head from "next/head"
import Header from "../components/header"

const layoutStyle = {
  border: '1px solid #DDD'
}

const Layout = props => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main style={layoutStyle}>
      {props.children}
    </main>
  </>
);

export default Layout