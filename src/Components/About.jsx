import Styles from "../Components/About.module.css";

export function About() {
  return (
    <div className={Styles.about}>
      <div className={Styles.aboutContent}>
        <h1 className={Styles.heading}>About Us</h1>
        <p className={Styles.contentParagraph}>
          Welcome to Blog – your go-to source for the latest trends, insights,
          and stories. We are a passionate team of writers and enthusiasts
          dedicated to bringing you engaging content on a variety of topics.
        </p>
        <p className={Styles.contentParagraph}>
          At BlogX, we believe in the power of information to inspire, educate,
          and entertain. Our mission is to curate and create content that
          resonates with our diverse audience. Whether you are seeking travel
          tips, tech reviews, culinary adventures, or lifestyle inspiration, you
          will find it all here.
        </p>
        <p className={Styles.contentParagraph}>
          Our journey began with a simple idea – to create a platform where
          people can explore, learn, and connect. Over the years, we have grown
          into a vibrant community of readers who share our curiosity and
          passion for discovery.
        </p>
        <p className={Styles.contentParagraph}>
          Thank you for being part of our story. Explore our blog, join the
          conversation, and embark on a journey of knowledge and discovery with
          BlogX .
        </p>
        <p className={Styles.writerName}> - AmritPal Singh</p>
      </div>
    </div>
  );
}
