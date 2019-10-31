import React, { Component } from 'react'
import SearchBar from './search/SearchBar'
import ProductTable from './productlist/ProductTable'
export class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state={
            productList:
            [
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
              ],
              filterText: '', 
              inStockOnly: false
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onCheckChange = this.onCheckChange.bind(this);

    }
    onValueChange(e){
        this.setState({
            filterText: e.target.value
        })

    }
    onCheckChange(e){
        this.setState({
            inStockOnly: e.target.checked
        })
    }
    productListFilter(productList,filterText,inStockOnly){
        console.log(productList);
        console.log(inStockOnly);
        return inStockOnly? productList.filter(item => item.name.includes(filterText) && item.stocked === inStockOnly): productList.filter(item => item.name.includes(filterText))
        
        // return filterText===''? productList: productList.filter(item => item.name.inclueds(filterText) && item.stocked === inStockOnly)
    }
    render() {
        const {productList, filterText, inStockOnly } = this.state;
        const filterProductList = this.productListFilter(productList, filterText, inStockOnly);

        return (
            <div>
                <SearchBar value={this.filterText} handleValueChange={this.onValueChange} handleCheckChange={this.onCheckChange}></SearchBar>
                <ProductTable productList={filterProductList}></ProductTable>
            </div>
        )
    }
}

export default FilterableProductTable
