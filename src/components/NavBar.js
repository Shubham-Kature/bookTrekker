import React from "react";
import { useQuery, gql } from '@apollo/client';
import { categories } from "../constants/const";
import NavButtons from "./NavButtons";

const getCategorySchema = gql`
query GetBooksByCategory($category: String!) {
    getBooksByCategory(category: $category) {
      title
      primary_isbn13
      author
      description
      category
      productLinks {
        name
        link
      }
      book_image
    }
  }
`;

export default function Navbar(props) {
    const navCategories = Object.keys(categories);
    const [fetchCategory, setFetchCategory] = React.useState(categories.Fiction);
    const { error } = useQuery(getCategorySchema,{
        variables: {category: fetchCategory},
        onCompleted: (data) => {
          props?.setbooksData(data);
          data.getBooksByCategory && props?.setMainBook(data.getBooksByCategory[0]);
        }
    });

    if (error) {
      // TODO: add error and loading content
    }

    return (
        <div className="primary-navbar">
           {navCategories.map(category => {
                return <NavButtons book_category={category} setCategory={() => setFetchCategory(categories[category])} {...props}/>
            })}
        </div>
        
    );
}