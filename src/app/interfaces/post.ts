export interface Post {
  postId: string
  postAuthor: string
  postContent: string
  postTag: string
  postIsPublished: boolean
  postPublishedTime: Date
  postLikes: Array<string>               
  postRetweet: Array<string>
}
