import React, { Component } from 'react'

export class form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  onChange = e => this.setState({ [e.target.name] })

  onSubmit()

  render() {
    const { name, email, message } = this.state
    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input className='form-control'
                type="text"
                name="name"
                onChange={this.onChange}
                value={name}
                />
                
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input className='form-control'
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                  />

          </div>
          <div className='form-group'>
            <label>Message</label>
            <input className='form-control'
                type="text"
                name="message"
                onChange={this.onChange}
                value={message}
                />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
          
        </form>

      </div>
    )
  }
}

export default form