import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http : HttpClient) { }


  getCurrency (country1: string) {
    let url = 'https://api.exchangerate.host/latest?base=' + country1
    return this.http.get(url)
  }

  getCountriesByCurrency(currency: any) {
    let url = 'https://restcountries.com/v3.1/currency/' + currency
    return this.http.get(url)
  }

  getCurrenciesByCountry(country: any) {
    let url = 'https://restcountries.com/v3.1/name/' + country
    return this.http.get(url)
  }
}
