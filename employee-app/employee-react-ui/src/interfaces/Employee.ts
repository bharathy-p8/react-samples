export interface IEmployee {
    id?: string | null,
    firstName: string,
    lastName: string,
    emailId: string,
}

export class Employee implements IEmployee {
    public id: null; 
    public firstName: string;
    public lastName: string;
    public emailId: string; 
 
    constructor(){
        this.id = null; 
        this.firstName = "";
        this.lastName = "";
        this.emailId = ""; 
    }
}