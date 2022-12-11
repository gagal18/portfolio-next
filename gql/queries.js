import {gql} from 'graphql-request'

// Get blogs from HYGRAPH CMS


export const GET_ALL_BLOG_POSTS = gql`
{
  blogPosts {
    createdAt
    id
    title
    updatedAt
  }
}
`
