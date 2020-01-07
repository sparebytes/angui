import { Component, Input } from "@angular/core";
import { AnguiAddressLoose, AnguiAddressStrict } from "../angui-address.models";

@Component({
  selector: "angui-address-block",
  templateUrl: "./angui-address-block.component.html",
  styleUrls: ["./angui-address-block.component.scss"],
})
export class AnguiAddressBlockComponent {
  constructor() {}

  @Input("address")
  set _address(value: AnguiAddressLoose | null) {
    if (value == null) {
      this.address = null;
    } else {
      this.address = AnguiAddressLoose.normalize(value);
    }
  }

  address?: AnguiAddressStrict | null;
}
