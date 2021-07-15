export const resolvers = {
  // Query: {
  //   pets() {
  //     return 'asdfas'
  //   },
  // },
  Pet: {
    name(pet: any, _context: any, _c: any, _astNode: any) {
      console.log(`pet`, pet);
      console.log(`_astNode`, _astNode)
      return 'Local name'
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
