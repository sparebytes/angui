import { AbstractControl } from "@angular/forms";

export type DoneWatchingControl = () => void;

export function watchControl(
  control: AbstractControl,
  listener: (control: AbstractControl, p: keyof any, value: any) => void,
): DoneWatchingControl {
  const _c = control as any;
  hijackControl(control);
  const lWrapper = (control: AbstractControl, p: keyof any, value: any) => listener(control, p, value);
  const subs = _c[hijackedControl];
  subs.add(lWrapper);
  return () => {
    subs.delete(lWrapper);
  };
}

const hijackedControl = Symbol();

function hijackControl(control: AbstractControl) {
  const _c = control as any;
  if (_c[hijackedControl]) {
    return;
  } else {
    const subs = (_c[hijackedControl] = new Set());

    hijackProperty(
      _c,
      "pristine",
      oldGetter => oldGetter,
      oldSetter => v => {
        if (oldSetter) oldSetter(v);
        broadcastPropertyChange(control, subs, "pristine", v);
      },
    );

    hijackProperty(
      _c,
      "touched",
      oldGetter => oldGetter,
      oldSetter => v => {
        if (oldSetter) oldSetter(v);
        broadcastPropertyChange(control, subs, "touched", v);
      },
    );
  }
}

function broadcastPropertyChange(control: AbstractControl, subs: Set<any>, p: keyof any, value: any) {
  subs.forEach(sub => sub(control, p, value));
}

function hijackProperty(
  o: any,
  p: keyof any,
  getFactory: (oldGetter: undefined | (() => any)) => undefined | (() => any),
  setFactory: (oldSetter: undefined | ((v: any) => void)) => undefined | ((v: any) => void),
) {
  const descriptor = resolveDescriptor(o, p);
  let oldGetter: undefined | (() => any);
  let oldSetter: undefined | ((v: any) => void);

  if (!descriptor || (!descriptor.get && !descriptor.set)) {
    let value = o[p];
    oldGetter = () => value;
    oldSetter = (v: any) => {
      value = p;
    };
  } else {
    if (descriptor.get) {
      oldGetter = descriptor.get.bind(o);
    } else {
      oldGetter = undefined;
    }

    if (descriptor && descriptor.set) {
      oldSetter = descriptor.set.bind(o);
    } else {
      oldSetter = undefined;
    }
  }

  const get = getFactory(oldGetter);
  const set = setFactory(oldSetter);
  Object.defineProperty(o, p, { get, set });
}

function resolveDescriptor(o: any, p: keyof any) {
  while (o !== null) {
    const descriptor = Object.getOwnPropertyDescriptor(o, p);
    if (descriptor != null) {
      return descriptor;
    }
    o = Object.getPrototypeOf(o);
  }
}
