import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class CurrentUsers extends Component{
  selectUser(user, event){
    console.log('selectUser: ' + JSON.stringify(user))
    this.props.selectUser(user)
  }

  render(){
  	return(
      <div style={{padding:24}}>

        <h3 style={{marginBottom:0}}>User List</h3>
        <ol style={{padding:24, fontSize:24}}>
          { (this.props.user.selected == null) ?
          	this.props.user.all.map((user, i)=>{
          		return <li key={user.username}><a href="#" onClick={this.selectUser.bind(this, user)}>{user.username}</a></li>
          	}) :
            this.props.user.all.map((user, i)=>{
              return <li key={user.username}><a href="#" onClick={this.selectUser.bind(this, user)} style={{color:'red'}}>{user.username}</a></li>
            })
          }
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