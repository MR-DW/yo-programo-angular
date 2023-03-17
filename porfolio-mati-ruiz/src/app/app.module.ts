import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from  '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CarrucelComponent } from './componentes/carrucel/carrucel.component';
import { SobreMiComponent } from './componentes/sobreMi/sobreMi.component';
import { MisTrabajosComponent } from './componentes/misTrabajos/misTrabajos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { MiCarreraComponent } from './componentes/miCarrera/miCarrera.component';

const appRoutes:Routes = [
  {path: '', component:  CarrucelComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  // {path: 'mi-carrera', component:  MiCarreraComponent},
  {path: 'mis-trabajos', component:  MisTrabajosComponent},
  {path: 'skills', component:  SkillsComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'educacion', component:   EducacionComponent}
  //   children: [
  //     {
  //       path: 'mis-trabajos',
  //       component: MisTrabajosComponent,
  //     },
  //     {
  //       path: 'experiencia',
  //       component: ExperienciaComponent,
  //     },
  //     {
  //       path: 'educacion',
  //       component: EducacionComponent,
  //     },
  //     {
  //       path: 'skills',
  //       component: SkillsComponent,
  //     }
  //   ]
  // },
  // {path: 'mi-carrera/section-exp', component:  MiCarreraComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrucelComponent,
    SobreMiComponent,
    MiCarreraComponent,
    MisTrabajosComponent,
    SkillsComponent,
    FooterComponent,
    ExperienciaComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
