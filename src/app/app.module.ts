import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AnguiFormErrorModule } from "@angui/form-error";
import { AnguiLazyDialogModule } from "@angui/lazy-dialog";
import { AppMaterialModule } from "./app-material-module";
import { AppComponent } from "./app.component";

const routes = [
  { path: "angui-address", loadChildren: () => import('./angui-address-example/angui-address-example.module').then(m => m.AnguiAddressExampleModule) },
  {
    path: "angui-form-error",
    loadChildren: () => import('./angui-form-error-example/angui-form-error-example.module').then(m => m.AnguiFormErrorExampleModule),
  },
  { path: "angui-portal", loadChildren: () => import('./angui-portal-example/angui-portal-example.module').then(m => m.AnguiPortalExampleModule) },
  {
    path: "lazy-dialog-trigger",
    loadChildren: () => import('./lazy-dialog-trigger-example/lazy-dialog-trigger-example.module').then(m => m.LazyDialogTriggerExampleModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AnguiFormErrorModule.forRoot(),
    AnguiLazyDialogModule.forRoot({
      LazyDialogExampleModule: "src/app/lazy-dialog-example/lazy-dialog-example.module#LazyDialogExampleModule",
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
