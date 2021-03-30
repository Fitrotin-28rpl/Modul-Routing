import React from 'react';
import Utama from './Components/Utama';
import {Link} from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css'

class App extends React.Component {
  render(){
    return(
      <div className="grid-container">
        <header>
          <Navbar logo="React" page1="Beranda" page2="Tentang Saya" page3="Karya" page4="kontak" page5="List"
          link1="/" link2="/tentangsaya" link3="/karya" link4="kontak" link5="/list"
          ></Navbar> 
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Utama />
              </div>
            </div>
          </main> 
          <footer>
            <div className="futer">©️ All Right Reserved 2021</div>  
          </footer>  
      </div>
    );
  }
}

export default App;