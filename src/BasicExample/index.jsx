import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class BasicExample extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h2>This is the home page</h2>
  </div>
)

const About = () => (
  <div>
    <h2>This is the about page</h2>
  </div>
)

export default BasicExample;
