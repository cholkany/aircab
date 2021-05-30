import React from 'react'
import Header from './components/Header'
import Select from './components/Select'
import FlightsResult from "./components/FlightsResult"

class App extends React.Component{

  render(){
    return (
      <div className="bg-gray-100">
        <Header/>
        <Select/>
		  </div>
    );
  }
  
}

export default App;
