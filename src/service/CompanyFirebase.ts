import { Employee } from "../model/Employee";
import employeeConfig from '../config/employee-config.json';
import { getRandomNumber } from "../utils/random";
import {app} from '../config/firebase-config';
import {collection, getFirestore, getDocs, setDoc, deleteDoc, doc} from 'firebase/firestore';

const EMPLOYEES = 'employees';
export class CompanyFirebase {
    private employeesCol = collection(getFirestore(app), EMPLOYEES);
    
    async addEmployee(empl: Employee): Promise<void> {
        const{minId, maxId} = employeeConfig;
        empl.id = getRandomNumber(minId, maxId);
         this.updateEmployee(empl);
    }

    async updateEmployee(empl: Employee): Promise<void> {
        await setDoc(doc(this.employeesCol, empl.id.toString()), empl);
    }
    
    async removeEmployee(id: number): Promise<void> {
        await deleteDoc(doc(this.employeesCol, id.toString()));
    }
    async getAllEmployees(): Promise<Employee[]> {
        const docsSnapShot = await getDocs(this.employeesCol);
        return docsSnapShot.docs.map(doc => doc.data() as Employee);
    }
}
// function getUniqueId(employees: Employee[]): number {
//     const {minId, maxId} = employeeConfig;
//     let id =  getRandomNumber (minId, maxId);
//     while(!employees.every(n => n.id != id)) {
//         id = getRandomNumber(minId, maxId);
//     }
//     return id;
// }