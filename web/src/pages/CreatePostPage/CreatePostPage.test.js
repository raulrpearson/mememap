import { render } from '@redwoodjs/testing/web'

import CreatePostPage from './CreatePostPage'

describe('CreatePostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreatePostPage />)
    }).not.toThrow()
  })
})
