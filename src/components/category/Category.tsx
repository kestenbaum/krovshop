import React, {FC} from 'react';
import CategoryItems from "./CategoryItems";

const Category:FC = () => {
    return (
        <div className='category'>
            <div className="container">
                <div className="category-wrapper">
                    {/*---- Information block----*/}
                    <div className="category-information">
                        <div className="category-title">Кровельные материалы</div>
                        <div className="category-amount">400</div>
                    </div>

                    {/*---- Items block----*/}
                    <div className="category-items">
                        <CategoryItems/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;