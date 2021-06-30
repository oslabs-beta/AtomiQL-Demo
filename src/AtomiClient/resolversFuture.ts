export const resolvers = {
  Pet: {
    name() {
      return 'Jones Local'
    },
    createdAt() {
      return 51;
    },
    img() {
      return "http://placekitten.com/300/300"
    },
    id() {
      return 32
    },
    type() {
      return 'DOG'
    },
  },
  User: {
    age() {
      return 15
    },
    id() {
      return 123
    }
  }
}