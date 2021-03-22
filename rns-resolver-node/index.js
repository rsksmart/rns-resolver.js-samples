const nodeFetch = require('node-fetch')
const Resolver = require('@rsksmart/rns-resolver.js').default

const resolver = Resolver.forRskTestnet({
  fetch: nodeFetch
})

const domain = process.argv[2]

Promise.all([
  resolver.addr(domain, 0).then(addr => console.log(`BTC: ${addr}`)).catch(e => console.log(`BTC error: ${e.message}`)),
  resolver.addr(domain, 137).then(addr => console.log(`RSK: ${addr}`)).catch(e => console.log(`RSK error: ${e.message}`)),
  resolver.addr(domain, 60).then(addr => console.log(`ETH: ${addr}`)).catch(e => console.log(`ETH error: ${e.message}`)),
  resolver.addr(domain, 43).then(addr => console.log(`NEM: ${addr}`)).catch(e => console.log(`NEM error: ${e.message}`)),
])
