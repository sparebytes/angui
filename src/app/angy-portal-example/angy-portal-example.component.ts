import { Component } from "@angular/core";

@Component({
  selector: "app-angy-portal-example",
  templateUrl: "./angy-portal-example.component.html",
  styleUrls: ["./angy-portal-example.component.scss"],
})
export class AngyPortalExampleComponent {
  constructor() {}
  foo = "bar"
  count = 0;
  toggle = false;
}
