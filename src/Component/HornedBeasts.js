import React from 'react'
import SelectedBeast from './SelectedBeast'
import { Card,Button} from 'react-bootstrap'
// import {  } from 'bootstrap'



 class HornedBeasts extends React.Component {
  
  constructor(){
    super()
    this.state={
      click:0, showModal: false
    }
    
  }

  raiseClicks=()=>{
   this.setState({
     click:this.state.click+1
   })
  
  
  
   
  }
  openModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    
    return (
      
      
   
        <>
        <Card style={{ width: '18rem' ,border:'2px dashed red',alignItems:'center',height:'70vh',margin:'1rem '}}>
        <Card.Img style={{ width: '16rem',height:'40vh' }} 
        variant="top" src={this.props.image_url}
         alt={this.props.title} onClick={()=>this.openModal()}/>
        <Card.Body>
          <Card.Title>{this.props.title} </Card.Title>
          <Card.Text>
          {this.props.description}

          </Card.Text>
          <Button onClick={()=>this.raiseClicks()}>like!</Button>
          <span> {this.state.click}</span>
        </Card.Body>
      </Card>
      <SelectedBeast title={this.props.title} src={this.props.image_url} description={this.props.description} showModal={this.state.showModal} closeModal={this.closeModal}
      />
        </>
      
      

      
    )
  }
}
export default HornedBeasts