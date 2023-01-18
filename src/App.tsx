import { Timer } from './components/Timer';


function App() {
  return <div>
    <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-around'}}>
      <Timer cityOrCountry = {"Midway"}></Timer>
      <Timer cityOrCountry = {"Iceland"}></Timer>
    </div>
    <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-around', paddingTop: '5vh'}}>
      <Timer cityOrCountry = {"Israel"}></Timer>
      <Timer cityOrCountry = {"Tallinn"}></Timer>
    </div>
  </div>

}

export default App;
