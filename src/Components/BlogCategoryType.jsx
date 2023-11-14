// http://localhost:5173/categories/type=LifeStype&Fitness
import Styles from "./BlogCategoryType.module.css";
const viewType = [
  {
    heading: "Today Technologies",
    paragraph:
      "This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a par paragraph for my blog page.This is a paragraph for my blog page...",
    image: "https://source.unsplash.com/featured/?technology",
  },
  {
    heading: "Today LifeStyle of people",
    paragraph:
      "This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page. is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page...",
    image: "https://source.unsplash.com/featured/?",
  },
  {
    heading: "Today Technologies",
    paragraph:
      "This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a par paragraph for my blog page.This is a paragraph for my blog page...",
    image: "https://source.unsplash.com/featured/?technology",
  },
  {
    heading: "Abroad conditions",
    paragraph:
      "This is a paragraph for my blog page.This is a paragraph for my blog page.This is a s a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page...",
    image: "https://source.unsplash.com/featured/?abroad",
  },
  {
    heading: "Today LifeStyle of people",
    paragraph:
      "This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page. is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page...",
    image: "https://source.unsplash.com/featured/?",
  },
  {
    heading: "Computer LifeStyle of ",
    paragraph:
      "This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page...",
    image: "https://source.unsplash.com/featured/?computers",
  },
  {
    heading: "Today LifeStyle of people",
    paragraph:
      "This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page. is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page...",
    image: "https://source.unsplash.com/featured/?",
  },
  {
    heading: "Today Technologies",
    paragraph:
      "This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a paragraph for my blog page.This is a par paragraph for my blog page.This is a paragraph for my blog page...",
    image: "https://source.unsplash.com/featured/?technology",
  },
];
export function ViewCategoryTypeBlog() {
  const blogtypeCategory = "Lifestype";
  return (
    <>
      <span className={Styles.blogtypeCategory}>
        . Home . Categories . {blogtypeCategory} -
      </span>
      {viewType.map((category, index) => (
        <div className={Styles.viewtypeBlog} key={index}>
          <img src={category.image} alt={category.heading} />
          <div>
            <h1 className="">{category.heading}</h1>
            <p>{category.paragraph}</p>
          </div>
        </div>
      ))}
    </>
  );
}
