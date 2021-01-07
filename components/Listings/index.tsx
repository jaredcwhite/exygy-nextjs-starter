import React from 'react';
import Link from 'next/link';

export interface Listing {
  id: number;
  name: string;
  featured?: boolean;
}

interface ListingsProps {
  listings: Array<Listing>;
}

export default function Listings(props: ListingsProps) {
  const listings = props.listings

  const listItems = listings.map(listing =>
    <li key={listing.id}>
      <Link href={`listings/${listing.id}`}>
        <a>
          {listing.name}
          {listing.featured &&
            <span style={{marginLeft: '20px', fontStyle: 'italic'}}>Featured</span>
          }
        </a>
      </Link>
    </li>
  )

  return (
    <ul>{listItems}</ul>
  )
}
