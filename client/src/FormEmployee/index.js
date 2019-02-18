import React, { Component } from 'react'

class FormEmployee extends Component {
  render() {
    return (
        <Form>
        <h3>New Employee</h3>
        <FormGroup>
          <FormLabel>Name:</FormLabel>
          <FormControl type="text" onChange={this.handdleChange} name="name"></FormControl>    
        </FormGroup>
        <FormGroup>
          <FormLabel>Position:</FormLabel>
          <FormControl type="text" onChange={this.handdleChange} name="position"></FormControl>    
        </FormGroup>
        <FormGroup>
          <FormLabel>E-mail:</FormLabel>
          <FormControl type="text" onChange={this.handdleChange} name="email"></FormControl>    
        </FormGroup>
        <FormGroup>
          <FormLabel>Phone:</FormLabel>
          <FormControl type="text" onChange={this.handdleChange} name="phone"></FormControl>    
        </FormGroup>
        <Button variant="outline-primary" block>Save Employee<i className="fa fa-check fa-fw"></i></Button>
    </Form>
    )
  }
}

export default FormEmployee;


