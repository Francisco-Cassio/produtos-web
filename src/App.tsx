import styles from './styles/app.module.css'
import FilterableProductTable from './components/FilterableProductTable'
import { PRODUCTS } from './data/products'

export default function App() {
  return (
    <div className={styles.app}>
      <h1>Produtos</h1>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  )
}