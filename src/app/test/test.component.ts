import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  @Input() title:any;

  public msg:string="我是test子组件";
  constructor() { }

  ngOnInit() {
  }

}
