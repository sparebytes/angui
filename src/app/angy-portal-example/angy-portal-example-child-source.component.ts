import { Component } from "@angular/core";

@Component({
  selector: "app-angy-portal-example-child-source",
  template: `<div class="green">This text should be green.</div>`,
  styles: [`.green { color: green }`]
})
export class AngyPortalExampleChildSourceComponent {
  constructor() {}
}
