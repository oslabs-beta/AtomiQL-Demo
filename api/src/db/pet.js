const {nanoid} = require('nanoid')

const createPetModel = db => {
  return {
    findMany(filter) {
      return db.get('pet')
        .filter(filter)
        .orderBy(['createdAt'], ['desc'])
        .value()
    },

    findOne(filter) {
      return db.get('pet')
        .find(filter)
        .value()
    },

    create(pet) {
      const createdAt = parseInt(Date.now().toString().slice(5));
      const newPet = {id: nanoid(), createdAt, ...pet}
      
      db.get('pet')
        .push(newPet)
        .write()

      return newPet
    }
  }
}

module.exports = createPetModel
