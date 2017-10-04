import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Users extends Component {
  constructor(){
  	super()
  	this.state = {
  	  username:'',
  	  password:''
  	}
  }

  onUserUpdate(field, event){
  	// console.log('onUserUpdate: ' + field + ' == ' + event.target.value)

    if (field == 'username'){
	  this.setState({
	    username: event.target.value
	  })
	  return
    }

    if (field == 'password'){
	  this.setState({
        password: event.target.value
	  }) 
	  return   	
    }
  }

  addUser(event){
    // console.log('ADD USER: ' + JSON.stringify(this.state.username))
    // console.log('ADD USER: ' + JSON.stringify(this.state.password))

    const user = {
      username: this.state.username,
      password: this.state.password
    }
    console.log('ADD USER: ' + JSON.stringify(user))
    this.props.createUser(user)
  }

  render(){
    console.log('RENDER!!')
    const list = this.props.users.map((user, i) =>{
      return(
        <li key={i}>{user.username}</li>
      )
    })

    return(
      <div style={{padding:24}}>
        
        <input onChange={this.onUserUpdate.bind(this, 'username')} type="text" placeholder="username" /><br />
        <input onChange={this.onUserUpdate.bind(this, 'password')} type="password" placeholder="password" /><br />
        <button onClick={this.addUser.bind(this)}>Add User</button>

        <h3 style={{marginBottom:0}}>User List</h3>
        <ol style={{padding:24}}>
          {list}
        </ol>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    users: state.user.all
  }
}

const dispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(actions.createUser(user))
  }
}

export default connect(stateToProps, dispatchToProps)(Users)