import React from 'react'

import { Card } from 'react-bootstrap'

 class HornedBeasts extends React.Component {
  
  constructor(){
    super()
    this.state={
      click:0
    }
    
  }

  raiseClicks=()=>{
   this.setState({
     click:this.state.click+1
   })
  }

  render() {
    
    return (
      <div >
        <Card style={{ width: '18rem' ,border:'2px dashed red'}}>
        <Card.Img style={{ width: '18rem' }} variant="top" src={this.props.imageUrl} alt={this.props.title} onClick={()=>this.raiseClicks()}/>
        <Card.Body>
          <Card.Title>{this.props.title} </Card.Title>
          <Card.Text>
          {this.props.description}

          </Card.Text>
          <p>number of clicks are {this.state.click}</p>
        </Card.Body>
      </Card>
      </div>
        /* <h2>{this.props.title} </h2>
        <img src={this.props.imageUrl} alt={this.props.title} onClick={()=>this.raiseClicks()}/>
        <p>{this.props.description}</p>
        <p>number of clicks are {this.state.click}</p>
         */

      
    )
  }
}
export default HornedBeasts