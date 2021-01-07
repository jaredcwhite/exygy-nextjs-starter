import Head from "next/head"
import { useRouter } from "next/router"
import Layout from "../../layouts/application.js"

export default function Listing() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Listing {router.query.id}</title>
      </Head>

      <h1>Listing Id: {router.query.id}</h1>
      <p>This is the listing content.</p>
    </Layout>
  );
}