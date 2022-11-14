import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-feeds-c',
  templateUrl: './feeds-c.component.html',
  styleUrls: ['./feeds-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeedsCComponent implements OnInit {

  constructor() { }

  feedsList: Array<Post> = [
    {
      postId: "asd1e1d11",
      postAuthor: "Shad Reza",
      postContent: "How its done",
      postTag: "#work",
      postIsPublished: true,
      postPublishedTime: new Date(),
      postLikes: ["s1qsq", "asd31d", "gb34f"],
      postRetweet: ["s1qsddq123", "asdasdasf1331d", "gb1231434f"],
    },
    {
      postId: "asd1e1d12",
      postAuthor: "Masum",
      postContent: "How its done",
      postTag: "#work-force",
      postIsPublished: true,
      postPublishedTime: new Date('Thu May 12 2021'),
      postLikes: ["s1qsq", "asd31d", "gb3d4f"],
      postRetweet: ["s1qsaq123", "asdasdasf1331d", "gb1231434f"],
    },
    {
      postId: "asd1e1d13",
      postAuthor: "Mohim",
      postContent: "How its done",
      postTag: "#work",
      postIsPublished: true,
      postPublishedTime: new Date('Thu Dec 12 2001'),
      postLikes: ["s1qsq", "asd31d", "gb3d4f"],
      postRetweet: ["s1qsq123", "asdafsdasf1331d", "gb1231434f"],
    },
    {
      postId: "asd1e1d14",
      postAuthor: "Wasif",
      postContent: "How its done",
      postTag: "#cp",
      postIsPublished: true,
      postPublishedTime: new Date('Thu Jan 12 2022'),
      postLikes: ["as1qsq", "asd31d", "gb3d4f"],
      postRetweet: ["s1qs1q123", "asdasdasf1331d", "gb1231434f"],
    },
    {
      postId: "asd1e1d15",
      postAuthor: "Rakib",
      postContent: "How its done",
      postTag: "#tech",
      postIsPublished: false,
      postPublishedTime: new Date('Thu June 12 2022'),
      postLikes: ["s1qsq", "asad31d", "gb34f"],
      postRetweet: ["s1qsq123", "asdasdasf1331d", "gb1231434f"],
    },
  ]

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

  recieveEditedPost($event: any): void {
    this.editedPost = $event
    for (let i = 0; i < this.feedsList.length; i++) {
      if (this.feedsList[i].postId === this.editedPost.postId) {
        this.feedsList[i] = this.editedPost
        break
      }
    }
  }

  ngOnInit(): void {
  }

}
