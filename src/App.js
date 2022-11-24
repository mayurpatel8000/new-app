import logo from './logo.svg';
import './App.css';
import { Greet }   from './components/Greet';
import Welcome from './components/Welcome';
import Helloworld , { Menu } from './components/Hello';
import Msg from './components/Msg'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import { ClassClick } from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGretting from './components/UserGretting';



function App() {
  return (
    <div className="App">
      {/* <Greet name="ravi"  patName="rom" >
        <p>tihs is child props</p>
      </Greet>
      <Greet name="brow" patName="bro" >
        <button>action</button>
       </Greet> 
      <Greet name="john"  patName="jo" /> */}
      {/* <Welcome />
      <Helloworld />
      <Menu/> */}
      {/* <Welcome name="ravi"  patName="rom" />
      <Welcome name="brow" patName="bro" />
      <Welcome name="john"  patName="jo" /> */}
      {/* <Msg /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      <UserGretting />
    </div>
  );
}

export default App;
