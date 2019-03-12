import { Pipe, PipeTransform } from "@angular/core";
import { UnimiAddressDisplayService } from "./unimi-address-display.service";
import { UnimiAddressLoose } from "./unimi-address.models";

@Pipe({ name: "unimiAddressCityState" })
export class UnimiAddressCityStatePipe implements PipeTransform {
  constructor(private unimiAddressDisplayService: UnimiAddressDisplayService) {}
  transform(address: UnimiAddressLoose | null): string | null {
    return this.unimiAddressDisplayService.getCityState(address);
  }
}
