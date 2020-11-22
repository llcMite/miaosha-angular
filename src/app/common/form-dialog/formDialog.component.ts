import { Component, ViewChild, OnInit, Input } from "@angular/core";



@Component({
  selector: "form-dialog",
  templateUrl: "./formDialog.component.html",
  styleUrls: ["./formDialog.component.less"]
})
export class FormDialog implements OnInit {
  constructor() { }
  @Input() dialogConfig: any;
  @ViewChild('customForm') customForm
  ngOnInit() { }
  handleCancel() {
    this.dialogConfig.onCancel();
  }
  handleOk() {
    for (const i in this.dialogConfig.validateForm.controls) {
      this.dialogConfig.validateForm.controls[i].markAsDirty();
      this.dialogConfig.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.dialogConfig.validateForm.valid) {
      this.dialogConfig.onSubmit(this.dialogConfig.validateForm.value)
    }
  }
}
