import { getRandomNumber } from "../utils/random";
import { getRandomDate } from "../utils/random";
import emplConfiguration from "../config/employee-config.json"
import { Employee } from "../model/Employee";

export type Stat = {
    min: number;
    max: number;
    avg: number
}

export function statAge(employees: Employee[]): Stat {
    const curYear: number = (new Date()).getFullYear();
    let stat: Stat = employees.reduce((res, empl) => {
        const emplYear = (new Date(empl.birthDate)).getFullYear();
    })
    return 
}

export function statSalary(employees: Employee[] ): Stat {
    let stat: Stat = employees.reduce((res, empl) => {
        res.avg += empl.salary;
        res.min = res.min < empl.salary ? res.min : empl.salary;
        res.max = res.max > empl.salary ? res.max : empl.salary;
        return res;
    }, {min: emplConfiguration.maxSalary, max: emplConfiguration.minSalary, avg: 0})
    stat.avg = Math.trunc(stat.avg / employees.length);
    return stat;

}

export function createRandomEmployee(employees: Employee[]): Employee {
    const names: Array<string> = ["John", "Yosef", "Vasya", "Hana", "Tal"];
    const randName: string = names[getRandomNumber(0, names.length)];
    const randBirthDate: string = getRandomDate(emplConfiguration.minBirthYear,
        emplConfiguration.maxBirthYear).toISOString().slice(0, 10);
    const randDepartment: string =
        emplConfiguration.departmentsNames[getRandomNumber(0,
            emplConfiguration.departmentsNames.length)];
    const randSalary: number = getRandomNumber(emplConfiguration.minSalary,
        emplConfiguration.maxSalary, true, true);
    const randId: number = getUniqueId(employees);

    return {
        id: randId, name: randName, birthDate: randBirthDate,
        department: randDepartment, salary: randSalary
    };
}

function getUniqueId(employees: Employee[]): number {
    let id: number = getRandomNumber(emplConfiguration.minId, emplConfiguration.maxId);
    while(!isUnique(employees, id)){
        id = getRandomNumber(emplConfiguration.minId, emplConfiguration.maxId);
    }
    return id;
}
function isUnique(employees: Employee[], id: number): boolean {
    return (!employees.find(n => n.id === id)); 
}
