import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faBook, faFileCode, faTerminal } from '@fortawesome/fontawesome-free-solid';

import { Navbar, NavbarToggler, Collapse, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from './pages/home.js';

// Assets
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isNavbarOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand className="m-0 mr-md-4 ml-md-4 link-unstyled small-caps h3" href="/">
              Cornellius GP
            </NavbarBrand>
						<NavbarToggler onClick={this.toggleNavbar} />
						<Collapse isOpen={this.state.isNavbarOpen} navbar>
							<Nav className="ml-auto" navbar>
                <NavItem className="ml-3">
                  <NavLink href="#install">
                    <FontAwesomeIcon icon={faTerminal} size="1x" title="Install" className="align-middle d-none d-lg-inline-block" />
                    <span className="align-middle ml-2">Install</span>
                  </NavLink>
                </NavItem>
                <NavItem className="ml-3">
                  <NavLink href="https://gpytorch.readthedocs.io/" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faBook} size="1x" title="Docs" className="align-middle d-none d-lg-inline-block" />
                    <span className="align-middle ml-2">Docs</span>
                  </NavLink>
                </NavItem>
                <NavItem className="ml-3">
                  <NavLink href="https://github.com/cornellius-gp/gpytorch/tree/master/examples" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFileCode} size="1x" title="Examples" className="align-middle d-none d-lg-inline-block" />
                    <span className="align-middle ml-2">Examples</span>
                  </NavLink>
                </NavItem>
                <NavItem className="ml-3">
                  <NavLink href="http://github.com/cornellius-gp/gpytorch" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x" title="Github" className="align-middle d-none d-lg-inline-block" />
                    <span className="align-middle ml-2">Github</span>
                  </NavLink>
                </NavItem>
							</Nav>
						</Collapse>
          </Navbar>

          <div>
            <Route exact path='/' component={ Home }/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;