import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // title: string = "Todo App Usama jamil";

  constructor() {
    console.log(1234);
    // this.title = "Pakistan";

    // this.changeName("ansa");
  }

  // changeName(title: string): void {
  //   this.title = title;
  // }
}
