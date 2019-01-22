import React from 'react';

import Header from './Header';
import ContestList from './ContestList';


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
      <ContestList contests ={this.state.contests} />
    </div>   
  );
  } 
}

export default App;