import Server from '../../src'

describe(`initial`, () => {

  let server
  beforeEach(async () => {
    server = await Server()
  })

  it(`products fetches array`, async () => {
    const { statusCode } = await server.inject('/v1/products')
    expect(statusCode).to.equal(200)
    expect(results).to.be.an.array()
  })
})
