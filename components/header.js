import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <nav className="mb-4">
    <strong style={linkStyle}>Next Starter</strong>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </nav>
);

export default Header;