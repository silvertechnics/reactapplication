import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src="/Images/pngwing.com.png" alt="" />
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link showbig" href="main.html">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="teams.html">
                            Teams
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="drivers.html">
                            Drivers
                        </a>
                    </li>
                </ul>
            </div>
            {/* Images for the front page */}
            {/* Note: In React, use the 'src' attribute directly for image paths */}

            {/* Bootstrap JS dependencies */}
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script
                src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"
                defer
            ></script>
            <script
                src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
                defer
            ></script>
        </nav>

    
  );
}

export default App;
