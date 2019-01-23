import React from 'react';

import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';


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
    // Lookup contest
    this.setState({
      pageHeader: this.state.contests[contestId].contestName,
      currentContestId: contestId
    });
  };
  
  currentContent() {
    // Check if there isn only one contest
    if( this.state.currentContestId){ 
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }
    else {
      return <ContestList 
       onContestClick = {this.fetchContest} 
       contests ={this.state.contests} />;
    }
  }

  render(){
    return (
    //  Use map to display the list of contests
    // Provide the key 
    <div className="App" >
      <Header message={this.state.pageHeader} />
      {this.currentContent()}
    </div>   
  );
  } 
}

export default App;