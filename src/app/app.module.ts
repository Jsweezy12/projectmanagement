import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule, MatInputModule} from '@angular/material';

import {MatIconModule} from '@angular/material/icon';


const appRoutes: Routes = [
  { path: 'home/:id', component: HomepageComponent ,children:[
    {path: 'client',component: ClientsComponent},
    {path: 'projects',component: ProjectsComponent}
  ]
},
  { path: '', component: LoginpageComponent },
  {path:'login', component: LoginpageComponent}
  // ,{path:'**',component: LoginpageComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    ClientsComponent,
    ProjectsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ useHash: true }),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
