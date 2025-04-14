import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';

const Menu = () => {
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('Popularity');

  const menuItems = [
    { name: 'Gadbad Ice Cream', price: 150, category: 'Ice Cream',src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6n6pSWh6kw2BIuFLxYc6lc83c4LmuH73kA&s", description: 'A delicious combo of ice creams and toppings' },
    { name: 'Chocolate Sundae', price: 120, category: 'Ice Cream', description: 'A rich chocolate sundae' },
    { name: 'Chocolate scoop', price: 70, category: 'Ice Cream', description: 'A rich chocolate balls' },
    // Add more items here
  ];

  const filteredItems = menuItems.filter(item => category === 'All' || item.category === category);

  return (
    <Container className="mt-4">
      <h2>Menu</h2>
      <Row>
        <Col md={3}>
          <Dropdown onSelect={setCategory}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Category: {category}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="All">All</Dropdown.Item>
              <Dropdown.Item eventKey="Ice Cream">Ice Cream</Dropdown.Item>
              <Dropdown.Item eventKey="Desserts">Desserts</Dropdown.Item>
              <Dropdown.Item eventKey="Beverages">Beverages</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={3}>
          <Dropdown onSelect={setSortOrder}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sort by: {sortOrder}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Popularity">Popularity</Dropdown.Item>
              <Dropdown.Item eventKey="Price">Price</Dropdown.Item>
              <Dropdown.Item eventKey="Rating">Rating</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row className="mt-4">
        {filteredItems.map(item => (
          <Col md={4} key={item.name}>
            <Card>
              <Card.Img variant="top"/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>₹{item.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
