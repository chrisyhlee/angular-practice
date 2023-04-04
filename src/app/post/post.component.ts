import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  title: string = "List of Posts"
  messagePost: string = "Message from post component"

  childMessage: string = "From Child Component"

  outputChildMessage:string = "Message from child via output and eventemitter"

  // use @Input to access data from parent component (app.component.html) that is being passed into the component call
  @Input() parentMessage!: string

  @Output() messageEvent = new EventEmitter<string>()

  ngOnInit(): void {}

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage)
  }

  constructor() {}
}
