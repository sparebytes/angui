import { InjectionToken, NgModuleFactoryLoader } from "@angular/core";
import { AnguiLazyDialogNamePathMap } from "./angui-lazy-dialog-name-path-map";

export const ANGUI_LAZY_DIALOG = new InjectionToken<AnguiLazyDialogNamePathMap>("ANGUI_LAZY_DIALOG");
export const ANGUI_LAZY_DIALOG_NG_MODULE_FACTORY_LOADER = new InjectionToken<NgModuleFactoryLoader>("ANGUI_LAZY_DIALOG_NG_MODULE_FACTORY_LOADER");

