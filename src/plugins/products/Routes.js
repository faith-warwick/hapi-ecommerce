import Joi from "joi";

export default [
  {
    method:'POST',
    path:'/v1/products',
    options:{
      tags:['api'],
      validate: {
        payload: {
          name: Joi.string().min(3).required(),
          price: Joi.number().min(0).required(),
          description: Joi.string(),
          isActive: Joi.boolean().default(true)
        }
      }
    },
    async handler (request, h) {
      const product = request.payload
      const {products} = request.server.plugins.products
      return await products.insert(product)
    }
  },

  {
    method:'GET',
    path:'/v1/products',
    options:{
      tags:['api']
    },
    async handler (request, h) {
      const { products } = request.server.plugins.products
      return await products.find({})
    }
  }
]
