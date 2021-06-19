import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import User from './components/User';
import NavBar from './components/NavBar';
import dataList from './data/data';
import Form from './components/Form';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      userList: [],
      activeUser: {},
      displayForm: false,
      firstName: '',
      lastName: '',
      city: '',
      country: '',
      title: '',
      employer: '',
      favoriteMovies: [],
    }

    this.displayNextUser = this.displayNextUser.bind(this);
    this.displayPreviousUser = this.displayPreviousUser.bind(this);
    this.editActiveUser = this.editActiveUser.bind(this);
    this.deleteActiveUser = this.deleteActiveUser.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
    this.obtainNewUserInformation = this.obtainNewUserInformation.bind(this);
  }

  componentDidMount(){
    this.setState({ userList: dataList, activeUser: dataList[0]})
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
    this.setState({ activeUser: userList[nextIndex]})
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
    this.setState({ activeUser: userList[previousIndex]})
  }

  editActiveUser(){

  }

  deleteActiveUser(){
    const { userList, activeUser } = this.state;
    const updatedList = userList.filter(userObj => !(userObj.id === activeUser.id));
    this.setState({ userList: updatedList });
    this.displayNextUser();
  }

  createNewUser(){
    // display form
    this.setState({ displayForm: true});
  }

  obtainNewUserInformation(){
    const {userList, firstName, lastName, city, country, employer, title, favoriteMovies } = this.state;
    const newUser = {
      id: 101,
      name: {first: firstName, last: lastName},
      city, country, employer, title, favoriteMovies
    }
    let listCopy = userList.slice();
    listCopy.push(newUser);
    this.setState({ userList: listCopy, activeUser: listCopy.indexOf(newUser) });
  }

  handleChange(event, formField){
    this.setState({ formField: event.target.value })
  }

  render(){

    if (!this.state.activeUser.name){
      console.log('connected but loading');
      return <p> Loading </p>
    } else {
      const {userList, activeUser, firstName, lastName, city, country, employer, title, favoriteMovies } = this.state;
      return (
        <div className='App'>
          <Header />
          <div className='App-body'>
            <User activeUser={activeUser} userList={userList}/>
            <NavBar 
              nextUser={this.displayNextUser}
              previousUser={this.displayPreviousUser}
              editUser={this.editActiveUser}
              deleteUser={this.deleteActiveUser}
              createUser={this.createNewUser}/>
              {this.state.displayForm && <Form 
                first={firstName} last={lastName} city={city} country={country} employer={employer} title={title} movies={favoriteMovies}
                onSubmit={this.obtainNewUserInformation} onChange={this.handleChange}/>}
          </div>
        </div>
      )
    }
  }
}

export default App;
