import { Pipe, PipeTransform } from "@angular/core";
import { UnimiAddressLoose, UnimiAddressStrict } from "./unimi-address.models";

@Pipe({ name: "unimiNormalizeAddress" })
export class UnimiNormalizeAddressPipe implements PipeTransform {
  transform(address: UnimiAddressLoose | null): UnimiAddressStrict | null {
    if (address == null) {
      return null;
    } else {
      return UnimiAddressLoose.normalize(address);
    }
  }
}
