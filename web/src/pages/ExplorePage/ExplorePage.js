import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ExplorePage = () => {
  return (
    <>
      <MetaTags
        title="Explore"
        // description="Explore description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>ExplorePage</h1>
      <p>
        Find me in <code>./web/src/pages/ExplorePage/ExplorePage.js</code>
      </p>
      <p>
        My default route is named <code>explore</code>, link to me with `
        <Link to={routes.explore()}>Explore</Link>`
      </p>
    </>
  )
}

export default ExplorePage
