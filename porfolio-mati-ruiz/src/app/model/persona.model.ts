export class persona{

  id?: number;
  nombre: string;
  apellido: string;
  img: string;
  profesion: string;
  edad: string;

  constructor(nombre: string, apellido:string, img: string, profesion: string, edad: string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.profesion = profesion;
    this.edad = edad;
  }

}
