
import './App.css';
import linkedin from './linkedin.png';
import github from './github.png';
import thailand from './thailand.png';



function App() {
  return (
    <div className="App">
      {/* <div className="Profile-photo">
        <img src={thailand} alt="profile"></img>
      </div> */}
      <p>
        Erin Belot
      </p>
      <li> I'm a front end developer </li>
      <li> I plan to live in Queenstown this winter so I can ski every weekend </li>
      <li> I drove through the desert to Darwin in a 1996 hyuandi. </li>
      <li> I like horse riding, pottery, Brazilian Jiu Jitsu, and Bikram yoga</li>

      <ul>
        <a href="https://www.linkedin.com/in/erin-belot-9248a9212/">
          <img src={linkedin} alt="Avatar"></img>
        </a>
        <a href="https://github.com/erinbelot">
          <img src={github} alt="Avatar"></img>
        </a>
      </ul>

    </div>
  );
}

export default App;
