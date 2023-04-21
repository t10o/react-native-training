import { ScrollView, View, VStack } from 'native-base'
import { ReactNode } from 'react'

import { Header } from './Header'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <View flex={1}>
      <Header />

      <ScrollView flexGrow={1}>
        <VStack px={6} py={5} width="100%">
          {children}
        </VStack>
      </ScrollView>
    </View>
  )
}
