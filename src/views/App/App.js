import './app.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'

import Header from 'components/Header'
import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'

const mapStateToProps = state => {
  return {
    user: state.user,
    repos: state.repos,
    events: state.events
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  getEvents,
  getRepos,
  getUser
}, dispatch))

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    getEvents: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object,
    repos: PropTypes.array,
    events: PropTypes.array
  }

  componentDidMount () {
    const {getUser, getRepos, getEvents} = this.props

    getUser()
    getRepos()
    getEvents()
  }

  checkLoad () {
    console.log('user: ', this.props.user)
    console.log('repos: ', this.props.repos)
    console.log('events', this.props.events)
  }

  render () {
    return (
      <div styleName='app'>
        <Header />
        <p>{this.props.user.login}</p>
        {this.checkLoad()}
      </div>
    )
  }
}
