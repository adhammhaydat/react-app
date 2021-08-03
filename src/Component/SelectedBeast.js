import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'


class SelectedBeast extends Component {
  
  

  render() {
    return (
      <div>
        <Modal onHide={this.props.closeModal} show={this.props.showModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          

          <Modal.Body>
            <img style={{width:'100%',height:'100%',objectFit:'cover'}}
          src={this.props.src} 
          alt={this.props.title}
          />
          </Modal.Body>

          <Modal.Footer>
          <p>{this.props.description}</p>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
export default SelectedBeast