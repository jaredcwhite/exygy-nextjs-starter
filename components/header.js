import Link from 'next/link';

const Header = () => (
  <nav className="level has-margin-bottom-15">
    <div className="level-left">
      <strong className="level-item">Next.js Starter</strong>
      <Link href="/">
        <a className="level-item">Home</a>
      </Link>
      <Link href="/about">
        <a className="level-item">About</a>
      </Link>
    </div>
  </nav>
);

export default Header;