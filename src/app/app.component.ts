import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';
  currjson: any = [];
  countriesByCurrency: any = [];
  country: any = [];
  countries: any = [];
  currencies: any = [];

  base = 'USD';
  cont2 = 'USD';
  result: string = '1';


  changeBase(value: any) {
    this.base = value;
  }

  tocountry(value: any) {
    this.cont2 = value;
  }

  constructor( public service: CountriesService) {}

  convert() {
    this.service.getCurrency(this.base).subscribe( data => {
      this.currjson = JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson);

      if(this.cont2 == 'USD') {
        this.result = this.currjson.rates.USD;
      }

      if(this.cont2 == 'EUR') {
        this.result = this.currjson.rates.EUR;
      }

      if(this.cont2 == 'GBP') {
        this.result = this.currjson.rates.GBP;
      }
    })
  }

  getCountries(currency: any) {
    this.countries = [];
    this.service.getCountriesByCurrency(currency).subscribe( data => {
      this.countriesByCurrency = data;
      for (let i=0; i<this.countriesByCurrency.length; i++) {
        // console.log(this.countriesByCurrency[i].name.common)
        if (this.countriesByCurrency[i].name.common) {
          this.countries.push(this.countriesByCurrency[i].name.common)
        }
      }
    })
  }

  getCurrencies(country: any) {
    this.currencies = [];
    this.service.getCurrenciesByCountry(country).subscribe( data => {
      this.country.currencies = data;
      console.log(this.country.currencies[0].currencies.name)
      //this.currencies.push(this.country.currencies[0].currencies.name)
    })
  }


}
