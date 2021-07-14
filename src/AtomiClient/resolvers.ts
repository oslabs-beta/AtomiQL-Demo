export const resolvers = {
  // Query: {
  //   pets() {
  //     return 'asdfas'
  //   },
  // },
  Pet: {
    name(pet: any, _context: any, _c: any, _astNode: any) {
      return pet.id + ' Local'
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
