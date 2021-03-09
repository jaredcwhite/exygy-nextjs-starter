import Head from "next/head"
import { useRouter } from "next/router"
import Layout from "../../layouts/application.js"

export default function Listing(props: any) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Listing {router.query.id}</title>
      </Head>

      <h1>Listing Id: {router.query.id}</h1>
      <p>This is the listing content. {props.data}</p>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const data = (Math.random() * 10000).toFixed()

  // Pass data to the page via props
  return { props: { data } }
}
