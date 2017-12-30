import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
 
import {  ListComponent } from './list.component'; 
import {  DetailsComponent } from './details.component'; 
import {  MainComponent } from './main.component'; 
import {  AddComponent } from './add.component'; 
import { AddDeactivateGuard } from './add-deactivate.guard';
import { AddActivateGuard } from './add-activate.guard';

const appRoutes: Routes = [
   { path: 'list', component: ListComponent },
   { path: 'add', component: AddComponent,
               canActivate : [AddActivateGuard],
               canDeactivate : [AddDeactivateGuard] },
   { path: 'details/:code', component: DetailsComponent },
   { path: '', component : ListComponent, pathMatch: 'full'},
   { path: '**', component: ListComponent}
];


 @NgModule({
  declarations: [AddComponent,  ListComponent, 
                 DetailsComponent, MainComponent],
  imports: [
    BrowserModule, FormsModule , HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AddDeactivateGuard, AddActivateGuard],
  bootstrap: [MainComponent ]
})
export class CountriesModule { }
