export interface Todos {
  userId:number;
  id:number;
  title: string;
  completed: boolean;
}

export class Todos {

  constructor(public userId:number,public id:number, public title:string, public completed: boolean){}

}