export const resolvers = {
  pet: {
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
    }
  },
  pets: {
    owner: {
      age() {
        return 15
      },
      id() {
        return 123
      }
    },
    id() {
      return 234
    },
    type() {
      return 'DOG'
    },
    name() {
      return 'Jimmy Local'
    },
    img() {
      return "http://placekitten.com/300/300"
    }
  }
}