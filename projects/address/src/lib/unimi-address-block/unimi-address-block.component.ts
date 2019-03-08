import { Component, Input } from "@angular/core";
import { UnimiAddressLoose, UnimiAddressStrict } from "../unimi-address.models";

@Component({
  selector: "unimi-address-block",
  templateUrl: "./unimi-address-block.component.html",
  styleUrls: ["./unimi-address-block.component.scss"],
})
export class UnimiAddressBlockComponent {
  constructor() {}

  @Input("address")
  set _address(value: UnimiAddressLoose | null) {
    if (value == null) {
      this.address = null;
    } else {
      this.address = UnimiAddressLoose.normalize(value);
    }
  }

  address?: UnimiAddressStrict | null;
}
