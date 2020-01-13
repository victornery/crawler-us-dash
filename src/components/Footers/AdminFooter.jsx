
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2020{" "}
              <a
                className="font-weight-bold ml-1"
                href="https://crawlers.us"
                rel="noopener noreferrer"
                target="_blank"
              >
                Crawlers.us
              </a>
            </div>
          </Col>

          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem>
                <NavLink
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visão Geral
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Parceiros
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Score
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Configurações
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
