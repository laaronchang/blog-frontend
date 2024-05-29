export function PostsNew() {
  return (    
    <div id="posts-new">
      <h1>New post</h1>
      <p id="green-paragraph">this is a special red paragraph</p>
      <form>
        <div>
          <label htmlFor="title"></label>
          Title: <input type="text" />
        </div>
        <button type="submit">Create post</button>
      </form>      
    </div>
    
  )
}