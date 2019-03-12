import { Component } from "@angular/core";
import { UnimiAddressLoose } from "projects/address/src/public_api";

@Component({
  selector: "app-unimi-address-example",
  templateUrl: "./unimi-address-example.component.html",
  styleUrls: ["./unimi-address-example.component.scss"],
})
export class UnimiAddressExampleComponent {
  constructor() {}

  address: UnimiAddressLoose = {
    street1: "Street1",
    line2: "2 line",
    city: "Kenner",
    state: {
      stateCode: "LA",
    },
    zip: "70065",
  };
}
