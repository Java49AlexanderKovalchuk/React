import React from 'react';
import { Input } from './components/Input';
import { Timer } from './components/Timer';


function App() {

  const properties: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
  const propertiesDivTimer: React.CSSProperties = {
    border: "solid black 1px", marginRight: "2vw", marginTop: "5vh", width: "45vw"
  }

  //---getting timer engine--
  const [time, setTime] = React.useState(new Date());
  function tick() {
    console.log("tick");
    setTime(new Date());
  }
  React.useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);
  //-----------

  const [placesTimes, setPlacesTimes] = React.useState<string[]>([]);

  function creatingDivs(value: string): string {
    const placesTimes: string[] = value.split("#");
    if (placesTimes.length % 2 == 0) {
      setPlacesTimes(placesTimes.slice());
      return '';
    }
    else {
      setPlacesTimes([]);
      return `ERROR: entered number of names is ${placesTimes.length}. It must be even`
    }

  }
  function getDivsTimers(placesTimes: string[]): JSX.Element[] {
    return placesTimes.map(timer => <div style={propertiesDivTimer}>
      <Timer time={time} cityOrCountry={timer} /></div>)

  }
  return <section style={{ display: 'flex', flexDirection: 'column' }}>
    <Input placeHolder={'enter town or country names separated by #'} inputProcess={creatingDivs}></Input>
    <section style={properties}>
      {getDivsTimers(placesTimes)}
    </section>
  </section>

}
export default App;