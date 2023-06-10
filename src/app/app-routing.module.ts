import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BnewsComponent } from "./components/bnews/bnews.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { NewsContentComponent } from "./components/news-content/news-content.component";
// import { SportsComponent } from "./components/sports/sports.component";

const routes: Routes = [
  {
    path: "",
    component: NavBarComponent,
  },
  {
    path: "news",
    component: NewsContentComponent,
  },
  {
    path: "bnews",
    component: BnewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
