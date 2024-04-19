import { FormGroup } from '@angular/forms';

export const validatorFields = (form: FormGroup, field: string) => {
  return form.controls[field].errors && form.controls[field].touched;
};
