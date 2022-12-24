import React from "react";

export default function NavButtons(props) {

    const handleClick = () => {
        props.setSelectedCategory(props.book_category);
        props.setCategory();
    }
    return (
        <p className={`category_link ${props.book_category === props.selected_category ? 'selected-category': ''}`} 
                onClick={handleClick}>{props.book_category}</p>
    );
}