import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';


export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    return (
      <Fragment>  
        <h2>Leads</h2>
        <table className='table table-striped'>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            { this.props.leads.map(lead => ((
              <tr key={lead.id}>
                <td>{lead.is}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td><button onClick={this.props.deleteLead.bind(this, lead.id)} className='btn btn-danger btn-sm'>Delete</button></td>
              </tr>
            )))}

          </tbody>
        </table>

      </Fragment>
      
    )
  }
}
// mapState is the state of redux, from the leads initialState
// and map that state to props, of this component
// state.leads means we want the leads reducer
// and the .leads is the part of the state we want
const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);