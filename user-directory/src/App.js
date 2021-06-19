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
      favoriteMovies: '',
    }

    this.displayNextUser = this.displayNextUser.bind(this);
    this.displayPreviousUser = this.displayPreviousUser.bind(this);
    this.editActiveUser = this.editActiveUser.bind(this);
    this.deleteActiveUser = this.deleteActiveUser.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
    this.obtainNewUserInformation = this.obtainNewUserInformation.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    // const { userList, activeUser } = this.state;
    // this.setState({ 
    //   firstName: activeUser.name.first, 
    //   lastName: activeUser.name.last, 
    //   city: activeUser.city,
    //   country: activeUser.country,
    //   employer: activeUser.employer,
    //   title: activeUser.title,
    //   favoriteMovies: activeUser.favoriteMovies,
    //   displayForm: true });
      console.log('Edit functionality does not work yet');


  }

  deleteActiveUser(){
    const { userList, activeUser } = this.state;
    const updatedList = userList.filter(userObj => !(userObj.id === activeUser.id));
    this.setState({ userList: updatedList });
    this.displayNextUser();
  }

  createNewUser(){
    // display form
    if (this.state.displayForm){
      this.setState({ displayForm: false})
    } else {
      this.setState({ displayForm: true});
    }
  }

  obtainNewUserInformation(){
    const {userList, firstName, lastName, city, country, employer, title, favoriteMovies } = this.state;
    const newUser = {
      id: 101,
      name: {first: firstName, last: lastName},
      city, country, employer, title }
    
      if (Array.isArray(favoriteMovies)){
        console.log('first');
        console.log({favoriteMovies});
        newUser.favoriteMovies = favoriteMovies;
      } else {
        console.log('second');
        let moviesCopy = favoriteMovies.slice();
        const favoriteMovieArray = moviesCopy.split(',');
        newUser.favoriteMovies = favoriteMovieArray;
      }

    let listCopy = userList.slice();
    listCopy.push(newUser);
    this.setState({ 
      userList: listCopy, activeUser: newUser,
      firstName: '', lastName: '', city: '', country: '', employer: '', title: '', favoriteMovies: '' ,
    displayForm: false });
  }

  updateFirstName(val){
    this.setState({ firstName: val });
  }
  updateLastName(val){
    this.setState({ lastName: val });
  }
  updateCity(val){
    this.setState({ city: val });
  }
  updateCountry(val){
    this.setState({ country: val });
  }
  updateEmployer(val){
    this.setState({ employer: val });
  }
  updateTitle(val){
    this.setState({ title: val });
  }
  updateMovies(val){
    this.setState({ favoriteMovies: val });
  }

  handleChange(event){
    if (event.target.id === 'First Name'){
      this.updateFirstName(event.target.value);
    } else if (event.target.id === 'Last Name'){
      this.updateLastName(event.target.value);
    } else if (event.target.id === 'City'){
      this.updateCity(event.target.value);
    } else if (event.target.id === 'Country'){
      this.updateCountry(event.target.value);
    } else if (event.target.id === 'Employer'){
      this.updateEmployer(event.target.value);
    } else if (event.target.id === 'Job Title'){
      this.updateTitle(event.target.value);
    } else if (event.target.id === 'Favorite Movies'){
      this.updateMovies(event.target.value);
    } else {
      console.log(event.target.id);
    }
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
