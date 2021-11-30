import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Switch
} from "react-router-dom";
import Fistpage from './Components/pagess/Fistpage'
import SecoundPage from './Components/pagess/SecoundPage'
import ThirdPage from "./Components/pagess/ThirdPage";
import Post from "./Components/Store/PostContext";



function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<SecoundPage/>}></Route>
          <Route path='/products' element={<Fistpage />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Post>
        <Router>
          <Route exact path='/'>
                <Fistpage/>
          </Route>
          <Route path='/Sec'>
              <SecoundPage/>
          </Route>
          <Route path='/Th'>
            <ThirdPage/>
          </Route>
        </Router>
        {/* <Router>
        <Routes>
          <Route path='/' element={<Fistpage/>} ></Route>
          <Route path='/Sec' element={<SecoundPage/>}></Route>
          <Route path='/Th' element={<ThirdPage/>}></Route>
        </Routes>
      </Router> */}



      </Post>

      {/* <Router>
        <Routes>
          <Route path='/s' element={<SecoundPage />}></Route>
        </Routes>
        <Link to='/s'><button>Ist</button></Link>
      </Router> */}

    </div>
  );
}

export default App;
