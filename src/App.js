import React from 'react'
import Layout from 'components/layout/Layout'
import { Row, Col } from 'react-bootstrap'
// import logo from './logo.svg'
import 'styles/globals.scss'

function App() {
  return (
    <Layout>
      <Row>
        <Col md={6} className="mx-auto">
          <h1>Hello</h1>
        </Col>
      </Row>
    </Layout>
  )
}

export default App
