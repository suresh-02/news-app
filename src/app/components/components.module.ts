import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzPaginationModule } from "ng-zorro-antd/pagination";

import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NewsContentComponent } from "./news-content/news-content.component";
import { BnewsComponent } from "./bnews/bnews.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [NavBarComponent, NewsContentComponent, BnewsComponent, PageHeaderComponent],
  imports: [CommonModule, NzPaginationModule, NzButtonModule],
})
export class ComponentsModule {}
