import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    { id: 1, title: "Understanding React Hooks" },
    { id: 2, title: "Introduction to JavaScript ES6 Features" },
  ];
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
