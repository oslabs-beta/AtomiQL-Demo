export const resolvers = {
  Query: {
    pets() {
      return 'asdfas'
    },
  },
  Pet: {
    name() {
      return 'Jones Local'
    },
  },
  User: {
    id() {
      return 'local-id'
    }
  }
}