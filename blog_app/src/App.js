
import './App.css';
import Navbar from './Components/Navbar';
import Homescreen from './Screens/HomeScreen';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from 'react';

import Createpost from './Screens/Createpost';
import Footer from './Components/Footer';
import Post from './Screens/Post';
import BackDrop from './Components/Backdrop';
import SideDrawer from './Components/SideDrawer';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

function App() {

  const [sideToggle, setSideToggle] = useState(false);
  return (

    <div className="App">

      <Router>

        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <BackDrop show={sideToggle} click={() => setSideToggle(false)} />






        <Route path="/" exact component={Homescreen} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/createpost" exact component={Createpost} />
        <Route path="/post/:postid" exact component={Post} />
      </Router>

    </div>


  );
}

export default App;
