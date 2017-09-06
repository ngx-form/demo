// external
import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // added
import { FormElementInterface } from '@ngx-form/interface'; // added

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  // added
  form: FormGroup;
  // added
  simple: FormElementInterface =
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
    };
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

  // added
  constructor(
    protected formBuilder: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef
  ) {
    this.form = this.formBuilder.group({});
  }

  // added
  created($event) {
    this.changeDetectorRef.detectChanges();
  }

  // added
  destroyed($event) {
    this.changeDetectorRef.detectChanges();
  }

  // added
  onSubmit($event) {
    console.log(this.form.get('firstname'))
  }

  // added
  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
}
