import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Home from './components/pages/Home'
import Sobre from './components/pages/Runas'
import Contatos from './components/pages/GitHub'
import Adicionar from "./components/pages/Adicionar"

import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Container customClass="minHeight">
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/runas">
              <Sobre/>
            </Route>
            <Route exact path="/gitHub">
              <Contatos/>
            </Route>
            <Route exact path="/adicionar">
              <Adicionar/>
            </Route> 
      </Container> 
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;