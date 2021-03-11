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
        <li>
          Langs: &nbsp;
          <Link href="/" locale={false}>
            <a>English</a>
          </Link>
          &nbsp;|&nbsp;
          <Link href="/zh" locale={false}>
            <a>Chinese</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
