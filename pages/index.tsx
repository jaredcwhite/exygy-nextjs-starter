import Layout from '../layouts/application';
import Listings, { Listing } from '../components/Listings'

import axios from 'axios';

// Messing around with different ways of adding in data
let listings: Array<Listing> = []
listings.push({id: 3, name: "First Listing!"})
listings.push({id: 6, name: "Second Listing", featured: true})
let thirdListing = {id: 12, name: "Third Listing"}
listings.push(thirdListing)

const Index = (props: any) => (
  <Layout>
    <p>Hello Next.js</p>
    <Listings listings={listings} />
    <hr/>
    <p>Testing out fetching data from an API, using the Batman show data from one of the Next.js tutorials.</p>
    <ul>
      {props.shows.map((show: any) => (
        <li key={show.id}>
          <span>{show.name}</span>
        </li>
      ))}
    </ul>
  </Layout>
)

// Try fetching data from API. Uses Batman show data from this Next.js
// tutorial: https://nextjs.org/learn/basics/fetching-data-for-pages
Index.getInitialProps = async function() {
  interface Show {
    show: Object;
  }

  try {
    const response = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
    return {
      shows: response.data.map((entry: Show) => entry.show)
    };
  } catch (error) {
    console.log(error);
  }
};

export default Index
