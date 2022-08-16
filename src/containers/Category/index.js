import React from "react";
import { useParams } from "react-router";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";

const Category = () => {
  let { slug } = useParams();

  return (
    <Query query={CATEGORY_ARTICLES_QUERY} slug={slug}>
      {({ data: { categories } }) => {
        if (categories.data.length) {
          return (
            <div>
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                  <h1>{categories.data[0].attributes.name}</h1>
                  <Articles articles={categories.data[0].attributes.articles.data} />
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Category;
