import { Component, Input } from "@angular/core";
import { AngyAddressLoose, AngyAddressStrict } from "../angy-address.models";

@Component({
  selector: "angy-address-block",
  templateUrl: "./angy-address-block.component.html",
  styleUrls: ["./angy-address-block.component.scss"],
})
export class AngyAddressBlockComponent {
  constructor() {}

  @Input("address")
  set _address(value: AngyAddressLoose | null) {
    if (value == null) {
      this.address = null;
    } else {
      this.address = AngyAddressLoose.normalize(value);
    }
  }

  address?: AngyAddressStrict | null;
}
