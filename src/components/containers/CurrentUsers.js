import React, { Component } from 'react'
import { connect } from 'react-redux'

class CurrentUsers extends Component{
  render(){
  	return(
      <div style={{padding:24}}>

        <h3 style={{marginBottom:0}}>User List</h3>
        <ol style={{padding:24, color:'red', fontSize:24}}>
          {
          	this.props.user.all.map((user, i)=>{
          		return <li key={user.username}>{user.username}</li>
          	})
          }
        </ol>
      </div> 
  	)
  }
}

const stateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(stateToProps)(CurrentUsers)