import logo from './logo.svg';
import './App.css';
import { Greet }   from './components/Greet';
import Welcome from './components/Welcome';
import Helloworld , { Menu } from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Helloworld />
      <Menu/>
    </div>
  );
}

export default App;
