import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comments } from '../Comments';
import { CommentsService } from '../comments.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-comment-writer',
  templateUrl: './comment-writer.component.html',
  styleUrls: ['./comment-writer.component.scss']
})
export class CommentWriterComponent implements OnInit {

  constructor(private commentsService: CommentsService, private matBar: MatSnackBar) { }

  temp: Comments;
  id: number =0;

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
    if(this.formData.valid) { //sprawdzamy, czy formularz przeszedł walidacje
      this.temp = { //przypisujemy dane do naszej tymczasowej zmiennej
        id: this.id,
        nickname: this.formData.value.nickname,
        mail: this.formData.value.mail,
        comment: this.formData.value.comment,
      }
      this.commentsService.setData(this.temp); // używamy funkcji z naszego serwisu, aby zastosować nasze dane
      this.id++; //zwiększamy id o 1
      this.matBar.open("Comment be added :)","Dismiss", { // otwiera się okienko (pierwszy parametr: Informacja zwrotna, drugi parametr: parametr kliknięcia przycisku
        //, duration:sec - czas wyświetlania informacji)
        duration:2000,
      });
      return;
    }
    this.matBar.open("Check a form :/","Dismiss", {
      duration:2000,
    });
  }

  ngOnInit(): void {
  }

}
