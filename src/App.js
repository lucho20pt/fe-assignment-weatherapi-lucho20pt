import Layout from 'components/layout/Layout'
import Weather from 'features/weather/index'
// import { Container, Row, Col, Form, Button } from 'react-bootstrap'
// import logo from './logo.svg'
import 'styles/globals.scss'

function App() {
  return (
    <Layout>
      <Weather />
    </Layout>
  )
}

export default App
