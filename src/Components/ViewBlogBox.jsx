import Styles from "./ViewBlogBox.module.css";
import { UserActivationStatus } from "./UserActivationStatus";
import { CommentSection } from "./CommentSection";
const currentBlogBox = [
  {
    id: 22332,
    heading_one: "Security isnt just a technology problem it about design, too",
    heading_two:
      " Winners are recognized for outstanding app design, innovation ingenuity and technical achievement",
    heading_three:
      " Winners are recognized for outstanding app design, innovation ingenuity and technical achievement",
    paragraph_one:
      " security isnt just a technology problem it about design. It is a technology problem it about design. It is a technology problem it about design. It is a technology problem it about design. It is a technology problem it about design. It is a technology problem it about design. It is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it     about design and it is a technology problem it about design and it is a technology     problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is ",
    paragraph_Two:
      " security isnt just a technology problem it about design. It is a technology problem it about design. It is a technology problem it about design. It is a technology problem it about design. It is a technology problem it about design. It is a technology problem it about design. It is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is a technology problem it     about design and it is a technology problem it about design and it is a technology     problem it about design and it is a technology problem it about design and it is a technology problem it about design and it is ",
    paragraph_three:
      " Past honorees have made some of the most note. They have made some of the most important changes in the technology    design process    and have made   some of the most important changes in the technology design process and have made some of          the most important changes in the technology design process and have made some of the most then important changes in the technology design process and have made some of the most then important changes in the technology design process and have made some of the most then important changes in the technology design process and have made some of the most then important changes in the technology design process and have made some of the most then important changes in the technology",
    image:
      "https://new.axilthemes.com/themes/blogar/wp-content/uploads/2021/01/post-single-04.jpg",

    category: "Technology",
  },
];
export function ViewBlogBox() {
  return (
    <>
      <div className={Styles.viewBlogBox}>
        {currentBlogBox.map((blog, index) => (
          <div key={index}>
            <span className={Styles.blogCategory}>{blog.category}</span>
            <h1 className={Styles.viewBlogHeading}>{blog.heading_one}</h1>
            <UserActivationStatus />
            <h3>{blog.heading_two}</h3>
            <p className={Styles.viewBlogParagraph}>{blog.paragraph_one}</p>
            <h1>{blog.heading_two}</h1>
            <p className={Styles.viewBlogParagraph}>{blog.paragraph_Two}</p>
            <p className={Styles.viewBlogParagraph}>{blog.paragraph_three}</p>
            <h1>{blog.heading_one + blog.heading_two + blog.heading_three}</h1>
            <p className={Styles.viewBlogParagraph}>para 3</p>
            <img className={Styles.blogImg} src={blog.image} alt="" />
            <p className={Styles.viewBlogParagraph}>
              All of us at iphone More than 250 developers have been
            </p>
          </div>
        ))}
      </div>
      <CommentSection />
    </>
  );
}