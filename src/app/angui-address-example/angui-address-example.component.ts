import { Component } from "@angular/core";
import { AnguiAddressLoose } from "@angui/address";

@Component({
  selector: "app-angui-address-example",
  templateUrl: "./angui-address-example.component.html",
  styleUrls: ["./angui-address-example.component.scss"],
})
export class AnguiAddressExampleComponent {
  constructor() {}

  address: AnguiAddressLoose = {
    street1: "Street1",
    line2: "2 line",
    city: "Kenner",
    state: {
      stateCode: "LA",
    },
    zip: "70065",
  };
}
