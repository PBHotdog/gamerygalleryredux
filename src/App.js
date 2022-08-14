import logo from './GGReduxLogo.png';
import './App.css';




export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>
            Welcome to Gamer Gallery Redux. This page is currently under construction.
          </p>
              <div id="collapseID" className="wrapper">
                <h1>FUTURE PLANS: </h1>
                <ul>
                  <li>
                    Implement Steam API (Currently Having CORS Errors)
                  </li>
                  <li>
                    Look into Xbox API
                  </li>
                  <li>
                    Look into EPIC API
                  </li>
                </ul>
              </div>
        </div>
      </header>
    </div>
  );
}
