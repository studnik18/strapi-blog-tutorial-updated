import { gql } from "@apollo/client";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      data {
        attributes {
          slug
          name
        }
      }
    }
  }
`;

export default CATEGORIES_QUERY;
