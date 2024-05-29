import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';

export function Content() {
  let posts = [
    {
      id: 1,
      title: "The best part...",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/1200px-Roasted_coffee_beans.jpg",
    },
    {
      id: 2,
      title: "Lesson Learned",
      image_url: "https://tulipconnor.com/wp-content/uploads/2020/05/lessons-learned-i-passed-my-pmp-certification-exam-.png"
    },
    {
      id: 3,
      title: "Aliens?",
      image_url: "https://i.guim.co.uk/img/media/8f2fe6d43818cc0074c63707c1b44cfe27c77ab6/0_778_1814_1088/master/1814.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=3e0ced15ecae88d3e183a3c0ecaa98b5",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}