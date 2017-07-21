import { AfterViewInit, Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ArrayFormElementInterface } from '@ngx-form/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';
  form: FormGroup;
  simple: ArrayFormElementInterface = [
    {
      attributes: {
        autocomplete: 'off',

        // Material Design
        color: 'accent',
        floatPlaceholder: 'never',
        hideRequiredMarker: true,
        // end

        disabled: false,
        placeholder: 'Firstname',
        required: false,
        type: 'text'
      },
      destroy: {
        onCancelled: false,
        onChanged: false,
        onSubmitted: false
      },
      element: 'input',
      focus: true,
      key: 'firstname'
    }
  ];
  rows: Array<any>  = [
    {
      _id: 1,
      firstname: '',
      lastname: 'Rudnicki',
      age: 27,
      address: {
        street: 'Głuszyna',
        home: '270/5'
      },
      birthday: '2017-04-14',
      createdAt: '2019-01-01T15:01',
      month: '2017-04',
      time: '01:04',
      week: '2017-W13'
    }
  ];

  constructor(
    protected formBuilder: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef
  ) {
    this.form = this.formBuilder.group({});
  }

  created($event) {
    this.changeDetectorRef.detectChanges();
  }

  destroyed($event) {
    this.changeDetectorRef.detectChanges();
  }

  onSubmit($event) {
    console.log(this.form.get('firstname'))
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
}
