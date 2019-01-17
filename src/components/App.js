import React from 'react';
import Header from './Header';

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
    <div className="App" >
      <Header message={this.state.pageHeader} />
      <div>
      ...
      </div>
    </div>   
  );
  } 
}

export default App;