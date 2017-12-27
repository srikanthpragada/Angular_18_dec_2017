import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';

import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';

import { ParentComponent } from './multi/parent.component';
import { ChildComponent } from './multi/child.component';

import { LogService } from './services/log.service';
import { UseLogComponent } from './services/use-log.component';
import { UseLog2Component } from './services/use-log2.component';
import { LoginComponent } from './forms/login.component';
import { ReactiveLoginComponent } from './forms/rlogin.component';


@NgModule({
  declarations: [
    ReactiveLoginComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ReactiveLoginComponent]
})
export class AppModule { }
