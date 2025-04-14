import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import iceCreamImage from '../assets/icecream-banner.jpg'; 

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={iceCreamImage} alt="Ice Cream" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }}/>
          <Carousel.Caption>
            <h3>Award-Winning Ice Creams</h3>
            <p>Discover the best ice cream flavors in Mangalore!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYBInytUZ4F-91q5sJ4dgDpEYu3VRgeEmlw&s" alt="Ice Cream" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }}/>
          <Carousel.Caption>
            <h3 color='black'>Award-Winning Ice Creams</h3>
            <p>Discover the best ice cream flavors in Mangalore!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Popular Dishes Section */}
      <Container className="mt-4">
        <h2>Popular Dishes</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP2ozoGoTFaS_X0tSisaw66GKBoA4mZo3p1A&s" alt="Ice Cream" className="d-block w-100"/>
              <Card.Body>
                <Card.Title>Gadbad Ice Cream</Card.Title>
                <Card.Text>
                  A delicious combo of ice creams, fruits, and toppings!
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqciuQdoWJWqAFhM5SqlIyaQgLgpqqZnyI-A&s" alt="Ice Cream" className="d-block w-100"/>
              <Card.Body>
                <Card.Title>Tiramisu Ice Cream</Card.Title>
                <Card.Text>
                  A delicious combo of coffee, chocolate, and cake!
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
