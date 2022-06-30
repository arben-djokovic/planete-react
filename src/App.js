import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<> 
              <Home /> 
              </> } />
              <Route path="/destination" element={<> 
              <Page2 /> 
              </> } />
              <Route path="/crew" element={<> 
              <Page3 />
              </> } />
              <Route path="/technology" element={<> 
              <Page4 />
              </> } />
          </Routes>
          <Header /> 
        </Router>
      </div>
  );
}

export default App;
