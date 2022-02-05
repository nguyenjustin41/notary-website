import React, {useState} from 'react';
import './styles/globals.css'
import './styles/globals.scss'
import { HeroSection, Mobilebar, Navbar, Process, Services, Reviews, Contact } from './components/index'



const App = () => {

  

    const [show, setShow] = useState(false)


    return (
              <div>
                  <Mobilebar show={show} setShow={setShow}/>
                 
                  <Navbar show={show} setShow={setShow}/>
                  <HeroSection/>

        

                  <Process/>
                  <Services/>
                  <Reviews />
                  <Contact />
              </div>

              
    )


    
};

export default App;
