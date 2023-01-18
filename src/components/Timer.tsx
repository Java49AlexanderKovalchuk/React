import React from "react";
import timeZones from "../time-zones";

type TimerProps = {
    cityOrCountry: string;
}
export const Timer: React.FC<TimerProps> = (props) => {
    
    function getTimeZone(str: string): string {
        const ind: number = timeZones.findIndex(n => n.mainCities.join(' ').includes(str) == true ||
            n.countryName === str);
            if(ind < 0) {
                return "Asia/Jerusalem";
            }
            return timeZones[ind].name;
    }
    
    const timeZone: string = getTimeZone(props.cityOrCountry);  
    
    const [time, setTime] = React.useState(new Date());
    function tick() {
        console.log("tick");
        setTime(new Date());
    }
    React.useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return <div>
        <h3>Time in time zone {timeZone}</h3>
        <label style={{ display: "block", textAlign: "center", fontSize: "2em" }}>
            Time {time.toLocaleTimeString(undefined, { timeZone })}</label>

    </div>
}