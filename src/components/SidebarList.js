import React from "react";
import SidebarItem from "./SidebarItem";
import articles from "../data/articles.json";

export default function Sidebar({ filter, articleActive }) {
  //filter articles on Author
  const filteredArticles =
    filter !== ""
      ? articles.filter((a) => {
          if (a.author === null) {
            return a;
          } else {
            const author = a.author.toLowerCase();

            return author.includes(filter);
          }
        })
      : articles;

  const onShowDetail = (article) => {
    articleActive(article);
  };

  return (
    <div
      className="row"
      style={{ backgroundColor: "grey", maxHeight: "94vh", overflow: "scroll" }}
    >
      {filteredArticles.map((article, index) => {
        const specificArticle = article;
        return (
          <div onClick={() => onShowDetail(specificArticle)}>
            <SidebarItem
              key={index}
              title={article.title}
              author={article.author}
              source={article.source.name}
            ></SidebarItem>
          </div>
        );
      })}
    </div>
  );
}
