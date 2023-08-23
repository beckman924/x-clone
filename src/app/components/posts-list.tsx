import PostCard from './post-card'

const PostLists = ({ posts }) => {
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
