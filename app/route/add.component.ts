import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { CountryRepository } from './CountryRepository';


@Component({
    templateUrl: './add.component.html'
})
export class AddComponent   {
     message : string = null; 

     addCountry(code : string, name : string, capital : string) {
        var country : Country = 
            {"Code" : code, "Name" : name, "Capital" : capital} ;

        CountryRepository.addCountry(country);
        this.message= name.toUpperCase() + " has been added successfully!";
     }
}