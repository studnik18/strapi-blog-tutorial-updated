import { gql } from "@apollo/client";

const ARTICLE_QUERY = gql`
query Article($slug: String!) {
  articles(filters: { slug: { eq: $slug } }) {
    data {
      attributes {
        slug
        title
        description
        content
        category {
          data {
            attributes {
              slug
              name
            }
          }
        }
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`;

export default ARTICLE_QUERY;
