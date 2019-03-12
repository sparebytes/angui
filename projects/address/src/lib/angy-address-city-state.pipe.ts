import { Pipe, PipeTransform } from "@angular/core";
import { AngyAddressDisplayService } from "./angy-address-display.service";
import { AngyAddressLoose } from "./angy-address.models";

@Pipe({ name: "angyAddressCityState" })
export class AngyAddressCityStatePipe implements PipeTransform {
  constructor(private angyAddressDisplayService: AngyAddressDisplayService) {}
  transform(address: AngyAddressLoose | null): string | null {
    return this.angyAddressDisplayService.getCityState(address);
  }
}
