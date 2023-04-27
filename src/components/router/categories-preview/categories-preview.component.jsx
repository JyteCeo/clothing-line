
import React, { useContext } from "react";

import { CategoriesContext } from "../../../context/categories.context";
import CategoryPreview from "../../category-preview/category-preview.component";
// import './shop.styles.scss';
import './categories-preview.styles.scss';


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products} />
            })}
        </>
    )
}
export default CategoriesPreview;