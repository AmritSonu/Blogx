import { useState } from "react";
import BlogBox from "./BlogBox";
import Styles from "./MainBlogs.module.css";
import TrendingBox from "./TrendingBox";

export function MainBlogs() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };
  console.log(scrollTop);
  return (
    <div className={Styles.main} onScroll={handleScroll}>
      <div
        className={Styles.primaryMain}
        style={{ height: "70rem", overflowY: "scroll" }}
      >
        <BlogBox />
      </div>
      <div
        className={`${Styles.secondaryMain} `}
        style={{ height: "30rem", overflowY: "scroll" }}
      >
        {/* The TrendingBox component goes here */}
        <TrendingBox />
      </div>
    </div>
  );
}
