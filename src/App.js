import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <div className='content'>
            <Routes>
              <Route path='/' exact element={<Home />}/>
              <Route path='/create' exact element={<Create/>}/>
              <Route path="/blogs/:id" exact element={<BlogDetails/>}/>
            </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
