import React, { useState } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { name: 'Gadbad Ice Cream', quantity: 1, price: 150 },
    // Add more items here
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <Container className="mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <Row key={item.name}>
              <Col md={8}>
                <Card>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>₹{item.price}</Card.Text>
                    <div>
                      Quantity: {item.quantity}
                      <Button variant="outline-secondary" onClick={() => setCartItems(cartItems.filter(c => c !== item))}>Remove</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
          <Row>
            <Col md={8}>
              <h4>Total: ₹{totalPrice}</h4>
              <Button variant="primary">Proceed to Checkout</Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Cart;
