import React from 'react';
import { storiesOf } from '@storybook/react';
import Listings, { Listing } from '../components/Listings';

let listings: Array<Listing> = []
listings.push({id: 3, name: "Listing 1"})
listings.push({id: 6, name: "Listing 2", featured: true})
let thirdListing = {id: 12, name: "Listing 3"}
listings.push(thirdListing)

storiesOf('Listings', module)
  .add('simple list', () => (
    <Listings listings={listings} />
  )) 
