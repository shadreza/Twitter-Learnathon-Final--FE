import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from 'src/app/interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class AllFeedsSService {

  static voidPost: Post = {
    postId: "",
    postAuthor: "",
    postContent: "",
    postTag: "",
    postIsPublished: true,
    postPublishedTime: new Date(),
    postLikes: [],
    postRetweet: [],
  }

  static feedsList: Array<Post> = [
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
    }
  ]

  private feedsSource = new BehaviorSubject<Array<Post>>(AllFeedsSService.feedsList)

  currentFeeds = this.feedsSource.asObservable()

  addPost(post: Post): void {
    AllFeedsSService.feedsList.push(post)
    this.feedsSource.next(AllFeedsSService.feedsList)
  }

  deletePost(postId: string): void {
    let newFeedsList: Array<Post> = []
    for (let i = 0; i < AllFeedsSService.feedsList.length; i++) {
      if (AllFeedsSService.feedsList[i].postId !== postId) {
        newFeedsList.push(AllFeedsSService.feedsList[i])
      }
    }
    AllFeedsSService.feedsList = newFeedsList
    this.feedsSource.next(AllFeedsSService.feedsList)
  }

  editPost(postId: string, post: Post): void {
    for (let i = 0; i < AllFeedsSService.feedsList.length; i++) {
      if (AllFeedsSService.feedsList[i].postId === postId) {
        AllFeedsSService.feedsList[i] = post
        break
      }
    }
    this.feedsSource.next(AllFeedsSService.feedsList)
  }

  constructor() { }
}
