import { useState } from 'react'
import Resolver from '@rsksmart/rns-resolver.js'

const resolver = Resolver.forRskTestnet()

function App() {
  const [domain, setDomain] = useState('testing2.rsk')
  const [rskAddr, setRskAddr] = useState('')
  const [btcAddr, setBtcAddr] = useState('')
  const [ethAddr, setEthAddr] = useState('')
  const [nemAddr, setNemAddr] = useState('')

  const resolve = () => Promise.all([
    resolver.addr(domain, 137).then(setRskAddr).catch(e => setRskAddr(e.message)),
    resolver.addr(domain, 0).then(setBtcAddr).catch(e => setBtcAddr(e.message)),
    resolver.addr(domain, 60).then(setEthAddr).catch(e => setEthAddr(e.message)),
    resolver.addr(domain, 43).then(setNemAddr).catch(e => setNemAddr(e.message))
  ])

  return <div>
    <input type="text" value={domain} onChange={e => setDomain(e.target.value)} />
    <button onClick={resolve}>Resolve</button>
    <p>RSK: {rskAddr}</p>
    <p>BTC: {btcAddr}</p>
    <p>ETH: {ethAddr}</p>
    <p>NEM: {nemAddr}</p>
  </div>
}

export default App;
