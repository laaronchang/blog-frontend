export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <p>test sentence</p>
      {props.posts.map(post => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image_url} alt="" />
          <button>More info</button>
        </div>
      ))}

    </div>
  );
}