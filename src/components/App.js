import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

// Top level component

// Component definition
class App extends React.Component{
  state = {
    pageHeader: 'Naming Contests'
  }
  componentDidMount(){
      // ajax fetching
      // implement timers, listeners
  }

  componentWillUnmount(){
      // clean timers, listeners
  }
  render(){
    return (
    //  Use map to display the list of contests
    <div className="App" >
      <Header message={this.state.pageHeader} />
      <div>
      
      {this.props.contests.map(contest => 
        <ContestPreview {...contest} />)}
        
      </div>
    </div>   
  );
  } 
}

export default App;