import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query GET_ALL_USERS {
    users {
      id
      name
      age
      description
      location
    }
  }
`;
