import Layout from '../layouts/application';
import Listings, { Listing } from '../components/Listings'

// Messing around with different ways of adding in data
let listings: Array<Listing> = []
listings.push({id: 3, name: "First Listing!"})
listings.push({id: 6, name: "Second Listing", featured: true})
let thirdListing = {id: 12, name: "Third Listing"}
listings.push(thirdListing)

const Index = () => (
  <Layout>
    <h1 className="title">Hello Next.js</h1>
    <Listings listings={listings} />
    <hr/>
  </Layout>
)

export default Index
