import React, { useState } from "react";
import SidebarList from "../components/SidebarList";
import ArticleDetail from "../components/ArticleDetail";

export default function Home({ searchText }) {
  const [activeArticle, set_activeArticle] = useState("");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          <SidebarList
            articleActive={set_activeArticle}
            filter={searchText}
          ></SidebarList>
        </div>
        <div className="col-sm-9">
          {activeArticle !== "" ? (
            <ArticleDetail selectedArticle={activeArticle}></ArticleDetail>
          ) : (
            <h4>please select an article</h4>
          )}
        </div>
      </div>
    </div>
  );
}
