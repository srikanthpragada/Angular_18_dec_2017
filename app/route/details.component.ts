import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { CountryRepository } from './CountryRepository';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
    templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
    country: Country = null;

    constructor(private route: ActivatedRoute) {
    }


    ngOnInit(): void {
        this.route.params.subscribe(params => {
            var code = params["code"];
            this.country = CountryRepository.getCountry(code);
        });
    }

}