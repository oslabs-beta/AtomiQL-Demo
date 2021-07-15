import { gql } from 'graphql-tag';

export const typeDefs = gql`
  enum PetType {
    CAT
    DOG
  }

type User {
  id: ID!
  username: String!
  pets: [Pet]!
  age: Int
}

type Pet {
  id: ID!
  type: PetType!
  name: String!
  owner: User!
  img: String!
  createdAt: Int!
}

input NewPetInput {
  name: String!
  type: PetType!
}

input PetsInput {
  id: ID
  type: PetType
  name: String
}

type Query {
  user: User!
  pets(input: PetsInput): [Pet]!
  pet(input: PetsInput): Pet!
}

type Mutation {
  addPet(input: NewPetInput!): Pet!
}
`;
