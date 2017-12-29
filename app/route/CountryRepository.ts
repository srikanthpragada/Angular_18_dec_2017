import { Country } from './Country';

export class CountryRepository {
    static countries: Country[] =
    [
        { Code: 'in', Name: "India", Capital: "New Delhi" },
        { Code: 'us', Name: "USA", Capital: "Washington DC" },
        { Code: 'ch', Name: "China", Capital: "Beijing" },
        { Code: 'sp', Name: "Spain", Capital: "Madrid" },
        { Code: 'uk', Name: "United Kingdom", Capital: "London" }
    ];

    static addCountry(country : Country) {
        this.countries.push(country);
    }

    static deleteCountry(code : string) : boolean {
        var idx : number = 0;
        for (var c of this.countries) {
            if (c.Code == code) {
                this.countries.splice(idx, 1);
                return true;
            }
            idx++;
        }
        return false; // country is not found
    }

    static  getCountry(code : string) : Country {
        for (var c of this.countries) {
            if (c.Code == code) {
                 return c;
            }
        }

        return null; // Country is not found 
    } 

    static GetCountries(): Country[] {
          return  this.countries;
    }
}