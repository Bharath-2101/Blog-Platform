import React from "react";
import styles from "./styles.module.scss";
import Filter from "@/componets/Filter/Filter";
import { Articles } from "@/project data/Articles";

const ArticlesSection = () => {
  return (
    <div id="Articles" className={styles.MainContianer}>
      {/* Haeder Of Articles Section */}
      <div className={styles.MainTitle}>
        <span>Articles</span>
        <Filter />
      </div>

      {/* Articles Container */}
      <div className={styles.ArticlesContainer}>
        {Articles.map((article, index) => (
          <div
            key={index}
            className={`${styles.ArticleCon} w-[95%] lg:w-[70%] py-[20px] gap-[30px]  `}
          >
            <div className={styles.ArticleDetails}>
              <div className="">{article.title}</div>
              <div className="">{article.year}</div>
            </div>
            <span className={styles.Divider} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
