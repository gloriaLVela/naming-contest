import React from 'react';

import Header from './Header';
import ContestPreview from './ContestPreview';


// Top level component

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
  render(){
    return (
    //  Use map to display the list of contests
    // Provide the key 
    <div className="App" >
      <Header message={this.state.pageHeader} />
      <div>
      
      {this.state.contests.map(contest => 
        <ContestPreview key={contest.id} {...contest} />)}
        
      </div>
    </div>   
  );
  } 
}

export default App;