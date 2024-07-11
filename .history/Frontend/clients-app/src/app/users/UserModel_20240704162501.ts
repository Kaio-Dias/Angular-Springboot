export class UserModel {
    id: number;
    username: string;
    cpf: string;
    registered_date: string;
  
    constructor(id: number = 0, username: string = "", cpf: string = "", registered_date: Date | string = "") {
      this.id = id;
      this.username = username;
      this.cpf = cpf;
      if (registered_date instanceof Date) {
        this.registered_date = UserModel.formatDate(registered_date);
      } else {
        this.registered_date = registered_date;
      }

    }

    static formatDate(date: Date): string {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses são baseados em zero
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  }