import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import  About  from "./About"
import Contact from "./Contact";
import Error from './Error';
import {BrowserRouter,Switch,Route, Redirect} from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import FormDialog from "./Modal";
import Login from "./Login"
import Accordion from "./Accordion"
import Prt from "./Prt"
import  About1  from "./About1"



function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navigation/>
    <Switch>
     <Route exact path="/" component={Prt}/>
      <Route exact path="/About" component={About1}/>
      <Route exact  path="/contact" component={Contact}/>
      <Route exact  path="/login" component={Login}/>
      <Route exact  path="/help" component={Accordion}/>
      <Route component={Error}/>
      <Route component={FormDialog}/>
      <Redirect to="/"/>

    </Switch>
    </BrowserRouter>
    

    
    </>
    
    
  );
}

export default App;
