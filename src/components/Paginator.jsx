import React from 'react';
import {Pagination, Container} from 'react-bootstrap';

class Paginator extends React.Component {

    render() {
        return (
            <Container className="mt-3">
                <Pagination>
                  <Pagination.Prev />
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Item active>{2}</Pagination.Item>
                  <Pagination.Next />
                </Pagination>
            </Container>
        )
    }
}

export default Paginator;
