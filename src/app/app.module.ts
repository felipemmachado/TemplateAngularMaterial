import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './Views/container/container.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    ContainerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatSliderModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
