import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar.css';
import Main from '../main/Main';
import PopulationGraph from '../chart/PopulationGraph';


function App() {
  const [activeNavItem, setActiveNavItem] = useState('Home');
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
    setShowNav(false);
  };

  return (
    <div className="App">
      <header>
        <nav className={`sidebar ${showNav ? 'active' : ''}`}>
          <div className="sidebar-header">
            <h3>Carbon cell</h3>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link
                className={activeNavItem === 'Home' ? 'active' : ''}
                onClick={() => handleNavItemClick('Home')}
              >
               <i class="fa-solid fa-house"></i> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={activeNavItem === 'Organization' ? 'active' : ''}
                onClick={() => handleNavItemClick('Organization')}
              >
                <i class="fa-light fa-building"></i> Organization
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={activeNavItem === 'Assests' ? 'active' : ''}
                onClick={() => handleNavItemClick('Assests')}
              >
                <i class="fa-light fa-building"></i> Assests
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={activeNavItem === 'Trade' ? 'active' : ''}
                onClick={() => handleNavItemClick('Trade')}
              >
                <i class="fa-light fa-building"></i> Trade
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={activeNavItem === 'History' ? 'active' : ''}
                onClick={() => handleNavItemClick('History')}
              >
              <i class="fa-light fa-building"></i> History
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={activeNavItem === 'Wallet' ? 'active' : ''}
                onClick={() => handleNavItemClick('Wallet')}
              >
              <i class="fa-regular fa-wallet"></i> Wallet
              </Nav.Link>
            </Nav.Item>
            <div className='spacer'></div>
            <Nav.Item>
              <Nav.Link
                className={activeNavItem === 'Notification' ? 'active' : ''}
                onClick={() => handleNavItemClick('Notification')}
              >
                <i class="fa-regular fa-bell"></i> Notification
              </Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link
                className={activeNavItem === 'Support' ? 'active' : ''}
                onClick={() => handleNavItemClick('Support')}
              >
                <i class="fa-sharp fa-light fa-phone"></i> Support
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={activeNavItem === 'Settings' ? 'active' : ''}
                onClick={() => handleNavItemClick('Settings')}
              >
                <i class="fa-regular fa-gear"></i> Settings
              </Nav.Link>
            </Nav.Item>
            
           
          </Nav>
        </nav>
        <Container fluid>
          <button className="toggle-button" onClick={toggleNav}>
            ☰
          </button>
          <main>
           
            <Main/>
            <PopulationGraph/>
          </main>
        </Container>
      </header>
    </div>
  );
}

export default App;
