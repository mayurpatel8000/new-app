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
import List from './components/List';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Frag from './components/Frag';
import Table from './components/Table';
import Purecom from './components/Purecom';
import Parentcom from './components/Parentcom';
import Refs from './components/Refs';
import FocusInput from './components/FocusInput';
import FRParent from './components/FRParent';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import NewCounter from './components/NewCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';



function App() {
  return (
    <div className="App">
      <UserProvider value="rajaram">
      <ComponentC  />
      </UserProvider>
      {/* <NewCounter render={(count,incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} /> } />
      <NewCounter render={(count,incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} /> } /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn)=> isLoggedIn ? 'viswas' : 'guest' } /> */}
      {/* <ErrorBoundary>      
      <Hero heroname="Batman" />      
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname="Superman" />
      </ErrorBoundary>
<ErrorBoundary>
     <Hero heroname="Joker" />
</ErrorBoundary> */}
{/* <ClickCounter name="ram" /> */}
{/* <HoverCounter name="raja" /> */}
      {/* <PortalDemo /> */}
      {/* <FRParent /> */}
      {/* <FocusInput /> */}
      {/* <Refs /> */}
      {/* <Parentcom /> */}
      {/* <Purecom /> */}
      {/* <Table /> */}
     {/* <Frag /> */}
      {/* <LifecycleA />      */}
      {/* <Form /> */}
      {/* <h1 className='error'>error</h1>
      <h1 className={styles.success}>success</h1>
      <Inline />

      <Stylesheet primary={true} /> */}
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
      {/* <UserGretting /> */}
      {/* <List /> */}
      
    </div>
  );
}

export default App;
