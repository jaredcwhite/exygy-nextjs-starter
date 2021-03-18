import Head from "next/head"
import Layout from "../../layouts/application.js"

export default function Listing(props: any) {
  return (
    <Layout>
      <Head>
        <title>Listing {props.data.id}</title>
      </Head>

      <h1>Listing Id: {props.data.id}</h1>
      <p>This is the listing content… {props.data.randomNumber}</p>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const num = (Math.random() * 10000).toFixed()

  return { props: { data: {
    id: context.params.id,
    randomNumber: num
  }}}
}
