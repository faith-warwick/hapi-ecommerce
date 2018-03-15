import Joi from 'joi'

export default [
  {
    method:'POST',
    path:'/v1/users',
    options:{
      tags:['api'],
      validate: {
        payload: {
          UserName: Joi.string().min(0).required(),
          FirstName: Joi.string().min(0).required(),
          LastName: Joi.string().min(0).required(),
          Address: Joi.string().required()
        }
      }
    },
    async handler (request, h) {
      const user = request.payload
      const {users} = request.server.plugins.users
      return await users.insert(user)
    }
  },

  {
    method:'GET',
    path:'/v1/users',
    options:{
      tags:['api']
    },
    async handler (request, h) {
      const { users } = request.server.plugins.users
      return await users.find({})
    }
  }
]
