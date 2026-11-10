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
    <form className={styles.form}>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        className={styles.input}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          className={styles.checkbox}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  )
}