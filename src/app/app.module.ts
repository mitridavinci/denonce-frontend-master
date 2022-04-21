import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { DenonciationComponent } from './denonciation/denonciation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VilleComponent } from './ville/ville.component';
import { ListVillesComponent } from './list-villes/list-villes.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RegionComponent } from './region/region.component';
import { QuartierComponent } from './quartier/quartier.component';
import { ListQuartiersComponent } from './list-quartiers/list-quartiers.component';
import { ListEtablissementsComponent } from './list-etablissements/list-etablissements.component';
import { ListDenonciationsComponent } from './list-denonciations/list-denonciations.component';
import { UpdateDenonciationComponent } from './update-denonciation/update-denonciation.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    DenonciationComponent,
    AccueilComponent,
    EtablissementComponent,
    AdminComponent,
    VilleComponent,
    ListVillesComponent,
    RegionComponent,
    QuartierComponent,
    ListQuartiersComponent,
    ListEtablissementsComponent,
    ListDenonciationsComponent,
    UpdateDenonciationComponent,
    LoginComponent,
    LogoutComponent,
    ListUsersComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
