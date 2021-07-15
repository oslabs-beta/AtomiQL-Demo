module.exports = {
  Query: {
    pets(_, {input}, {models}) {
      return models.Pet.findMany(input || {})
    },
    pet(_, {input}, {models}) {
      const { id, name } = input;
      if (id) return models.Pet.findOne({id})
      if (name) return models.Pet.findOne({name})
    },
    user(_, __, {models}) {
      return models.User.findOne()
    }
  },
  Mutation: {
    addPet(_, {input}, {models, user}) {
      // function sleep(miliseconds) {
      //   let currentTime = new Date().getTime();
      //   while (currentTime + miliseconds >= new Date().getTime()) {
      //   }
      // }
      // sleep(100)
      const pet = models.Pet.create({...input, user: user.id})
      return pet
    }
  },
  Pet: {
    owner(pet, _, {models}) {
      return models.User.findOne({id: pet.user})
    },
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    }
  },
  User: {
    pets(user, _, {models}) {
      return models.Pet.findMany({user: user.id})
    }
  }
}
