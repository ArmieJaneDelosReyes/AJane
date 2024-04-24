import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//mat UI
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { CertificateComponent } from './certificate/certificate.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    AboutComponent,
    EducationComponent,
    CertificateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
