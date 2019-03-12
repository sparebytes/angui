import { Pipe, PipeTransform } from "@angular/core";
import { UnimiAddressDisplayService } from "./unimi-address-display.service";
import { UnimiAddressLoose } from "./unimi-address.models";

@Pipe({ name: "unimiAddressCityStateZip" })
export class UnimiAddressCityStateZipPipe implements PipeTransform {
  constructor(private unimiAddressDisplayService: UnimiAddressDisplayService) {}
  transform(address: UnimiAddressLoose | null): string | null {
    return this.unimiAddressDisplayService.getCityStateZip(address);
  }
}
