import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Products from './components/Products'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Route exact path="/" component={Products}/>
      </BrowserRouter>
    )
  } 
}

export default App;
