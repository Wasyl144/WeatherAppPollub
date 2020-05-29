import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-viewer',
  templateUrl: './comment-viewer.component.html',
  styleUrls: ['./comment-viewer.component.scss']
})
export class CommentViewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Nickname', 'E-Mail', 'Comment']
}
