import Styles from "./BlogBox.module.css";

const blogs = [
  {
    title: "Exploring Nature",
    description: "Discover the beauty of the great outdoors.",
    image: "https://source.unsplash.com/featured/?nature",
    author: "Alice",
    date: "2022-05-15",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Tech Trends",
    description: "Stay updated on the latest technology trends.",
    image: "https://source.unsplash.com/featured/?technology",
    author: "Bob",
    date: "2022-04-20",
    content:
      "Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
  },
  {
    title: "Culinary Delights",
    description: "Explore the world of mouth-watering cuisines.",
    image: "https://source.unsplash.com/featured/?food",
    author: "Charlie",
    date: "2022-03-12",
    content:
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
  },
  {
    title: "Study",
    description: "Discover the beauty of the great outdoors.",
    image: "https://source.unsplash.com/featured/?study",
  },
  {
    title: "Traveller",
    description: "Discover the beauty of the great outdoors.",
    image: "https://source.unsplash.com/featured/?traveller",
  },
  {
    title: "fitness",
    description: "Discover the beauty of the great outdoors.",
    image: "https://source.unsplash.com/featured/?gym/fitness",
  },
  // Add more blog objects as needed
];

export default function BlogBox() {
  return (
    <div>
      {blogs.map((blog, index) => (
        <div key={index} className={Styles.blogBox}>
          <>
            <img
              className={Styles.blogImage}
              src={blog.image}
              alt={blog.title}
            />
          </>
          <>
            <h3 className={Styles.blogTitle}>{blog.title}</h3>
            <p className={Styles.blogDescription}>{blog.description}</p>
            <p className={Styles.blogAuthor}>✍️ {blog.author}</p>
            <p className={Styles.blogContent}>{blog.content}</p>
            <button className={Styles.viewButton}>Read All..</button>
          </>
        </div>
      ))}
    </div>
  );
}
