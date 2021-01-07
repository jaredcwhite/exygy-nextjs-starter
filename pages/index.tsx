import Layout from "../layouts/application"
import Listings, { Listing } from "../components/Listings"

// Messing around with different ways of adding in data
let listings: Listing[] = []
listings.push({id: 3, name: "First Listing!"})
listings.push({id: 6, name: "Second Listing", featured: true})
let thirdListing = {id: 12, name: "Third Listing"}
listings.push(thirdListing)

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to Next.js</h1>
      <Listings listings={listings} />
    </Layout>
  )
}
