import {
  BrowserRouter as Router,
  Switch, Route

} from "react-router-dom";
import Home from './pages/HomePage/Home'
import GlobalStyle from './globalStyle'
import { Navbar, Footer } from './components'

function App() {
  return (
    <Router>
       <GlobalStyle/>
     
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />

      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
