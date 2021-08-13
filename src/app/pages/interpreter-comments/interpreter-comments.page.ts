import { Component, OnInit } from '@angular/core';
import { Comments } from '../../shared/interfaces';
import { CommentsService } from '../../services/comments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interpreter-comments',
  templateUrl: './interpreter-comments.page.html',
  styleUrls: ['./interpreter-comments.page.scss'],
})
export class InterpreterCommentsPage implements OnInit {

  id: string

  constructor(private commentsService: CommentsService,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id

    this.loadData()
  }

  comments: Comments[] = []

  ngOnInit() {
  }

  loadData() {
    this.commentsService.getCommentsById(this.id).then(

      res => {
        let list: Comments[] = []
        res.forEach(t => {
          console.log(t.data());
          this.comments.push({
            ...t.data() as Comments
          })
        })

      }
    )
  }
}
