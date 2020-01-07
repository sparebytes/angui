# Angui Todos

## Form Error

- [ ] AbstractControl touched observable monkey-patch.
  The `[angui-form-error]` directive doesn't know right away when a field has been touched. We could hijack the touched property to emit to an observable whenever it changes. [GitHub Comment](https://github.com/angular/angular/issues/10887#issuecomment-351123702)
