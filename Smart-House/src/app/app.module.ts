import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComodoComponent } from './Comodo/Comodo.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { FooterComponent } from './Footer/Footer.component';
import { SearchComponent } from './search/search.component';

@NgModule({
   declarations: [
      AppComponent,
      ComodoComponent,
      NavbarComponent,
      FooterComponent,
      SearchComponent
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
