import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { MatTableDataSource } from '@angular/material/table';
import { Comments } from '../Comments'

@Component({
  selector: 'app-comment-viewer',
  templateUrl: './comment-viewer.component.html',
  styleUrls: ['./comment-viewer.component.scss']
})
export class CommentViewerComponent implements OnInit {

  constructor(private commentsService:CommentsService) { }

  dataSource = new MatTableDataSource<Comments>();
  buffer:Comments[] = [];

  ngOnInit(): void {
    this.commentsService.getData().subscribe(info => {
      if (info.nickname != '') { //aby nie dodawało do naszej tablicy pustego elementu
        this.buffer.push(info);
        this.dataSource.data=this.buffer;// "pushujemy" dane do naszej tablicy
        console.log(this.dataSource);
      }
    })
  }

  displayedColumns: string[] = ['Nickname', 'E-Mail', 'Comment']
}
