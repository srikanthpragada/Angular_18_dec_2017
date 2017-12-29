import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { CountryRepository } from './CountryRepository';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

    countries: Country[];
    message: string = "";

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.countries = CountryRepository.GetCountries();
    }

    deleteCountry(code: string, event: Event): boolean {
        var res = confirm("Do you want to delete country?");
        if (res) {
            var result = CountryRepository.deleteCountry(code);
            if (!result)
                alert("Sorry! Country not found!");
            else
                alert(`Country ${code} deleted successfully!`);
        }
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
}