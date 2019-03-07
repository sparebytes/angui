import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { {{pascalCase name}}Component } from "./{{kebabCase name}}.component";

const exported = [{{pascalCase name}}Component];

@NgModule({
  imports: [CommonModule],
  declarations: [exported],
  exports: [exported],
})
export class {{pascalCase name}}Module {}
