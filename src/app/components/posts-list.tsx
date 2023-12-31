import PostCard from './post-card'
// import { type Post } from '../types/posts'

const PostLists = ({ posts }: { posts: any }) => {
  return (
    <>
      {
        posts?.map((post: any) => {
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
              createdAt={post.created_at}
            />
          )
        })
      }
    </>
  )
}

export default PostLists
