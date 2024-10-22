
import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Partners extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Lista de Empresas Parceiras</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Empresa</th>
                      <th scope="col">CNPJ</th>
                      <th scope="col">Reclamações</th>
                      <th scope="col">Faturamento</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <th>Lorem Ipsum Dolor</th>
                      <td>30.306.294/0002-26</td>
                      <td>142</td>
                      <td>R$ 1.102.542,49</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <th>Lorem Ipsum Dolor</th>
                      <td>30.306.294/0002-26</td>
                      <td>142</td>
                      <td>R$ 1.102.542,49</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <th>Lorem Ipsum Dolor</th>
                      <td>30.306.294/0002-26</td>
                      <td>142</td>
                      <td>R$ 1.102.542,49</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <th>Lorem Ipsum Dolor</th>
                      <td>30.306.294/0002-26</td>
                      <td>142</td>
                      <td>R$ 1.102.542,49</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <th>Lorem Ipsum Dolor</th>
                      <td>30.306.294/0002-26</td>
                      <td>142</td>
                      <td>R$ 1.102.542,49</td>
                    </tr>

                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Partners
