import Link from "next/link"

const Header = () => (
  <header>
    <nav>
      <Link href="/">
        <a style={{fontSize: "1.5rem", fontWeight: "900"}}>Next.js Demo</a>
      </Link>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
