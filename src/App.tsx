import {
  BrowserRouter as Router,
  Switch, Route

} from "react-router-dom";

import Home from './pages/HomePage/Home'
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import SignUp from  './pages/SignUp/SignUp'

import GlobalStyle from './globalStyle'
import { Navbar, Footer,  } from './components'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <Router>
       <GlobalStyle/>
      <ScrollToTop/>
        

    
      <Navbar />
      <Switch>

     
      <Route path="/services"  component={Services} />
      <Route path="/products"  component={Products} />
      <Route path="/sign-up"  component={SignUp} />
      <Route path="/" exact component={Home} />

      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
