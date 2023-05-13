import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobreMi.component.html',
  styleUrls: ['./sobreMi.component.css']
})
export class SobreMiComponent implements OnInit {

  persona: persona = new persona("", "", "", "", "");

  constructor(public personaService: PersonaService ){

  }

  ngOnInit(): void{
    let id = 0;

    this.personaService.getPersona(id).subscribe(data =>
      {this.persona = data});
    console.log("sobre mi", this.persona);

  }

}
