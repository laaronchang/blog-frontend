function Header() {

  return (
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
      )
    }

function NewPost() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <p id="first-post">Title: 
      <input type="text" id="myText" value=""></input></p>
      <p>Body: 
      <input type="text" id="myText" value=""></input></p>
      <br />
      <button onclick="myFunction()">Submit</button>
    </div>
      )
    }

function PostsIndex(){
  return (
      <div id="posts-index">
        <h1>All posts</h1>
      <div>
        <h2 id="folgers">The best part...</h2>
        <p>Of waking up, is Folgers in your cup.</p>
      </div>

      <div>
        <h2 id="lessons">Lesson Learned</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </div>

      <div>
        <h2 id="aliens">Aliens?</h2>
        <p>Elon Musk humorously admitted to being an alien, generating buzz and curiosity. He further explored the concept of humans giving meaning to AI, drawing parallels to the relationship between the limbic system and cortex in the human brain.</p>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  )
}


function App() {
  return (
    <div>
      <Header />
      <PostsIndex />
      <Footer />
    </div>
  );
}

export default App;