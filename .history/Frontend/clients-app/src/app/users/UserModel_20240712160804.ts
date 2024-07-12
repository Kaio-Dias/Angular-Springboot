import { format } from "node:util";

export class UserModel {
    id: number;
    username: string;
    cpf: string;
    registered_date: Date;
  
    constructor(id: number = 0, username: string = "", cpf: string = "", registered_date: Date= new Date()) {
      this.id = id;
      this.username = username;
      this.cpf = cpf;
      this.registered_date = registered_date;
  }
}