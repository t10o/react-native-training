import { View, VStack } from 'native-base'
import { ReactNode, useState } from 'react'
import { Dimensions, LayoutChangeEvent } from 'react-native'

import { Header } from '../elements'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props): JSX.Element => {
  const { height } = Dimensions.get('window')
  const [headerHeight, setHeaderHeight] = useState<number>(0)

  const contentHeight = height - headerHeight

  const getHeaderHeight = (e: LayoutChangeEvent) => {
    setHeaderHeight(e.nativeEvent.layout.height)
  }

  return (
    <View flex={1}>
      <Header onLayout={getHeaderHeight} />

      <VStack px={6} py={5} width="100%" height={contentHeight}>
        {children}
      </VStack>
    </View>
  )
}
