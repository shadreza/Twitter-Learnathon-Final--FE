import { Component, Input, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostTime } from 'src/app/interfaces/postTime';

@Component({
  selector: 'app-post-c',
  templateUrl: './post-c.component.html',
  styleUrls: ['./post-c.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostCComponent implements OnInit {

  constructor() { }

  @Output() postChangedEvent = new EventEmitter<Post>();
  @Output() deletePostEvent = new EventEmitter<Post>();
  @Input() props!: Post;
  postId: string = ""
  postAuthor: string = ""
  postContent: string = ""
  postTag: string = ""
  postIsPublished: boolean = false
  postPublishedTime: Date = new Date()
  postLikes: Array<string> = []
  postRetweet: Array<string> = []

  currentTime: Date = new Date
  postLiveSince: number = 0
  postLiveSinceTime: PostTime = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
  }

  monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  timeString: string = ""

  likedThisPost: boolean = false
  currentUserId: string = "Shad Reza"


  baseBtnClass:string = "material-icons text-sm cursor-pointer hover:animate-pulse"
  addedLikeClass: string = ""
  addedDeleteClass: string = "text-red-500"
  newLikeClass: string = this.baseBtnClass + " " + this.addedLikeClass
  newDeleteClass: string = this.baseBtnClass + " " +  this.addedDeleteClass
  currentUserIndex: number = -1

  checkOwnerShipOfPost(): boolean {
    if(this.postAuthor === this.currentUserId) return true
    return false
  }

  sendChangedPostToParent(): void {
    this.postChangedEvent.emit({
      postId: this.postId,
      postAuthor: this.postAuthor,
      postContent: this.postContent,
      postTag: this.postTag,
      postIsPublished: this.postIsPublished,
      postPublishedTime: this.postPublishedTime,
      postLikes: this.postLikes,
      postRetweet: this.postRetweet,
    })
  }

  hasUserAlreadyLiked(): boolean {
    for (let i = 0; i < this.postLikes.length; i++) {
      if (this.postLikes[i] === this.currentUserId) {
        this.likedThisPost = true
        this.currentUserIndex = i
        return true
      }
    }
    this.likedThisPost = false
    this.currentUserIndex = -1
    return false
  }

  deleteBtnFunc(): void {
    if (this.checkOwnerShipOfPost()) {
      this.deletePostEvent.emit({
        postId: this.postId,
        postAuthor: this.postAuthor,
        postContent: this.postContent,
        postTag: this.postTag,
        postIsPublished: this.postIsPublished,
        postPublishedTime: this.postPublishedTime,
        postLikes: this.postLikes,
        postRetweet: this.postRetweet,
      })
    }
  }

  likeBtnFunc(): void {
    if (this.hasUserAlreadyLiked()) {
      this.addedLikeClass = "text-blue-400 hover:animate-none"
    } else {
      this.addedLikeClass = ""
    }
    this.newLikeClass = this.baseBtnClass + " " + this.addedLikeClass
  }

  userHitsLikeBtn(): void {
    if (this.currentUserIndex !== -1) {
      let newpostLikes: Array<string> = []
      for (let i = 0; i < this.postLikes.length; i++) {
        if (i === this.currentUserIndex) {
          continue
        } else {
          newpostLikes.push(this.postLikes[i])
        }
      }
      this.postLikes = newpostLikes
    } else {
      this.postLikes.push(this.currentUserId)
    }
    this.likeBtnFunc()
    this.sendChangedPostToParent()
  }

  ngOnInit(): void {
    this.postId = this.props.postId
    this.postAuthor = this.props.postAuthor
    this.postContent = this.props.postContent
    this.postTag = this.props.postTag
    this.postIsPublished = this.props.postIsPublished
    this.postPublishedTime = this.props.postPublishedTime
    this.postLikes = this.props.postLikes
    this.postRetweet = this.props.postRetweet

    this.likeBtnFunc()

    this.currentTime = new Date()
    timer(0, 1000).subscribe(() => {
      this.currentTime = new Date()
      this.postLiveSince = this.currentTime.getTime() - this.postPublishedTime.getTime()

      let factorToModAndDivideNext = (12 * 30 * 24 * 60 * 60) * 1000

      let diffYear = Math.floor(this.postLiveSince / factorToModAndDivideNext)

      let timeLeft = Math.floor(this.postLiveSince % factorToModAndDivideNext)
      factorToModAndDivideNext = factorToModAndDivideNext / 12

      let diffMonth = Math.floor(timeLeft / factorToModAndDivideNext)

      timeLeft = Math.floor(timeLeft % factorToModAndDivideNext)
      factorToModAndDivideNext = factorToModAndDivideNext / 30

      let diffDay = Math.floor(timeLeft / factorToModAndDivideNext)

      timeLeft = Math.floor(timeLeft % factorToModAndDivideNext)
      factorToModAndDivideNext = factorToModAndDivideNext / 24

      let diffHour = Math.floor(timeLeft / factorToModAndDivideNext)

      timeLeft = Math.floor(timeLeft % factorToModAndDivideNext)
      factorToModAndDivideNext = factorToModAndDivideNext / 60

      let diffMinute = Math.floor((timeLeft / factorToModAndDivideNext))



      this.postLiveSinceTime = {
        year: diffYear,
        month: diffMonth,
        day: diffDay,
        hour: diffHour,
        minute: diffMinute,
      }

      if (this.postLiveSinceTime.day >= 1) {
        this.timeString = `${this.monthList[this.postPublishedTime.getMonth()]} ${this.postPublishedTime.getDate()}`
        if(this.postPublishedTime.getFullYear() < this.currentTime.getFullYear()) this.timeString += ` - ${this.postPublishedTime.getFullYear()}`
      } else {
        if(this.postLiveSinceTime.hour) this.timeString = `${this.postLiveSinceTime.hour}h`
        else if (this.postLiveSinceTime.minute) this.timeString = `${this.postLiveSinceTime.minute}m`
        else this.timeString = `just now`
      }

    })
  }

}
