import React from "react";
import Listings, { Listing } from "../components/Listings";


export default {
  title: "Listings",
}

let listings: Listing[] = []
listings.push({id: 3, name: "Listing 1"})
listings.push({id: 6, name: "Listing 2", featured: true})
let thirdListing = {id: 12, name: "Listing 3"}
listings.push(thirdListing)

export const simpleList = () => (
  <Listings listings={listings} />
)
