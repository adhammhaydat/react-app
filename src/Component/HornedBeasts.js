import React from 'react'

import { Card} from 'react-bootstrap'


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
      
      
   
        <Card style={{ width: '18rem' ,border:'2px dashed red',alignItems:'center',height:'70vh',margin:'1rem '}}>
        <Card.Img style={{ width: '16rem',height:'40vh' }} 
        variant="top" src={this.props.image_url}
         alt={this.props.title} onClick={()=>this.raiseClicks()}/>
        <Card.Body>
          <Card.Title>{this.props.title} </Card.Title>
          <Card.Text>
          {this.props.description}

          </Card.Text>
          <p>number of clicks are {this.state.click}</p>
        </Card.Body>
      </Card>
      
      

      
    )
  }
}
export default HornedBeasts