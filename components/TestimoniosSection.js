import React from "react";

export default function Testimonios() {
  const config = {
    username: "team_marcelabarros",
    posts: [
      {
        0: {
          imageLink:
            "https://instagram.ftuc2-1.fna.fbcdn.net/v/t51.2885-15/e35/103855201_884913195338930_1250017299622911057_n.jpg?_nc_ht=instagram.ftuc2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oaCiieN8iLQAX-jQHjB&tp=18&oh=973b0c8a34676b4ba17c8d36dc12c8d3&oe=5FDBDDD6",
          postLink: "https://www.instagram.com/p/CGWPaQcJJ4X/",
        },
      },
      {
        1: {
          imageLink:
            "https://instagram.ftuc2-1.fna.fbcdn.net/v/t51.2885-15/e35/121271178_367680987751786_3351194671771683052_n.jpg?_nc_ht=instagram.ftuc2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=XrGPw0OZxS0AX8kd2Vi&tp=18&oh=a1e1f4a68d271bef452428f84984581f&oe=5FDC546E",
          postLink: "https://www.instagram.com/p/B6RQvJSp9YO/",
        },
      },
      {
        2: {
          imageLink:
            "https://instagram.ftuc2-1.fna.fbcdn.net/v/t51.2885-15/e35/123207959_670956720473284_4621359868573678502_n.jpg?_nc_ht=instagram.ftuc2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=d0-zf2SJJ3IAX82AEN6&tp=18&oh=51fd469ca94ed2be65dbdcd2a031222c&oe=5FDF2D6F",
          postLink: "https://www.instagram.com/p/CG_P2ezpSyR/",
        },
      },
      {
        3: {
          imageLink:
            "https://instagram.ftuc2-1.fna.fbcdn.net/v/t51.2885-15/e35/106279280_583550822550463_7894120481717226872_n.jpg?_nc_ht=instagram.ftuc2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ov1PxzjfdZ4AX-AA8Qw&tp=18&oh=55b10d701063e6e7c4ea25fc3b4d5092&oe=5FDBF1B5",
          postLink: "https://www.instagram.com/p/CCPONsEJo4j/",
        },
      },
      {
        4: {
          imageLink:
            "https://instagram.ftuc2-1.fna.fbcdn.net/v/t51.2885-15/e35/75538123_151384906146623_9093916347243486026_n.jpg?_nc_ht=instagram.ftuc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=iYIg8UfRLD0AX-Afs0-&tp=18&oh=06534141b52b5136a60575c104bfa48d&oe=5FDDBE5D",
          postLink: "https://www.instagram.com/p/B5WcWIaJGV3/",
        },
      },
      {
        5: {
          imageLink:
            "https://instagram.ftuc2-1.fna.fbcdn.net/v/t51.2885-15/e35/53593533_530965534094928_726468105350909896_n.jpg?_nc_ht=instagram.ftuc2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=EmeqVyCzPTQAX9oXugs&tp=18&oh=8058832c0fb3479ebef39856310b0563&oe=5FDDC276",
          postLink: "https://www.instagram.com/p/ButeValACsm/",
        },
      },
    ],
  };
  return (
    <section id="testimonios">
      <h2>VOS ELEGÍS CÓMO TRANSFORMAR TU FÍSICO</h2>
      <h4>Entrenamientos personalizados para cada objetivo</h4>
      <div className="posts-container">
        {config.posts.map((post, index) => {
          return (
            <InstagramPost
              key={index}
              username={config.username}
              imageLink={post[index].imageLink}
              postLink={post[index].postLink}
            />
          );
        })}
      </div>
    </section>
  );
}

export function InstagramPost({ username, imageLink, postLink }) {
  return (
    <div className="post-container">
      <a target="_blank" rel="noreferrer" href={postLink}>
        Ver en perfil
      </a>
      <img src={imageLink} key={imageLink} alt={imageLink} />
      <span>@{username}</span>
    </div>
  );
}
