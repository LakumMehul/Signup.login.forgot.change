import { HashRouter as  Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Changepassword from './Changepassword'
import Forgotpassword from './Forgotpassword';

function App() {





  return (
    <div className="App">

<Router>
       <Link to="/Home" style={{color:"yellow"}}>Home</Link>  |
       <Link to="/Signup"  style={{color:"yellow"}}>Signup</Link>  |
       <Link to="/Login"  style={{color:"yellow"}}>Login</Link>
      
<Routes>
<Route path='/Home' element={<Home />} />
  <Route path='/Signup' element={<Signup />} />
  <Route path='/Login' element={<Login />} />
  <Route path='/Changepassword' element={<Changepassword />} />
  <Route path='/Forgotpassword' element={<Forgotpassword />} />
</Routes>

</Router>

  
    </div>
  );
}

export default App;
