import pkg from './package'
import Monk from 'monk'


export default {
  pkg,
  register (server, options =[]) {
    const db = Monk ('localhost:32770/ecomstore')

    server.expose(
      {db}
    )
  }
}
