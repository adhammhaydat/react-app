import React from 'react'
import Header from './Component/Header'
import Main from './Component/Main'
import Footer from './Component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <>
        <div className='App'>
          <Header />
          <main><Main /></main> 
          <Footer/>
        </div>   
      </>
        );
  }
}
        export default App;
