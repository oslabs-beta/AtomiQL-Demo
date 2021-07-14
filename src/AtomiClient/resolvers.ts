export const resolvers = {
  // Query: {
  //   pets() {
  //     return 'asdfas'
  //   },
  // },
  Pet: {
    name() {
      return 'Jones Local'
    },
    createdAt() {
      return '9999999'
    }
  },
  User: {
    id() {
      return 'local-id'
    },
    age() {
      return '66'
    }
  }
}
