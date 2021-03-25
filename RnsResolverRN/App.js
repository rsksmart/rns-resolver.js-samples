/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
} from 'react-native';

import Resolver from '@rsksmart/rns-resolver.js'

const resolver = Resolver.forRskTestnet()

const App: () => Node = () => {
  const [domain, setDomain] = useState('testing2.rsk')
  const [rskAddr, setRskAddr] = useState('')
  const [btcAddr, setBtcAddr] = useState('')
  const [ethAddr, setEthAddr] = useState('')
  const [nemAddr, setNemAddr] = useState('')

  const resolve = () => Promise.all([
    resolver.addr(domain, 137).then(setRskAddr).catch(e => setRskAddr(e.message)),
    resolver.addr(domain, 0).then(setBtcAddr).catch(e => setBtcAddr(e.message)),
    resolver.addr(domain, 60).then(setEthAddr).catch(e => setEthAddr(e.message)),
    resolver.addr(domain, 43).then(setNemAddr).catch(e => setNemAddr(e.message)),
  ])

  return (
    <SafeAreaView>
      <TextInput value={domain} onChange={setDomain} style={{ height: 40, margin: 12, borderWidth: 1, }} />
      <Button title="resolve" onPress={resolve} />
      <Text>RSK: {rskAddr}</Text>
      <Text>BTC: {btcAddr}</Text>
      <Text>ETH: {ethAddr}</Text>
      <Text>NEM: {nemAddr}</Text>
    </SafeAreaView>
  );
};

export default App;
