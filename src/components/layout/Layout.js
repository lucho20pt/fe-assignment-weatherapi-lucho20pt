import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Header from 'components/layout/Header'
// import Footer from 'components/layout/Footer'

const Layout = (props) => {
  return (
    <Fragment>
      <Container fluid>
        <Header />
        <main>{props.children}</main>
        {/* <Footer /> */}
      </Container>
    </Fragment>
  )
}

export default Layout
