import { Pipe, PipeTransform } from "@angular/core";
import { AnguiAddressLoose, AnguiAddressStrict } from "./angui-address.models";

@Pipe({ name: "anguiNormalizeAddress" })
export class AnguiNormalizeAddressPipe implements PipeTransform {
  transform(address: AnguiAddressLoose | null): AnguiAddressStrict | null {
    if (address == null) {
      return null;
    } else {
      return AnguiAddressLoose.normalize(address);
    }
  }
}
