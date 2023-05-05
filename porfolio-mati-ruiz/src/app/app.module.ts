import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from  '@angular/router';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorProvider, InterceptorService } from './servicios/interceptor.service';
import { DatosPorfolioService } from './servicios/datos-porfolio.service';
import { HeaderSocialComponent } from './componentes/header-social/header-social.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    IniciarSesionComponent,
    PorfolioComponent,
    HeaderSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    // RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [
    DatosPorfolioService,
    InterceptorProvider,  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
