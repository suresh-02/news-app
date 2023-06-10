import { Component } from "@angular/core";
import { NewsApiServiceService } from "src/app/service/news-api-service.service";

@Component({
  selector: "app-news-content",
  templateUrl: "./news-content.component.html",
  styleUrls: ["./news-content.component.scss"],
})
export class NewsContentComponent {
  page = 1;
  dataDisplay: any = [];
  constructor(private service: NewsApiServiceService) {}
  ngOnInit(): void {
    this.getData(1);
  }

  getData(e?: any) {
    this.page = e;
    this.service.massHeading(this.page).subscribe((event) => {
      console.log(event);
      this.dataDisplay = [...event.articles];
    });
  }
}
