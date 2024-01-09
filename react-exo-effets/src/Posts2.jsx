import { useState, useEffect } from 'react';
import './post.css'

const Posts2 = () => {
    const [posts, setPosts] = useState([]);
    const [showContentPost, setShowContentPost] = useState();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);
    const handleSeeMore = () => {

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                // Mise à jour de  l'état pour stocker l'id du post sélectionné
                setShowContentPost(data);
                // Récupérer les commentaires des posts
                fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
                    .then((response) => response.json())
                    .then((data) => {
                        // Mise à jour de l'état pour stocker les commentaires
                        setComments(data);
                    });

            })



    }
    const handleClose = () => {
        // Réinitialisation de l'état pour revenir à la liste des articles
        setShowContentPost();
        setComments([]);
    }
    if (showContentPost) {
        // Affiche uniquement le post sélectionné
        return (
            <article>
              <h1>{showContentPost.title}</h1>
              <p>{showContentPost.body}</p>
              <div>
                  <h2>Commentaires :</h2>
                      <ol>
                          {comments.map((comment, i) =>
                          <li key={i}>
                          <p>{comment.body}</p>
                          </li>
                         )}
                      </ol>
              </div>
              <button onClick={handleClose}>Retour</button>
        </article>
        );
    }
    else {
        // Affiche tous les posts
        return (
            <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={handleSeeMore}>Lire l'article</button>
          </article>
        </li>
      ))}
    </ul>
        );
    }

};

export default Posts2;
