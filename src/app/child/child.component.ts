import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() message: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.message) 
  }

  sendMessage() {
    this.messageEvent.emit('Hello Parent');
  }

}
