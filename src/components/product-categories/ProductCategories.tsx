import React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"

type Props = {}

export const ProductCategories = (props: Props) => {
  return (
    <Container>
      <hr className='HorizontalRule' />
      <Row>
        <Col md={7}>
          <h2>Men's Clothing</h2>
        </Col>
        <Col md={5}>
          <Image
            src='./img/menclothing.jpg'
            width={500}
            height={500}
            alt="Men's Clothing"
          />
        </Col>
      </Row>
      <hr className='HorizontalRule' />
    </Container>
  )
}
