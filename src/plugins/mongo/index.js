import pkg from './package'
import Monk from 'monk'

const MONGO_URI = process.env.MONGO_URI || ''
  if (!MONGO_URI)
    throw Error('MONGO_URI is not set')

export default {
  pkg,
  register (server, options =[]) {
    const db = Monk (MONGO_URI)

    server.expose(
      {db}
    )
  }
}

