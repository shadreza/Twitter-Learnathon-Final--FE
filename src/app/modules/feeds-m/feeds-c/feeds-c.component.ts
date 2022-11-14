import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { AllFeedsSService } from 'src/app/services/feeds/all-feeds-s.service';


@Component({
  selector: 'app-feeds-c',
  templateUrl: './feeds-c.component.html',
  styleUrls: ['./feeds-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeedsCComponent implements OnInit {

  constructor(private feeds: AllFeedsSService) { }

  feedsList: Array<Post> = [ ]

  editedPost: Post = {
    postId: "",
    postAuthor: "",
    postContent: "",
    postTag: "",
    postIsPublished: true,
    postPublishedTime: new Date(),
    postLikes: [],
    postRetweet: [],
  }

  deletingPost: Post = this.editedPost

  recieveEditedPost($event: any): void {
    this.editedPost = $event
    for (let i = 0; i < this.feedsList.length; i++) {
      if (this.feedsList[i].postId === this.editedPost.postId) {
        this.feeds.editPost(this.editedPost.postId, this.editedPost)
        break
      }
    }
  }

  recievedDeletePost($event: any): void {
    this.deletingPost = $event
    for (let i = 0; i < this.feedsList.length; i++) {
      if (this.feedsList[i].postId === this.deletingPost.postId) {
        this.feeds.deletePost(this.deletingPost.postId)
        break
      }
    }
  }

  ngOnInit(): void {

    this.feeds.currentFeeds.subscribe(feeds => this.feedsList = feeds)

  }

}
