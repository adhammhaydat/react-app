import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json'
import { Container, Col, Row } from 'react-bootstrap';


class Main extends React.Component {

  render() {
    let arryBeast = data;
    return (
      <div>
        
        <Container fluid>
          <Row>
            
            {arryBeast.map(item =>{
              return( <Col> 
                <HornedBeasts
                  image_url={item.image_url}
                  title={item.title}
                  description={item.description}
                />
                </Col>)
             
            })}

            
          </Row>
        </Container>
        
            

      </div>
    )
  }
}
export default Main