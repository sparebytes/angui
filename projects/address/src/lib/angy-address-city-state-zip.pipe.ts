import { Pipe, PipeTransform } from "@angular/core";
import { AngyAddressDisplayService } from "./angy-address-display.service";
import { AngyAddressLoose } from "./angy-address.models";

@Pipe({ name: "angyAddressCityStateZip" })
export class AngyAddressCityStateZipPipe implements PipeTransform {
  constructor(private angyAddressDisplayService: AngyAddressDisplayService) {}
  transform(address: AngyAddressLoose | null): string | null {
    return this.angyAddressDisplayService.getCityStateZip(address);
  }
}
