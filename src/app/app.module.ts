import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListGameComponent } from './components/list-game/list-game.component';
import { AddGameComponent } from './components/add-game/add-game.component';

const routes: Routes = [
  {path: "games", component:ListGameComponent},
  {path: "addGame", component:AddGameComponent},
  {path: "editGame/:id", component:AddGameComponent},
  {path: "", redirectTo: "/games", pathMatch: "full"},
];

@NgModule({
  declarations: [
    AppComponent,
    ListGameComponent,
    AddGameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
