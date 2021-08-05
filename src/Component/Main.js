import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json'
import { Container, Col, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';



class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'all'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log('hllo')
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }
  render() {
    let arryBeast = data;
    return (
      <div>

        <div style={{display:"flex",margin:"2rem",alignContent: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'}}>
        <h3>Pick your favorite Horns:</h3>
        
        <Form.Select style={{width:"20rem"}} aria-label="Default select example" value={this.state.value} onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </Form.Select>
        </div>
        <Container fluid>
          <Row>

            {arryBeast.map(item => {
              if (item.horns == this.state.value) {
                return (<Col>
                  <HornedBeasts
                    image_url={item.image_url}
                    title={item.title}
                    description={item.description}
                    horns={item.horns}
                  />
                </Col>)
              } else if (this.state.value == 'all') {
                return (<Col>
                  <HornedBeasts
                    image_url={item.image_url}
                    title={item.title}
                    description={item.description}
                    horns={item.horns}
                  />
                </Col>)

              }

            })}


          </Row>
        </Container>



      </div>
    )
  }
}
export default Main