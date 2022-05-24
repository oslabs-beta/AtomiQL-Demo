export const resolvers = {
  // Query: {
  //   pets() {
  //     return 'asdfas'
  //   },
  // },
  Pet: {
    // name(pet: any, _context: any, _c: any, _astNode: any) {
    name() {
      // console.log(`pet`, pet);
      // console.log(`_astNode`, _astNode)
      return 'Local jimmy'
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
      const max = 100;
      const min = 1;
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
}
