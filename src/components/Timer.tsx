import React from "react";
import timeZones from "../time-zones";
import { Input } from "./Input";

type TimerProps = {
    cityOrCountry: string;
}

export const Timer: React.FC<TimerProps> = (props) => {
    const timeZoneIndex: number = timeZones.findIndex(tz => JSON.stringify(tz).   
    includes(props.cityOrCountry));
    const [timeZone, setTimeZone] = React.useState(timeZones[timeZoneIndex]?.name); 
    const [timeZoneName, setTimeZoneName] = React.useState(timeZone ? props.cityOrCountry : "Israel");
    const [time, setTime] = React.useState(new Date());
    function tick() {
        console.log("tick");
        setTime(new Date());
    }
    React.useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    function processSityCountry(value: string): string {
        const index = timeZones.findIndex(tz => JSON.stringify(tz).includes(value));
        let res = '';
        if(index < 0) {
            res = `${value} is wrong city / country, please type again`;
        } else {
            setTimeZoneName(value);
            setTimeZone(timeZones[index].name);
        }
         return res;
    }

    return <div>
        <Input placeHolder={"Enter city or country"} inputProcess={processSityCountry} />
        <h3 className="logo">Time in {timeZoneName}</h3>
        <label style={{ display: "block", textAlign: "center", fontSize: "2em" }}>
            Time {time.toLocaleTimeString(undefined, { timeZone })}</label>

    </div>
}