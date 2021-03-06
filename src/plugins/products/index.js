import pkg from './package'
import Routes from './Routes'


export default {
  pkg,
  dependencies: ['mongo'],

  async register(server, options = {}) {

    server.dependency(this.dependencies, server => {
      const { db } = server.plugins.mongo
      const products = db.get('products')

      server.expose({
        products
      })

      server.route(Routes)
    })
} }
