import { Injectable, InjectionToken } from "@angular/core";

export const ANGUI_FORM_ERROR_MESSAGES = new InjectionToken<AnguiFormErrorMessages>("ANGUI_FORM_ERROR_MESSAGES");

export type AnguiFormErrorMessageFn<T = any> = (fieldName: string | null, value: any, err: T) => string;
export type AnguiFormErrorMessageHandler<T = any> = AnguiFormErrorMessageFn<T> | string;

export interface AnguiFormErrorMessages {
  [k: string]: AnguiFormErrorMessageHandler<any>;
  required: AnguiFormErrorMessageHandler<any>;
  numeric: AnguiFormErrorMessageHandler<any>;
  email: AnguiFormErrorMessageHandler<any>;
  pattern: AnguiFormErrorMessageHandler<any>;
  min: AnguiFormErrorMessageHandler<{ actual: string; min: number }>;
  max: AnguiFormErrorMessageHandler<{ actual: string; max: number }>;
  minlength: AnguiFormErrorMessageHandler<{ actualLength: number; requiredLength: number }>;
  maxlength: AnguiFormErrorMessageHandler<{ actualLength: number; requiredLength: number }>;
}

@Injectable()
export class AnguiFormErrorMessageDefaults implements AnguiFormErrorMessages {
  [k: string]: AnguiFormErrorMessageHandler<any>;

  required(fieldName: string | null, value: any) {
    return `required`;
  }

  numeric(fieldName: string | null, value: any) {
    return `must be numeric`;
  }

  email(fieldName: string | null, value: any) {
    return `invalid email address`;
  }

  pattern(fieldName: string | null, value: any) {
    return `invalid format`;
  }

  min(fieldName: string | null, value: any, err: { actual: string; min: number }) {
    return `must be greater than ${err.min}.`;
  }

  max(fieldName: string | null, value: any, err: { actual: string; max: number }) {
    return `must be less than ${err.max}`;
  }

  minlength(fieldName: string | null, value: any, err: { actualLength: number; requiredLength: number }) {
    return `too short`;
  }

  maxlength(fieldName: string | null, value: any, err: { actualLength: number; requiredLength: number }) {
    return `too long`;
  }
}
