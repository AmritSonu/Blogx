import Styles from "./BlogBox.module.css";
const Trending = [
  {
    title: "Exploring Nature",
    description: "Discover the beauty of the great outdoors.",
    image: "https://source.unsplash.com/featured/?nature",
  },
  {
    title: "React",
    description: "Discover the beauty of the great outdoors.",
    image: "https://source.unsplash.com/featured/?computer",
  },
  {
    title: "Exploring LifeStyle",
    description: "Discover the beauty of the great outdoors.",
    image: "https://source.unsplash.com/featured/?lifeStyle",
  },
  
];
export default function TrendingBox() {
  return (
    <div>
      <h1>Trending</h1>
      <div>
        {Trending.map((blog, index) => (
          <div key={index} className={`${Styles.blogBox} ${Styles.flex} `}>
            <div>
              <img
                className={Styles.TrendingImage}
                src={blog.image}
                alt={blog.title}
              />
            </div>
            <div>
              <h5 className={Styles.blogTitle}>{blog.title}</h5>
              <p className={Styles.blogDescription}>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
