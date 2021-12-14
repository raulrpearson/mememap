import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const CreatePostPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags
        title="Create Post"
        description="Create a new post and add it to the mememap."
      />

      <h1>Create Post</h1>

      <Form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <TextField name="title" validation={{ required: true }} />
        <FieldError name="title" />

        <label htmlFor="content">Content</label>
        <TextAreaField name="content" />
        <FieldError name="content" />

        <Submit>Post</Submit>
      </Form>
    </>
  )
}

export default CreatePostPage
