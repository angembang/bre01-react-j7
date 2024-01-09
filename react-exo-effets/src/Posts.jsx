/*import { useState, useEffect } from 'react';

const Posts = () => {
const [post, setPost] = useState({});

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => response.json())
        .then((data) => {
            setPost(data);
        });
}, []);
 return (
     <ul>
       {Posts.map((post) =>
       <li key={post.id}>
         <article>
           <h1>{post.title}</h1>
           <p>{post.body}</p>
         </article>
       </li>)}
       
     </ul>
     );

}
export default Posts;
*/

import { useState, useEffect } from 'react';
import './post.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []); 

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default Posts;