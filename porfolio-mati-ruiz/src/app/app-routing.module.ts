import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from './componentes/sobreMi/sobreMi.component';
import { MisTrabajosComponent } from './componentes/misTrabajos/misTrabajos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  // canActivate:[GuardGuard]
  {path:'portfolio', component:PorfolioComponent, },
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'', redirectTo:'iniciar-sesion', pathMatch:'full'}
  // {path: 'home', component: CarrucelComponent},
  // {path: 'sobre-mi', component: SobreMiComponent},
  // {path: 'mis-trabajos', component: MisTrabajosComponent},
  // {path: 'skills', component: SkillsComponent},
  // {path: 'experiencia', component: ExperienciaComponent},
  // {path: 'educacion', component: EducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


export const routingComponents = [
  SobreMiComponent,
  MisTrabajosComponent,
  SkillsComponent,
  ExperienciaComponent,
  EducacionComponent
]
