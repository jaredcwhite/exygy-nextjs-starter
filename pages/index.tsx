import Head from "next/head"
import Layout from "../layouts/application"
import Listings, { Listing } from "../components/Listings"

export default function Home(props: any) {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>

      <h1>Welcome to Next.js</h1>
      <Listings listings={props.listings} />
    </Layout>
  )
}

export async function getStaticProps() {
  // Messing around with different ways of adding in data
  let listings: Listing[] = []
  listings.push({id: 3, name: "First Listing!"})
  listings.push({id: 6, name: "Second Listing", featured: true})
  let thirdListing = {id: 12, name: "Third Listing"}
  listings.push(thirdListing)

  return { props: { listings } }
}
