import { IEmployee } from "../interfaces/Employee";
import { api, headerAPI } from "../configs/axios";


export class EmployeeService {

private apiURL = "/employees";

    public async getAll() {
        try {
            console.log("P8 Employees")
            const response = await api.get<IEmployee[]>(`${this.apiURL}`)
            return await response.data            
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async post(data:IEmployee) {
        try {
            const response = await api.post<IEmployee>(`${this.apiURL}`, data, headerAPI)
            return await response.data            
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(id:string){
        try {
            const response = await api.get<IEmployee>(`${this.apiURL}/${id}`, headerAPI)
            const data: IEmployee = response.data 
            return data          
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put(data:IEmployee) {
        try {
            const response = await api.put<IEmployee>(`${this.apiURL}/${data.id}`, data, headerAPI)
            return await response.data            
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete(data:IEmployee) {
        try {
            const response = await api.delete(`${this.apiURL}/${data.id}`, headerAPI)
            return await response.data            
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
  
}
