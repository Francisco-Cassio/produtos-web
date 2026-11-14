import express, { Request, Response } from 'express'
import cors from 'cors'

export interface Product {
  category: string
  price: string
  stocked: boolean
  name: string
}

const PRODUCTS: Product[] = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
]

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
  res.json({
    service: "Cássio's Market API",
    status: 'online',
    endpoints: {
      products: '/api/products'
    }
  })
})

app.get('/api/products', (req: Request, res: Response) => {
  const { search, stocked } = req.query
  let result = [...PRODUCTS]

  if (typeof search === 'string' && search.trim() !== '') {
    const query = search.toLowerCase()
    result = result.filter((p) => p.name.toLowerCase().includes(query))
  }

  if (stocked === 'true') {
    result = result.filter((p) => p.stocked)
  }

  res.json(result)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
