import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { formatDate } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class NewsApiServiceService {
  apiKey = "81cbeb8e469a4e84a7de677232b9c155";
  // page = 1;
  Tdate = formatDate(
    `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
      new Date().getDate() - 1
    }`,
    "yyyy-MM-dd",
    "en-US"
  );

  Bdate = formatDate(
    `${new Date().getFullYear()}-${new Date().getMonth() + 1}`,
    "yyyy-MM-dd",
    "en-US"
  );

  constructor(private http: HttpClient) {}
  apiUrl = `https://newsapi.org/v2/everything`;
  massHeading(page: Number): Observable<any> {
    console.log(this.Tdate);
    console.log(this.Bdate);
    console.log("hello");
    return this.http.get(
      // `${this.apiUrl}/?q=tesla&from=${this.Tdate}&sortBy=publishedAt&apiKey=${this.apiKey}&page=${page}&pageSize=12`81cbeb8e469a4e84a7de677232b9c155
      `${this.apiUrl}?q=tesla&from=${this.Tdate}&sortBy=publishedAt&apiKey=${this.apiKey}&oage=${page}&pageSize=12`
      // `https://newsapi.org/v2/top-headlines?country=us&category=business&${this.apiKey}`
    );
  }

  buinessHead(page: Number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}?q=apple&from=${this.Bdate}&sortBy=popularity&apiKey=${this.apiKey}&page=${page}&pageSize=12`
    );
  }

  sportsHead(page: Number): Observable<any> {
    return this.http.get(
      `
      https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${this.apiKey}`
    );
  }
}

// https://newsapi.org/v2/everything?q=apple&from=2023-03-16&to=2023-03-16&sortBy=popularity&apiKey=API_KE
