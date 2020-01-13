
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Score extends React.Component {
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
                  <h3 className="mb-0">Score de Empresas Parceiras</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Empresa</th>
                      <th scope="col">Pontuação</th>
                      <th scope="col">Variação</th>
                      <th scope="col">Nota</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <th scope="row">Facebook</th>
                      <td>840</td>
                      <td><i className="fas fa-arrow-up text-success mr-3" /> 46,53%</td>
                      <td>A</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <th scope="row">Facebook</th>
                      <td>5,480</td>
                      <td><i className="fas fa-arrow-down text-warning mr-3" /> 46,53%</td>
                      <td>A</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <th scope="row">Google</th>
                      <td>4,807</td>
                      <td><i className="fas fa-arrow-down text-warning mr-3" /> 46,53%</td>
                      <td>A</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <th scope="row">Instagram</th>
                      <td>3,678</td>
                      <td><i className="fas fa-arrow-down text-warning mr-3" /> 46,53%</td>
                      <td>A</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <th scope="row">twitter</th>
                      <td>2,645</td>
                      <td><i className="fas fa-arrow-down text-warning mr-3" /> 46,53%</td>
                      <td>A</td>
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

export default Score
