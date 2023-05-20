export class Partido {
    id: number;
    local: string;
    visitante: string;


    constructor(id: number,
      local: string,
      visitante: string
      ){
        this.id = id;
        this.local = local;
        this.visitante = visitante;

      }
  }
