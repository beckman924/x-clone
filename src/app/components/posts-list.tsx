import PostCard from './post-card'
import { type Post } from '../types/posts'

const PostLists = ({ posts }: { posts: Post[] | null }) => {
  return (
    <>
      {
        posts?.map((post) => {
          const {
            id,
            user,
            content
          } = post

          const {
            name: userFullName,
            user_name: userName,
            avatar_url: avatarUrl
          } = user

          return (
            <PostCard
              avatarUrl={avatarUrl}
              content={content}
              key={id}
              userFullName={userFullName}
              userName={userName}
            />
          )
        })
      }
    </>
  )
}

export default PostLists
