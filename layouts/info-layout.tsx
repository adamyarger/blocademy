import { ReactNode } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import Container from 'components/container'

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container minHeight="calc(100vh - 196px)" pt="14">
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default DefaultLayout
