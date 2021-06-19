import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import User from './components/User';
import NavBar from './components/NavBar';
import dataList from './data/data';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      userList: dataList,
      activeUser: dataList[0],
    }
    this.displayNextUser = this.displayNextUser.bind(this);
    this.displayPreviousUser = this.displayPreviousUser.bind(this);
    this.editActiveUser = this.editActiveUser.bind(this);
    this.deleteActiveUser = this.deleteActiveUser.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
  }

  displayNextUser(){
    const { userList, activeUser } = this.state;
    let currentIndex = userList.indexOf(activeUser);
    let nextIndex = 0;
    if (currentIndex > userList.length - 2){
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1;
    }
    this.setState({ activeUser: dataList[nextIndex]})
  }

  displayPreviousUser(){
    const { userList, activeUser } = this.state;
    let currentIndex = userList.indexOf(activeUser);
    let previousIndex = 0;
    if (currentIndex === 0){
      previousIndex = userList.length - 1;
    } else {
      previousIndex = currentIndex - 1;
    }
    this.setState({ activeUser: dataList[previousIndex]})
  }

  editActiveUser(){

  }

  deleteActiveUser(){

  }

  createNewUser(){

  }

  render(){
    return (
      <div className='App'>
        <Header />
        <div className='App-body'>
          <User activeUser={this.state.activeUser} userList={this.state.userList}/>
          <NavBar 
            nextUser={this.displayNextUser}
            previousUser={this.displayPreviousUser}
            editUser={this.editActiveUser}
            deleteUser={this.deleteActiveUser}
            createUser={this.createNewUser}/>
        </div>
      </div>
    )
  }
}

export default App;
