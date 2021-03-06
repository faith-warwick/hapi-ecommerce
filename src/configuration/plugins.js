import Pkg from '../../package'
import MongoPlug from '../plugins/mongo'
import ProdPlugin from '../plugins/products'
import UsersPlug from '../plugins/users'

/**
 * Loads plugins
 *
 * @param {Server} server
 * @returns {Promise}
 */
export default async (server) => {

  const plugins = [
    { plugin: require('inert') },
    { plugin: require('vision') },
    { plugin: require('blipp') },
    { plugin: MongoPlug},
    { plugin: ProdPlugin},
    { plugin: UsersPlug},
    {
      plugin: require('good'),
      options: {
        ops: {
          interval: 5000,
        },
        reporters: {
          console: [
            {
              module: 'good-squeeze',
              name: 'Squeeze',
              args: [{
                log: '*',
                response: '*',
                request: '*',
                error: '*',
              }],
            },
            {
              module: 'good-console',
              args: [{
                log: '*',
                response: '*',
                request: '*',
                error: '*',
              }],
            }, 'stdout'],
        },
      },
    },
    {
      plugin: require('hapi-swagger'),
      options: {
        cors: true,
        jsonEditor: false,
        documentationPath: '/',
        info: {
          title: 'Example',
          version: Pkg.version,
          description: 'An example api',
        },
      },
    },
  ]

  await server.register(plugins)
}
