import React from "react";
import timeZones from "../time-zones";
import { Input } from "./Input";

type TimerProps = {
    cityOrCountry: string;
    time: Date;
}

export const Timer: React.FC<TimerProps> = (props) => {
    const timeZoneIndex: number = timeZones.findIndex(tz => JSON.stringify(tz).
        includes(props.cityOrCountry));
    const [timeZone, setTimeZone] = React.useState(timeZones[timeZoneIndex]?.name);
    const timeZoneName = React.useRef(timeZone ? props.cityOrCountry : "Israel");

    function processSityCountry(value: string): string {
        const index = timeZones.findIndex(tz => JSON.stringify(tz).includes(value));
        let res = '';
        if (index < 0) {
            res = `${value} is wrong city / country, please type again`;
        } else {
            timeZoneName.current = value;
            setTimeZone(timeZones[index].name);
        }
        return res;
    }

    return <div>
        <Input placeHolder={"Enter city or country"} inputProcess={processSityCountry} />
        <h3 className="logo" style={{ textAlign: "center" }}>Time in {timeZoneName.current}</h3>
        <label style={{ display: "block", textAlign: "center", fontSize: "2em" }}>
            {props.time.toLocaleTimeString(undefined, { timeZone })}</label>

    </div>
}