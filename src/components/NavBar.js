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

function Navbar(props) {
    const navCategories = Object.keys(categories);
    const defaultCategory = categories.Fiction;
    const [fetchCategory, setFetchCategory] = React.useState(defaultCategory);
    const [selectedCategory, setSelectedCategory] = React.useState(defaultCategory);
    const { error } = useQuery(getCategorySchema,{
        variables: {category: fetchCategory},
        onCompleted: (data) => {
          if (data) {
            props?.setbooksData(data);
            data.getBooksByCategory && props?.setMainBook(data.getBooksByCategory[0]);
          }
        }
    });

    if (error) {
      // TODO: add error and loading content
    }

    return (
        <div className="primary-navbar">
           {navCategories.map((category, index) => {
                return <NavButtons key={index} book_category={category} setCategory={() => setFetchCategory(categories[category])} getSelectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory} />
            })}
        </div>
        
    );
}

export default React.memo(Navbar);