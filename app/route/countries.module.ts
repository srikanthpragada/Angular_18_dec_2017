import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
 
import {  ListComponent } from './list.component'; 
import {  DetailsComponent } from './details.component'; 
import {  MainComponent } from './main.component'; 
import {  AddComponent } from './add.component'; 

const appRoutes: Routes = [
   { path: 'list', component: ListComponent },
   { path: 'add', component: AddComponent },
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
  providers: [ ],
  bootstrap: [MainComponent ]
})
export class CountriesModule { }
