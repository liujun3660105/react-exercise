import React from 'react'

function ProductRow(props) {
    const name = props.name;
    const price = props.price;
    return <li>{name + '  ' + price}</li>

            
        

   

}
function ProductCategoryRow(props) {

    return (
        <h2>{props.category}</h2>
    )
}

function ProductCategory(props) {
    const category = props.categoryName;
    const productList = props.productList;
    const itemList = productList.map((item,index)=>
        <ProductRow key={index} name= {item.name} price={item.price}></ProductRow>

    )
    
        return (
            <div>
                <ProductCategoryRow category = {category}></ProductCategoryRow>
                <ul>
                    {itemList}
                </ul>
                
            </div>

        
        )

    }
        

export default function ProductTable(props) {

    let categoryList = Array.from(new Set(props.productList.map(item=>item.category)));

    const categoryItems = categoryList.map((categoryName)=>{
       
        const categoryProductList = props.productList.filter(item=>item.category === categoryName);
       return <ProductCategory key={categoryName.toString()} categoryName={categoryName} productList={categoryProductList} ></ProductCategory>

    }
    
    );
    return (
        <div>        
            {categoryItems}
        </div>
    )
}
