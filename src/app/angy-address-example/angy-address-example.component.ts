import { Component } from "@angular/core";
import { AngyAddressLoose } from "projects/address/src/public_api";

@Component({
  selector: "app-angy-address-example",
  templateUrl: "./angy-address-example.component.html",
  styleUrls: ["./angy-address-example.component.scss"],
})
export class AngyAddressExampleComponent {
  constructor() {}

  address: AngyAddressLoose = {
    street1: "Street1",
    line2: "2 line",
    city: "Kenner",
    state: {
      stateCode: "LA",
    },
    zip: "70065",
  };
}
