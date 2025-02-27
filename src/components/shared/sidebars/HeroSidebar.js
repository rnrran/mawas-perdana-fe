import Link from "next/link";
import React from "react";
import CategoryItem from "./CategoryItem";
import getCategoryItems from "@/libs/getCategoryItems";

const HeroSidebar = ({ type }) => {
  const allItems = getCategoryItems();
  const items = allItems?.filter(({ id }) => id < 10);
  const moreItems = allItems?.filter(({ id }) => id > 9);
  return (
    <div className="ltn__category-menu-wrap">
      <div className="ltn__category-menu-title">
        <h2
          className={
            type === 2
              ? ` section-bg-2 ltn__secondary-bg text-color-white`
              : "section-bg-1"
          }
        >
          categories
        </h2>
      </div>
      <div className="ltn__category-menu-toggle ltn__one-line-active">
        <ul>
          {/* <!-- Submenu Column - unlimited --> */}

          {items?.map((item, idx) => (
            <CategoryItem key={idx} item={item} />
          ))}

          {/* <!-- Show more menu --> */}
          {moreItems?.map((item, idx) => (
            <CategoryItem key={idx + 10} item={item} isMore={true} />
          ))}

          {/* show more controllers */}
          <li className="ltn__category-menu-more-item-parent">
            <Link className="rx-default" href="#">
              More categories <span className="cat-thumb  icon-plus"></span>
            </Link>
            <Link className="rx-show" href="#">
              close menu <span className="cat-thumb  icon-remove"></span>
            </Link>
          </li>
          {/* <!-- Single menu end --> */}
        </ul>
      </div>
    </div>
  );
};

export default HeroSidebar;
