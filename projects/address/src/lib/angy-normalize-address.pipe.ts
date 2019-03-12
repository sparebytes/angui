import { Pipe, PipeTransform } from "@angular/core";
import { AngyAddressLoose, AngyAddressStrict } from "./angy-address.models";

@Pipe({ name: "angyNormalizeAddress" })
export class AngyNormalizeAddressPipe implements PipeTransform {
  transform(address: AngyAddressLoose | null): AngyAddressStrict | null {
    if (address == null) {
      return null;
    } else {
      return AngyAddressLoose.normalize(address);
    }
  }
}
