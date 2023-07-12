export interface Message{
  message:string
  date:Date
}
export abstract class AbstractRepo{
  private list:Message[]=[]
  constructor(private name:string) {
  }
  add(message:string){
    this.list.push({
      message:`${this.name.padEnd(16,' ')} ${message}`,
      date:new Date()
    })

  }
  getAll(){
    return [...this.list]
  }
}
export class ComponentService extends AbstractRepo{
  constructor() {
    super('Component');
  }
}

