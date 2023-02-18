import { Employee } from "../model/Employee"
import { getElement, getRandomDate, getRandomNumber } from "../utils/random";
import employeeConfig from "../config/employee-config.json";

export function createRandomEmployee(): Employee {
    const {minId, maxId, departments,
         minBirthYear, maxBirthYear, minSalary, maxSalary} = employeeConfig;
    const id = getRandomNumber(minId, maxId,true, true);
    const name = "name" + id.toString().slice(0, 3);
    const department = getElement(departments);
    const birthDate = getRandomDate(minBirthYear, maxBirthYear).toISOString()
    .slice(0, 10);
    const salary = getRandomNumber(minSalary, maxSalary);
    const employee: Employee = {id, name, department,
         birthDate, salary}
    return employee;
}

export function statAge(employees: Employee[]): {min:number, max:number, avg: number} {
    const currentYear = new Date().getFullYear();
    const result = employees.reduce((res, empl) => {
        const age = currentYear - new Date(empl.birthDate).getFullYear();
        if (res.min > age) {
            res.min = age;
        } else if(res.max < age) {
            res.max = age
        }
        res.avg += age;
        return res;

    }, {min: 1000, max: 0, avg:0});
    result.avg = Math.round(result.avg / employees.length) ;
    return result;
}

export function statSalary(employees: Employee[]):
 {min:number, max:number, avg: number} {
   
    const result = employees.reduce((res, empl) => {
        const {salary} = empl;
        if (res.min > salary) {
            res.min = salary;
        } else if(res.max < salary) {
            res.max = salary;
        }
        res.avg += salary;
        return res;

    }, {min: Number.MAX_VALUE, max: 0, avg: 0});
    result.avg = Math.round(result.avg / employees.length) ;
    return result;
}