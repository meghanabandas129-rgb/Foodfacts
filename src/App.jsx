import { useState } from 'react'
import SearchBar from './components/SearchBar'
import FoodList from './components/FoodList'
import './App.css'

function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query) => {
    setLoading(true)

    try {
      const encodedQuery = encodeURIComponent(query)
      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodedQuery}&search_simple=1&action=process&json=1`

      const response = await fetch(url)
      const data = await response.json()

      setResults(data.products || [])
    } catch (error) {
      console.error('Error fetching data:', error)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <h1>🥗 FoodFacts</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {!loading && results.length === 0 && (
        <p>Search for a food above to see its nutrition info.</p>
      )}

      {!loading && results.length > 0 && (
        <FoodList products={results} />
      )}
    </div>
  )
}

export default App