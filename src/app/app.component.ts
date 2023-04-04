import { Component, ViewChild, AfterViewInit } from "@angular/core"
import { PostComponent } from "./post/post.component"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  title = "angular-practice"
  parentMessage: string = "Message changed"
  message!: string
  fromChildOutput!: string
  typedMessage: string = ""

  textValue: string = "Value is coming from component"

  msg: string = "Hello There"

  bool: boolean = true

  buttonClick() {
    console.log("Button Clicked!")
  }

  // use this with ngModule
  // onKeyUp($event: KeyboardEvent) {
  //   console.log(this.typedMessage)
  // }

  // onKeyUp(event: KeyboardEvent) {
  //   this.typedMessage = (event.target as HTMLInputElement).value
  //   if(event.code === 'Enter') {
  //     console.log(this.typedMessage)
  //   }
  // }

  onKeyUp(username: string) {
    console.log(username)
  }

  secondInput(e: KeyboardEvent) {
    if (e.code === "Enter") {
      console.log(this.textValue)
    }
  }

  imgUrl: string =
    "https://images.unsplash.com/photo-1527632392562-5ad5f7e698fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"

  @ViewChild(PostComponent) postComp!: PostComponent

  ngAfterViewInit() {
    this.message = this.postComp.childMessage
  }

  receiveMessage($event: string) {
    this.fromChildOutput = $event
  }

  constructor() {
    console.log(this.postComp)
  }

  // SECTION 2

  postTitle: string = ""
  checked: boolean = false
  imageUrl: string = "Post Image"
  typedImage: string = ""
  submitted: boolean = false
  moreDetails: string = ""

  changeChecked() {
    this.checked = !this.checked
    console.log(this.postTitle)
  }

  // submitImage() {
  //   this.imageUrl = this.typedImage
  //   this.submitted = true
  // }

  submitImage() {
    const img = new Image()
    img.onload = () => {
      this.submitted = true
    }
    img.onerror = () => {
      console.log("Invalid image URL")
      this.submitted = false
    }
    img.src = this.typedImage
    this.imageUrl = this.typedImage

    // Re-check image URL validity on submit
    this.submitted = false // Reset submitted flag
    setTimeout(() => {
      const newImg = new Image()
      newImg.onload = () => {
        this.submitted = true
      }
      newImg.onerror = () => {
        console.log("Invalid image URL")
        this.submitted = false
      }
      newImg.src = this.typedImage
    }, 0)
  }

  // imageError(event: ErrorEvent) {
  //   if (event.error) {
  //     this.submitted = false
  //     console.log(event)
  //   } else {
  //     this.submitted = true
  //   }
  // }
}
