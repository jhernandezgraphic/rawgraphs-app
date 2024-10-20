import React from 'react'
import styles from './Footer.module.scss'
import { Row, Col, Container } from 'react-bootstrap'
import { BsFillEnvelopeFill, BsBarChartFill } from 'react-icons/bs'
import { FaTwitter, FaGithub } from 'react-icons/fa'

// #TODO add commit hash
// const commitHash = process.env.REACT_APP_VERSION || 'dev'

export default function Footer(props) {
  return (
    <Container fluid style={{ backgroundColor: 'var(--dark)' }}>
      <Container className={styles.footer}>
        <Row>
          <Col xs={6} sm={{ span: 5, order: 1 }} lg={{ span: 3, order: 1 }}>
            <p className="Xsmall">
              Ideografiko.app es un demo BETA basado en la librería D3 y Rawgraph{' '}
              {/* <a
                href="http://densitydesign.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DensityDesign
              </a>
              ,{' '}
              <a
                href="https://calib.ro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calibro
              </a>{' '}
              and{' '}
              <a
                href="https://inmagik.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inmagik
              </a>*/}
              .
              <br />© 2023{' '}
              <a href="https://raw.github.com/rawgraphs/rawgraphs-app/master/LICENSE">
                (Apache License 2.0)
              </a>
            </p>
          </Col>
          <Col xs={6} sm={{ span: 5, order: 3 }} lg={{ span: 3, order: 1 }}>
            <p className="Xsmall"></p>
          </Col>
          {/* <Col xs={6} sm={{span:5, order:3}} lg={{span:3,order:1}}><p className="Xsmall">This <span title={commitHash}>version</span> is intended to be available only for the backers of the crowdfunding campaign.</p></Col> */}
          <Col
            xs={6}
            sm={{ span: 6, offset: 1, order: 2 }}
            md={{ span: 3 }}
            lg={{ offset: 0 }}
            xl={{ span: 2, offset: 2 }}
          >
            <p>
              <BsFillEnvelopeFill /> Contacto@ideografiko.com
            </p>
            <p>
              <FaTwitter />{' '}
              <a
                href="https://twitter.com/ideografiko"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ideografiko
              </a>
            </p>
          </Col>
          <Col
            xs={6}
            sm={{ span: 6, offset: 1, order: 4 }}
            md={{ span: 2 }}
            lg={{ offset: 0 }}
            xl={{ span: 2, offset: 0 }}
          >

          </Col>
        </Row>
      </Container>
    </Container>
  )
}
