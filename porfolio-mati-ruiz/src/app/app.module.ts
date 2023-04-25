import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from  '@angular/router';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';
import { DatosPorfolioService } from './servicios/datos-porfolio.service';

// import { CarrucelComponent } from './componentes/carrucel/carrucel.component';
// import { SobreMiComponent } from './componentes/sobreMi/sobreMi.component';
// import { MisTrabajosComponent } from './componentes/misTrabajos/misTrabajos.component';
// import { SkillsComponent } from './componentes/skills/skills.component';
// import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
// import { EducacionComponent } from './componentes/educacion/educacion.component';
// import { MiCarreraComponent } from './componentes/miCarrera/miCarrera.component';
// import { PostsComponent } from './componentes/posts/posts.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    IniciarSesionComponent,
    PorfolioComponent
    // CarrucelComponent,
    // SobreMiComponent,
    // MiCarreraComponent,
    // MisTrabajosComponent,
    // SkillsComponent,
    // ExperienciaComponent,
    // EducacionComponent,
    // PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    // RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [DatosPorfolioService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
