export class UserModel {
    id: number;
    username: string;
    cpf: string;
    registered_date: string;
  
    constructor(id: number = 0, username: string = '', cpf: string = '', registered_date: string = '') {
      this.id = id;
      this.username = username;
      this.cpf = cpf;
      this.registered_date = registered_date;
    }
  }