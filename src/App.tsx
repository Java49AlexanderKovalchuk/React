import { Input } from './components/Input';
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
  
  // function processInput(value: string): string {
  //   let res: string = '';
  //   if(value.toLowerCase().includes('hello')) {
  //   res = "get tired from HELLO. it's forbidden word";
  //   }
  //   return res;
  // }
  // return <Input inputId={'input-1'} inputProcess={processInput}
  // />
  // return <Rand someid={'id-1'} ></Rand>
}
export default App;
