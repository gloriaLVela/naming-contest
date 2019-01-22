import React from 'react';

import Header from './Header';
import ContestList from './ContestList';


// App.js is the top level component

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);


// Component definition
class App extends React.Component{
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  }
  componentDidMount(){
    // Set the contest data
    // ajax fetching
    // implement timers, listeners
  }

  componentWillUnmount(){
      // clean timers, listeners
  }
  fetchContest = (contestId) => {
    pushState (
      { currentContestId: contestId},
      `/contest/${contestId}`
    );
  };

  render(){
    return (
    //  Use map to display the list of contests
    // Provide the key 
    <div className="App" >
      <Header message={this.state.pageHeader} />
      <ContestList 
       onContestClick = {this.fetchContest} 
       contests ={this.state.contests} />
    </div>   
  );
  } 
}

export default App;