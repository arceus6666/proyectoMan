import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BusquedaComponent} from './busqueda/busqueda.component';
import { ErrorComponent} from './error/error.component';
import { ModuleWithProviders} from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { SearchAuthorComponent } from './busqueda/search-author/search-author.component';
import { SearchTitleComponent } from './busqueda/search-title/search-title.component';
import { SearchAreaComponent } from './busqueda/search-area/search-area.component';
import { SearchYearComponent } from './busqueda/search-year/search-year.component';
import { SaveBookComponent } from './save-book/save-book.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: PerfilComponent},
  {path: 'search', component: BusquedaComponent},
  {path: 'search/author', component: SearchAuthorComponent},
  {path: 'search/year', component: SearchYearComponent},
  {path: 'search/title', component: SearchTitleComponent},
  {path: 'search/area', component: SearchAreaComponent},
  {path: 'profile', component: UsuarioComponent},
  {path: 'register', component: RegistroComponent},
  {path: 'register-book', component: SaveBookComponent},
  {path: 'pendientes', component: PendientesComponent},
  {path: 'prestados', component: PrestamosComponent},
  {path: 'login', component:LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'users', component: UsersComponent},
  {path: '**', component: ErrorComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
