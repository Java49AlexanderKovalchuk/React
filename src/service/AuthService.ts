import { LoginData } from "../model/LoginData";
export class AuthService {
    private users: LoginData[] = [
        {username: "user@gmail.com", password: "user1234"}, 
        {username: "admin@gmail.com", password: "admin1234"}
    ]; 
    login(loginData: LoginData): void {
        
        if(!this.users.some(n => (n.username === loginData.username) &&
            n.password === loginData.password)) {                
                throw 'alert'
            }  
    }
}