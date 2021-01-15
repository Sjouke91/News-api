import React from "react";

export default function ArticleDetail({ selectedArticle }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h4>{selectedArticle.title}</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p>{selectedArticle.content}</p>
        </div>
      </div>

      <div className="row">
        <div className="col xs 12">
          <img
            style={{ width: "100%" }}
            src={selectedArticle.urlToImage}
            className="img-responsive"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p>{selectedArticle.publishedAt}</p>
        </div>
      </div>
    </div>
  );
}
