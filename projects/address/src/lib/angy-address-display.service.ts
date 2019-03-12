import { Injectable } from "@angular/core";
import { AngyAddressLoose } from "./angy-address.models";

@Injectable({ providedIn: "root" })
export class AngyAddressDisplayService {
  getCityStateZip(address: AngyAddressLoose | null | undefined): string | null {
    if (address == null) {
      return null;
    } else {
      address = AngyAddressLoose.normalize(address);
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

  getCityState(address: AngyAddressLoose | null | undefined): string | null {
    if (address == null) {
      return null;
    } else {
      address = AngyAddressLoose.normalize(address);
      const result = [address.cityName, address.cityName && address.stateCode ? ", " : " ", address.stateCode]
        .join("")
        .replace(/ {2,}/g, " ")
        .trim();
      return result;
    }
  }
}
