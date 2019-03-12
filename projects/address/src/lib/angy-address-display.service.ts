import { Injectable } from "@angular/core";
import { UnimiAddressLoose } from "./unimi-address.models";

@Injectable({ providedIn: "root" })
export class UnimiAddressDisplayService {
  getCityStateZip(address: UnimiAddressLoose | null | undefined): string | null {
    if (address == null) {
      return null;
    } else {
      address = UnimiAddressLoose.normalize(address);
      const result = [
        address.cityName,
        address.cityName && (address.stateCode || address.zipCode) ? ", " : " ",
        address.stateCode,
        " ",
        address.zipCode,
      ]
        .join("")
        .replace(/ {2,}/g, " ")
        .trim();
      return result;
    }
  }

  getCityState(address: UnimiAddressLoose | null | undefined): string | null {
    if (address == null) {
      return null;
    } else {
      address = UnimiAddressLoose.normalize(address);
      const result = [address.cityName, address.cityName && address.stateCode ? ", " : " ", address.stateCode]
        .join("")
        .replace(/ {2,}/g, " ")
        .trim();
      return result;
    }
  }
}
