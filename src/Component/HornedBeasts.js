import React from 'react'

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
      <div>
        <h2>{this.props.title} </h2>
        <img src={this.props.imageUrl} alt={this.props.title} onClick={()=>this.raiseClicks()}/>
        <p>{this.props.description}</p>
        <p>number of clicks are {this.state.click}</p>
        

      </div>
    )
  }
}
export default HornedBeasts