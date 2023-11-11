import Styles from "./Categories.module.css";
import { NavLink } from "react-router-dom";
import { MainBlogs } from "./MainBlogs";
const categories = [
  "Food",
  "Travel",
  "Health_&_fitness",
  "Lifestyle",
  "Fashion_&_beauty",
  "Photography",
  "Education",
];
export function Categories() {
  return (
    <div className={Styles.categories}>
      <ul className={Styles.categoriesContainer}>
        {categories.map((eachCategory, category) => {
          return (
            <NavLink
              className={Styles.button}
              to={`/category/${eachCategory}`}
              key={category}
            >
              {eachCategory}
            </NavLink>
          );
        })}
      </ul>
      <MainBlogs />
    </div>
  );
}
