import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { CountryRepository } from './CountryRepository';
import { Router} from '@angular/router';


@Component({
    templateUrl: './add.component.html'
})
export class AddComponent   {
     message : string = null; 
     done : boolean = false;

     constructor(private router : Router) {

     }

     addCountry(code : string, name : string, capital : string) {
        var country : Country = 
            {"Code" : code, "Name" : name, "Capital" : capital} ;

        CountryRepository.addCountry(country);
        this.message= name.toUpperCase() + " has been added successfully!";
        this.done = true; 
     }

     cancelAdd() {
         this.done = true; 
         this.router.navigate(['/list']);
     }
}