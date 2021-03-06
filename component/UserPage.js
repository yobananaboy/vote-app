import React, { Component } from 'react';
import axios from 'axios';
import UserVoteList from './UserVoteList';
import Navbar from './Navbar';

class UserPage extends Component {
  render() {
    return (
        <div className="row justify-content-center">
          <div className="col-12 col-md-11 col-lg-8 col-xl-6 vote-body">
            <p className="App-intro">
              Hello {this.props.user}, here are the votes you have created:
            </p>
            <button className="btn btn-primary" onClick={this.props.openModalPoll} data-toggle="modal" data-target="#new-poll-modal" id="new">Add new poll</button>
            <UserVoteList data={this.props.data} id={this.props.id} onClick={this.props.onClick} clicked={this.props.clicked} user={this.props.user} onChange={this.props.onChange} onSubmit={this.props.onSubmit} facebookUser={this.props.facebookUser} addVoteItem={this.props.addVoteItem} updateVoteItem={this.props.updateVoteItem} newItem={this.props.newItem} pollToDelete={this.props.pollToDelete} />
          </div>
        </div>
    );
  }
}

export default UserPage;