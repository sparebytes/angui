import { Injectable, InjectionToken } from "@angular/core";

export const ANGY_FORM_ERROR_MESSAGES = new InjectionToken<AngyFormErrorMessages>("ANGY_FORM_ERROR_MESSAGES");

export type AngyFormErrorMessageFn<T = any> = (fieldName: string | null, value: any, err: T) => string;
export type AngyFormErrorMessageHandler<T = any> = AngyFormErrorMessageFn<T> | string;

export interface AngyFormErrorMessages {
  [k: string]: AngyFormErrorMessageHandler<any>;
  required: AngyFormErrorMessageHandler<any>;
  numeric: AngyFormErrorMessageHandler<any>;
  email: AngyFormErrorMessageHandler<any>;
  pattern: AngyFormErrorMessageHandler<any>;
  min: AngyFormErrorMessageHandler<{ actual: string; min: number }>;
  max: AngyFormErrorMessageHandler<{ actual: string; max: number }>;
  minlength: AngyFormErrorMessageHandler<{ actualLength: number; requiredLength: number }>;
  maxlength: AngyFormErrorMessageHandler<{ actualLength: number; requiredLength: number }>;
}

@Injectable()
export class AngyFormErrorMessageDefaults implements AngyFormErrorMessages {
  [k: string]: AngyFormErrorMessageHandler<any>;

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
