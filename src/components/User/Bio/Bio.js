import './user.scss'
import PropTypes from 'prop-types'

import React from 'react'

const Bio = (props) => {
  const {user} = props

  const renderAvatar = () => {
    console.log('renderAvatar ', props.user)
    const placeHolderAvatar = <i className='fas fa-user-circle' />
    const userAvatar = <img styleName='avatar' src={user.avatar_url} alt={`${user.name} avatar`} />
    return props.user === undefined ? placeHolderAvatar : userAvatar
  }

  return (
    <div styleName='user'>
      {renderAvatar()}
      <h1>{user.name}</h1>
      <h3>{user.login}</h3>
      <p>{user.bio}</p>
    </div>
  )
}

Bio.propTypes = {
  user: PropTypes.object.isRequired
}

export default Bio
