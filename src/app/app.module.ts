import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: '', component: LoginpageComponent },
  {path:'login', component: LoginpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
