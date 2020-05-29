import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comments } from '../Comments';

@Component({
  selector: 'app-comment-writer',
  templateUrl: './comment-writer.component.html',
  styleUrls: ['./comment-writer.component.scss']
})
export class CommentWriterComponent implements OnInit {

  constructor() { }

  formData = new FormGroup({
    'nickname': new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      ]),
    'mail': new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    'isAccept': new FormControl('', [
      Validators.requiredTrue,
    ]),
    'comment': new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(250),
    ]),
  })

  onSubmit() {
    console.log(this.formData.value)
  }
  ngOnInit(): void {
  }

}
