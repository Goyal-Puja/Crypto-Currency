import React, { useState, useEffect } from 'react';
import { Card, Spinner, Col, Row, CardText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
//import { keyboard } from '@testing-library/user-event/dist/keyboard';

const Main = () => {
    const [bitcoinPrices, setBitcoinPrices] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchBitcoinPrices() {
        try {
          const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
          const data = await response.json();
          setBitcoinPrices(data.bpi);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching Bitcoin prices:', error);
          setLoading(false);
        }
      }
  
      fetchBitcoinPrices();
    }, []);
  return (
   <div>
     <h1 className='my-3'>Cryptocurrency Prices</h1>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Row className="justify-content-md-center my-3">
          {bitcoinPrices && Object.keys(bitcoinPrices).map(currency => (
            <Col md="4" key={currency} className="crypto-card-column">
              <Card className="crypto-card">
                <Card.Body>
                  <Card.Title>{bitcoinPrices[currency].description}</Card.Title>
                  <Card.Text>
                   Code : {bitcoinPrices[currency].code}</Card.Text>
                  <CardText>Rate : {bitcoinPrices[currency].rate_float}</CardText>
                    
                    <CardText></CardText>
                   <CardText>rate Float : {bitcoinPrices[currency].rate}</CardText>
                 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
   </div>
  )
}

export default Main;