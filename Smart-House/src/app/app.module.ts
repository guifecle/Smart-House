import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComodoComponent } from './Comodo/Comodo.component';
import { NavbarComponent } from './Navbar/Navbar.component';

@NgModule({
   declarations: [
      AppComponent,
      ComodoComponent,
      NavbarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
