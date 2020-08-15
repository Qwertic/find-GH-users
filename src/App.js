import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Users from './components/Users/Users';
import SearchBar from './components/SearchBar/SearchBar';
import Alert from './components/Alert/Alert';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }
  //Gets 30 random users from Github:
  async componentDidMount() {
    this.setState({ loading: true});

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data)

    this.setState({users: res.data, loading: false});
  }

  // Search Github Users entering a parameter(username):
  searchUsers =  async (text) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items, loading: false});
  }
  //set Alert on empty search:
  setAlert = (msg, type) => {
    this.setState({alert: {msg: msg, type: type}});
    setTimeout( () => this.setState({alert: null}), 3000);
  }

  render() {
    const {users, loading} = this.state;
    return (
      <div className='App'>
        <Navbar/>
        <Alert alert={this.state.alert} />
        <SearchBar searchUsers={this.searchUsers} setAlert={this.setAlert}/>
        <div className="container ">
          <Users 
          loading={loading} 
          users={users}/>
        </div>
      </div>
    )
  };
}

export default App;
