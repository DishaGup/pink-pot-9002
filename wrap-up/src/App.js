import logo from './logo.svg';
import './App.css';
import Navbar from './Homepage/Components/Navbar';
import Herobannerpage from './Homepage/Components/Herobannerpage';
import Footer from './Homepage/Components/Footer';
import Workpage from './Dashboard/Workpage';

function App() {
  return (
    <div className="App">
     {/* <Navbar/>
     <Herobannerpage/>
     <Footer/> */}

     <Workpage/>
    </div>
  );
}

export default App;
