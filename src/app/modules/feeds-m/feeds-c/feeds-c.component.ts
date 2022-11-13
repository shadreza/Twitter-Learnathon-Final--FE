import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
      postId: "asd1e1d1",
      postAuthor: "Shad Reza",
      postContent: "How its done",
      postTag: "#work",
      postIsPublished: true,
      postPublishedTime: new Date(),
      postLikes: ["s1qsq", "asd31d", "gb34f"],
      postRetweet: ["s1qsddq123", "asdasdasf1331d", "gb1231434f"],
    },
    {
      postId: "asd1e1d1",
      postAuthor: "Masum",
      postContent: "How its done",
      postTag: "#work-force",
      postIsPublished: true,
      postPublishedTime: new Date(),
      postLikes: ["s1qsq", "asd31d", "gb3d4f"],
      postRetweet: ["s1qsaq123", "asdasdasf1331d", "gb1231434f"],
    },
    {
      postId: "asd1e1d1",
      postAuthor: "Mohim",
      postContent: "How its done",
      postTag: "#work",
      postIsPublished: true,
      postPublishedTime: new Date(),
      postLikes: ["s1qsq", "asd31d", "gb3d4f"],
      postRetweet: ["s1qsq123", "asdafsdasf1331d", "gb1231434f"],
    },
    {
      postId: "asd1e1d1",
      postAuthor: "Wasif",
      postContent: "How its done",
      postTag: "#cp",
      postIsPublished: true,
      postPublishedTime: new Date(),
      postLikes: ["as1qsq", "asd31d", "gb3d4f"],
      postRetweet: ["s1qs1q123", "asdasdasf1331d", "gb1231434f"],
    },
    {
      postId: "asd1e1d1",
      postAuthor: "Rakib",
      postContent: "How its done",
      postTag: "#tech",
      postIsPublished: false,
      postPublishedTime: new Date(),
      postLikes: ["s1qsq", "asad31d", "gb34f"],
      postRetweet: ["s1qsq123", "asdasdasf1331d", "gb1231434f"],
    },
  ]

  ngOnInit(): void {
  }

}
