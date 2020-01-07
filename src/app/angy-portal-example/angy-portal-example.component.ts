import { Component } from "@angular/core";

@Component({
  selector: "app-angui-portal-example",
  templateUrl: "./angui-portal-example.component.html",
  styleUrls: ["./angui-portal-example.component.scss"],
})
export class AnguiPortalExampleComponent {
  constructor() {}
  foo = "bar"
  count = 0;
  toggle = false;
}
