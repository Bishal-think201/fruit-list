import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import styles from "./FilterableProductTable.module.css";

const FilterableProductTable = (props) => {
	const [filterText, setFilterText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);
	return (
		<div className={styles.container}>
			<SearchBar
				filterText={filterText}
				inStockOnly={inStockOnly}
				onFilterTextChange={setFilterText}
				onInStockOnlyChange={setInStockOnly}
			/>
			<br />
			<ProductTable
				products={props.products}
				filterText={filterText}
				inStockOnly={inStockOnly}
			/>
		</div>
	);
};

export default FilterableProductTable;
