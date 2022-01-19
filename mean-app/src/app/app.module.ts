import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player/player.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { AddPlayerComponent } from './player/add-player/add-player.component';
import { ppgPlayerComponent } from './player/view-ppg/view-ppg.component';
import { rpgPlayerComponent } from './player/view-rpg/view-rpg.component';
import { apgPlayerComponent } from './player/view-apg/view-apg.component';
import { salaryPlayerComponent } from './player/view-salary/view-salary.component';
import { jerseyPlayerComponent } from './player/view-jersey/view-jersey.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPlayerComponent } from './edit-player/edit-player.component';

const appRoutes:Routes = [
  {
    path: '', component:PlayerComponent
  },
  {
    path: 'add-player', component:AddPlayerComponent
  },
  {
    path: 'edit/:id', component:EditPlayerComponent
  },
  {
    path: 'ppg', component:ppgPlayerComponent
  },
  {
    path: 'rpg', component:rpgPlayerComponent
  },
  {
    path: 'apg', component:apgPlayerComponent
  },
  {
    path: 'salary', component:salaryPlayerComponent
  },
  {
    path: 'jerseynumber', component:jerseyPlayerComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    NavbarComponent,
    AddPlayerComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
