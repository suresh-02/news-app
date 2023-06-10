import { Component } from "@angular/core";
import { NewsApiServiceService } from "src/app/service/news-api-service.service";

@Component({
  selector: "app-bnews",
  templateUrl: "./bnews.component.html",
  styleUrls: ["./bnews.component.scss"],
})
export class BnewsComponent {
  page = 1;
  dataDisplay: any = [];
  constructor(private service: NewsApiServiceService) {}
  ngOnInit(): void {
    this.getData(1);
  }

  getData(e?: any) {
    this.page = e;
    this.service.buinessHead(this.page).subscribe((event) => {
      console.log(event);
      this.dataDisplay = [...event.articles];
    });
  }
}
