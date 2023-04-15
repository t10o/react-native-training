import { ScrollView } from 'native-base'
import { ReactNode } from 'react'
import { Header } from './Header'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />

      <ScrollView>{children}</ScrollView>
    </>
  )
}
