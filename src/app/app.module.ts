import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RestapiService } from './services/restapi.service';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ErrorComponent } from './error/error.component'
import { appRoutingProviders, routing } from './app.routing';
import { SearchAuthorComponent } from './busqueda/search-author/search-author.component';
import { SearchYearComponent } from './busqueda/search-year/search-year.component';
import { SearchTitleComponent } from './busqueda/search-title/search-title.component';
import { SearchAreaComponent } from './busqueda/search-area/search-area.component';
import { SaveBookComponent } from './save-book/save-book.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { LoginComponent } from './login/login.component';
import { LoggerService } from './services/logger.service';
import { LogoutComponent } from './logout/logout.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    BusquedaComponent,
    PrestamosComponent,
    UsuarioComponent,
    ErrorComponent,
    SearchAuthorComponent,
    SearchYearComponent,
    SearchTitleComponent,
    SearchAreaComponent,
    SaveBookComponent,
    PendientesComponent,
    LoginComponent,
    LogoutComponent,
    PerfilComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    RestapiService,
    LoggerService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
