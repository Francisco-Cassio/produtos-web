import styles from './SearchBar.module.css'

interface SearchBarProps {
  filterText: string
  inStockOnly: boolean
  onFilterTextChange: (text: string) => void
  onInStockOnlyChange: (checked: boolean) => void
}

export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}: SearchBarProps) {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.inputWrapper}>
        <span className={styles.searchIcon} aria-hidden="true">
          🔍
        </span>
        <input
          type="text"
          value={filterText}
          placeholder="Search products (e.g. Apple, Spinach)..."
          className={styles.input}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </div>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          className={styles.checkbox}
        />
        <span>Only show products in stock</span>
      </label>
    </form>
  )
}
