export interface User {
  userId: string
  userApplicationId: string
  userName: string
  userRole: string
  userJoiningTime: Date
  userFollowers: Array<User>
  userFollowedBy: Array<User>
}
