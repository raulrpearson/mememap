import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={routes.explore()}>Explore</Link>
            </li>
            <li>
              <Link to={routes.createPost()}>Create Post</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
