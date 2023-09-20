import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({
	filterText,
	inStockOnly,
	onFilterTextChange,
	onInStockOnlyChange,
}) => {
	return (
		<form className={styles.center}>
			<input
				className={styles.input}
				type="text"
				value={filterText}
				placeholder="Search..."
				onChange={(e) => onFilterTextChange(e.target.value)}
			/>
			<br />
			<label>
				<input
					type="checkbox"
					checked={inStockOnly}
					onChange={(e) => onInStockOnlyChange(e.target.checked)}
				/>{" "}
				Only show products in stock
			</label>
		</form>
	);
};

export default SearchBar;