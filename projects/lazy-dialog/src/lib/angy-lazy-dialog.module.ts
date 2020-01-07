import { ModuleWithProviders, NgModule, SystemJsNgModuleLoader } from "@angular/core";
import { AnguiLazyDialogNamePathMap } from "./angui-lazy-dialog-name-path-map";
import { ANGUI_LAZY_DIALOG, ANGUI_LAZY_DIALOG_NG_MODULE_FACTORY_LOADER } from "./angui-lazy-dialog-token";

@NgModule({
  imports: [],
  declarations: [],
  entryComponents: [],
  exports: [],
})
export class AnguiLazyDialogModule {
  static forRoot(namePathMap: AnguiLazyDialogNamePathMap): ModuleWithProviders {
    return {
      ngModule: AnguiLazyDialogModule,
      providers: [
        {
          provide: ANGUI_LAZY_DIALOG_NG_MODULE_FACTORY_LOADER,
          useClass: SystemJsNgModuleLoader,
        },
        {
          provide: ANGUI_LAZY_DIALOG,
          useValue: namePathMap,
          multi: true,
        },
      ],
    };
  }
  static forChild(namePathMap: AnguiLazyDialogNamePathMap): ModuleWithProviders {
    return {
      ngModule: AnguiLazyDialogModule,
      providers: [
        {
          provide: ANGUI_LAZY_DIALOG,
          useValue: namePathMap,
          multi: true,
        },
      ],
    };
  }
}
