import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class CurrentUsers extends Component{
  selectUser(user, event){
    console.log('selectUser: ' + JSON.stringify(user))
    this.props.selectUser(user)
  }

  render(){
    const list = this.props.user.all.map((user, i) => {
      let name = null
      if (this.props.selected  == null)
        name = <a onClick={this.selectUser.bind(this, user)}><span>{user.username}</span></a>
      else if (this.props.selected.username == user.username)
        name = <a onClick={this.selectUser.bind(this, user)}><strong style={{color:'red'}}>{user.username}</strong></a>
      else 
        name = <a onClick={this.selectUser.bind(this, user)}><span>{user.username}</span></a>
      return(
        <li key={user.username}>{ name }</li>
      )
    })

  	return(
      <div style={{padding:24}}>
        <ol>
          { list }
        </ol>        
      </div>
  	)
  }
}

const stateToProps = (state) => {
  return {
    user: state.user,
    selected: state.user.selected
  }
}

const dispatchToProps = (dispatch) => {
  return {
    selectUser: (user) => dispatch(actions.selectUser(user))
  }
}

export default connect(stateToProps, dispatchToProps)(CurrentUsers)