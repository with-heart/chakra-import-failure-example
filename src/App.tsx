import * as React from 'react'
import {Component} from './component'
import {ChakraProvider, Heading} from '@chakra-ui/react'

export default function App() {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}
