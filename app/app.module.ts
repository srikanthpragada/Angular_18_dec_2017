import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';

import { ParentComponent } from './multi/parent.component';
import { ChildComponent } from './multi/child.component';


@NgModule({
  declarations: [
     ParentComponent,ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ParentComponent, ChildComponent]
})
export class AppModule { }
