import React from 'react'
import Bio from './Bio/Bio'
import PropTypes from 'prop-types'
import Dashboard from './Dashboard/Dashboard'

export default class User extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    return (
      <div>
        <Bio user={this.props.user} />
        <Dashboard />
      </div>
    )
  }
}
