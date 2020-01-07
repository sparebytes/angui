import { Inject, Injectable, Injector, NgModuleFactory, NgModuleFactoryLoader, NgModuleRef, OnDestroy } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { AnguiLazyDialogNamePathMap } from "./angui-lazy-dialog-name-path-map";
import { ANGUI_LAZY_DIALOG, ANGUI_LAZY_DIALOG_NG_MODULE_FACTORY_LOADER } from "./angui-lazy-dialog-token";

export interface AnguiLazyOpenDialog {
  moduleRef: NgModuleRef<any>;
  dialogRef: MatDialogRef<any>;
  autoDestroy: boolean;
}

@Injectable()
export class AnguiLazyDialogService implements OnDestroy {
  constructor(
    @Inject(ANGUI_LAZY_DIALOG) private anguiLazyDialogNamePathMaps: AnguiLazyDialogNamePathMap[],
    @Inject(ANGUI_LAZY_DIALOG_NG_MODULE_FACTORY_LOADER) private ngModuleFactoryLoader: NgModuleFactoryLoader,
    private injector: Injector,
  ) {}

  private openDialogs: AnguiLazyOpenDialog[] = [];

  ngOnDestroy() {
    const openDialogs = this.openDialogs;
    this.openDialogs = [];
    const errors: any[] = [];
    for (const openDialog of openDialogs) {
      if (openDialog.autoDestroy) {
        try {
          openDialog.dialogRef.close();
          // openDialog.moduleRef.destroy();
        } catch (error) {
          errors.push(error);
        }
      }
    }
    if (errors.length > 0) {
      throw errors;
    }
  }

  getModulePath(name: string): string {
    let modulePath: string | undefined;
    for (const anguiLazyDialogNamePathMap of this.anguiLazyDialogNamePathMaps) {
      modulePath = anguiLazyDialogNamePathMap[name];
      if (modulePath != null && modulePath !== "") break;
    }

    if (modulePath == null || modulePath === "") {
      console.log("Path Maps Available", this.anguiLazyDialogNamePathMaps);
      throw new Error(`AnguiLazyDialogService.getModulePath("${name}"): Path is not provided in @Inject(ANGUI_LAZY_DIALOG)`);
    }
    return modulePath;
  }

  async openDialog<O, C>(options: {
    module: string;
    component: string;
    autoDestroy?: boolean | null;
    config?: MatDialogConfig<O>;
  }): Promise<AnguiLazyOpenDialog> {
    const autoDestroy = options.autoDestroy === true;
    const modulePath = this.getModulePath(options.module);
    const moduleFactory: NgModuleFactory<any> = await this.ngModuleFactoryLoader.load(modulePath);
    const moduleRef: NgModuleRef<any> = moduleFactory.create(this.injector);
    try {
      const DialogComponent = (moduleFactory.moduleType as any)[options.component];
      if (DialogComponent == null) {
        throw new Error(
          `AnguiLazyDialogService.openDialog(): "${options.component}" is not a static property on the module named "${
            options.module
          }".`,
        );
      }
      const dialog = moduleRef.injector.get(MatDialog);
      const dialogRef = dialog.open(DialogComponent, options.config);
      if (autoDestroy === true) {
        dialogRef.afterClosed().subscribe(() => {
          moduleRef.destroy();
        });
      }
      const result = {
        moduleRef,
        dialogRef,
        autoDestroy: autoDestroy === true,
      };
      this.openDialogs.push(result);
      return result;
    } catch (error) {
      if (autoDestroy !== false) {
        moduleRef.destroy();
      }
      throw error;
    }
  }
}
