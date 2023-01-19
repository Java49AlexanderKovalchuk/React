import { Timer } from './components/Timer';


function App() {
  const flexColumn: React.CSSProperties = { display: "flex", flexDirection: "column"}
  const flexRow: React.CSSProperties = {
    display: "flex", flexDirection: 'row', justifyContent: 'space-around',
    width: "60vw", marginTop: "4vh"
  }
  
  return <div style={flexColumn}>
    <div style={flexRow}>
      <Timer cityOrCountry={"Midway"}></Timer>
      <Timer cityOrCountry={"Iceland"}></Timer>
    </div>
    <div style={flexRow}>
      <Timer cityOrCountry={"Israel"}></Timer>
      <Timer cityOrCountry={"Tallinn"}></Timer>
    </div>
  </div>

}
export default App;
