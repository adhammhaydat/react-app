import React from 'react'
import Header from './Component/Header'
import Main from './Component/Main'
import Footer from './Component/Footer'
import SelectedBeast from './Component/SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <>
        <div className='App'>
          <header><Header /></header>
          
          <main><Main /></main> 
          <SelectedBeast/>
          <Footer/>
        </div>   
      </>
        );
  }
}
        export default App;
