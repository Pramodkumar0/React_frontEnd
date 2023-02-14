import { Routes, Route} from 'react-router-dom';
import './App.css';
import './components/Styling/Style.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Bollywood from './components/pages/Bollywood';
import Technology from './components/pages/Technology';
import Hollywood from './components/pages/Hollywood';
import Fitness from './components/pages/Fitness';
import Food from './components/pages/Food';
import Explore from './components/pages/Explore';

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/food' element={<Food />} />
          <Route path='/:pageRoute/:userId' element={<Explore />} />
      </Routes>      
      <Footer />
    </div>
  );
}

export default App;
