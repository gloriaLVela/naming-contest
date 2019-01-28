import React from 'react';

import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import PropTypes from 'prop-types';
import * as api from '../api';


// App.js is the top level component

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

const onPopState = handler => {
  window.onpopstate = handler;
};

// Component definition
class App extends React.Component{
  static propTypes = {
    initialData: PropTypes.object.isRequired
  }
  state = this.props.initialData;
  componentDidMount(){
    // Set the contest data
    // ajax fetching
    // implement timers, list(event)

    // Handle the browsers back button
    onPopState((event) => {
      this.setState ({
        currentContestId: (event.state || {}).currentContestId
      });
    });
  }

  componentWillUnmount(){
     // clean timers, listeners
    onPopState(null);
  }

  fetchContest = (contestId) => {
    pushState (
      { currentContestId: contestId},
      `/contest/${contestId}`
    );
    // Lookup contest
    api.fetchContest(contestId).then(contest => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
    
  };

  fetchContestList = () => {
    pushState(
      { currentContestId: null },
      '/'
    );
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      });
    });
  };

  fetchNames = (nameIds) => {
    if (nameIds.length === 0) {
      return;
    }
    api.fetchNames(nameIds).then(names => {
      // return the names object
      this.setState({
        names
      });
    });
  };
  
  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }
    
  pageHeader(){
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }
    return 'Naming Contests';
  }
  
  lookupName = (nameId) => {
    if (!this.state.names || !this.state.names[nameId]) {
      return {
        name: '...'
      };
    }
    return this.state.names[nameId];
  };

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest
               contestListClick={this.fetchContestList}
               fetchNames={this.fetchNames}
               lookupName={this.lookupName}
               {...this.currentContest()} />;
    }

    return <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.contests} />;
  }

  render(){
    return (
    //  Use map to display the list of contests
    // Provide the key 
    <div className="App" >
      <Header message={this.pageHeader()} />
      {this.currentContent()}
    </div>   
  );
  } 
}

export default App;