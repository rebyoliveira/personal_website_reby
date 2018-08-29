import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, fas } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'

const NormalText = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 18px;
  font-weight: 500;
  display: inline;
  font-color: rgb(0, 0, 0);
  line-height: 10 px;
  text-align: right;
  vertical-align: baseline;
  word-wrap: break-word;
  margin-bottom: 50px;
`;

const Anchor = styled.a`
  color: black;

  &:hover, active {
    color: #61dbfb;
    text-decoration: underline;
  }
`


const Footer = () => (
  <Container>
    <Row>
      <Col xs={{ size: 8, offset: 2 }}>
        <Row className="justify-content-around">
          <Col xs="2" className="text-center"><Anchor href="#"> Home  </Anchor></Col>
          <Col xs="2" className="text-center"><Anchor href="#"> Jouney  </Anchor></Col>
          <Col xs="2" className="text-center"><Anchor href="#"> Projects  </Anchor></Col>
          <Col xs="2" className="text-center"><Anchor href="#"> Contact  </Anchor></Col>
          <Col xs="2" className="text-center"><Anchor href="https://medium.com/@RebyOliveira"> Blog </Anchor></Col>
        </Row>
      </Col>
      <Col xs="2"/>
    </Row>
    <Row>
      <Col xs={{ size: 2, offset: 5 }} className="text-center">
        <FontAwesomeIcon style={{marginTop: '30px'}} className="mx-auto d-inline" icon={faCode} size="1x" color="#61dbfb" />
        <NormalText className="cd-flex justify-content-center pt-4"> with </NormalText>
        <FontAwesomeIcon className="mx-auto d-inline" icon={faHeart} size="1x" color="#61dbfb" />
      </Col>
    </Row>
  </Container>
)


export default Footer;
