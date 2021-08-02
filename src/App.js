import React from 'react'
import Header from './Component/Header.js'
import Main from './Component/Main.js'
import Footer from './Component/Footer'

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <Header />
          <Main />
          <Footer/>
        </div>   
      </>
        );
  }
}
        export default App;
