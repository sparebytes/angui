import { Component } from "@angular/core";

@Component({
  selector: "app-angui-portal-example-child-source",
  template: `<div class="green">This text should be green.</div>`,
  styles: [`.green { color: green }`]
})
export class AnguiPortalExampleChildSourceComponent {
  constructor() {}
}
