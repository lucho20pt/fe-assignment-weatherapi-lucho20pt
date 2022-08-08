import { Row, Col } from 'react-bootstrap'
import logo from '../../logo.svg'
import classes from 'styles/layout/header.module.scss'

const Header = () => {
  return (
    <Row>
      <Col as="header" className={classes.header}>
        <Row className="justify-content-between align-items-center py-1">
          <Col>
            <img width={30} src={logo} alt="logo" />
          </Col>
          <Col className='text-end'>
            <h1 className='m-0'>#weatherApp</h1>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Header
