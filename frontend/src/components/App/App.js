import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios'


import NavBar from '../NavBar/NavBar'
import Landing from '../LandingPage/Landing'
import PostList from '../PostList/PostList'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'
import LogOut from '../LogOut/LogOut'
import Main from '../MainFolder/Main'
import CreatePost from '../CRUD/CreatePost'
import AppPost from '../CRUD/AddPost'

import './App.css'
import AddPost from '../CRUD/AddPost';

class App extends Component {
    state = {
      email: '',
      password: '',
      isLoggedIn: false,
      user: null
    }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleLogOut = () => {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }





  //----------------Signup Method----------------
  handleSignUp = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/user/signup', 
			{ email: this.state.email,
      	password: this.state.password }
			)
      .then( response => {
        console.log(response)
        localStorage.token = response.data.signedJwt
          this.setState({
            isLoggedIn: true,
            user: response.data.user
          })
      })
      .catch(err => console.log(err))
  }




//----------------Login Method----------------
  handleLogIn = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/user/login', { //<-- save token to local storage
      email: this.state.email,
      password: this.state.password
    })
    .then( response => {
      localStorage.token = response.data.signedJwt
      this.setState({
        isLoggedIn: true
      })
    })
    .catch(err => console.log(err))
  }



// ------------------In Render Method---------------------
  render () {










//// ------------------In Return ---------------------
    return (
      <div>
        <NavBar isLoggedIn={this.state.isLoggedIn} />
        <div className='body'>
          <Switch>




{/* ------------------LogOut Page---------------------- */}    
            <Route path='/signup'
              render={(props) => {
                return (
                  <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />

{/* ------------------LogOut Page---------------------- */}
            <Route path='/logout'
              render={(props) => {
                return (
                  <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
                )
              }}
            />




{/* ------------------Create Post---------------------- */}
            <CreatePost
              path='/createpost'
              render={() => {
                return (
                  <CreatePost  />
                )
              }}
            />









{/* ------------------Login Page---------------------- */}
            <Route path='/login'
              render={(props) => {
                return (
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            />













            <Route
              path='/postList'
              render={() => {
                return (
                  <PostList isLoggedIn={this.state.isLoggedIn} />
                )
              }}
            />
{/* ------------------Landing Page---------------------- */}
            <Landing
              exact path='/'
              render={() => {
                return (
                  <Landing  />
                )
              }}
            />
{/* ------------------Main Page---------------------- */}
            <Main
              path='/main'
              render={() => {
                return (
                  <Main  />
                )
              }}
            />

{/* ------------------Create Post---------------------- */}
            {/* <CreatePost
              path='/createpost'
              render={() => {
                return (
                  <CreatePost  />
                )
              }}
            /> */}

{/* ------------------Edit Post---------------------- */}
            <AddPost
              exact path='/addpost'
              render={() => {
                return (
                  <AddPost  />
                )
              }}
            />



          </Switch>
        </div>
      </div>
    )
  }
}

export default App
