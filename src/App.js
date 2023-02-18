import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="Personal-logo img-fluid" alt="logo" />
          
          
        </header>
        <main className="main-content">
          <Dictionary />
        </main>

        <footer>
          This project was coded by{" "}
          <a
            href="linkedin.com/in/carmenruizgomez"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Maria Ruiz
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/mariaruizgomez/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://glittery-smakager-438d8f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
