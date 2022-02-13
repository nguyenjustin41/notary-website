import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import './styles/globals.css'
import './styles/globals.scss'
import { Mobilebar, Navbar, Home, Fees, ScrollUpButton } from './components/index'





const App = () => {

  

    const [show, setShow] = useState(false)


    return (
            <Router>
                <div>
                        <ScrollUpButton />
                        <Mobilebar show={show} setShow={setShow}/>
                        <Navbar show={show} setShow={setShow}/>
                        <Routes>
                            <Route path="*" element={<Navigate to="/"/>}/>

                            <Route path="https://dreamy-mirzakhani-2092fd.netlify.app" exact element={<Home/>}/>
                            <Route path="https://dreamy-mirzakhani-2092fd.netlify.app/fees" exact element={<Fees/>}/>
                            


                            
                        </Routes>
                </div>
            </Router>

              
    )


    
};

export default App;
