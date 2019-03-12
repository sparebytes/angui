import { Component } from "@angular/core";

@Component({
  selector: "app-unimi-portal-example",
  templateUrl: "./unimi-portal-example.component.html",
  styleUrls: ["./unimi-portal-example.component.scss"],
})
export class UnimiPortalExampleComponent {
  constructor() {}
  foo = "bar"
  count = 0;
  toggle = false;
}
