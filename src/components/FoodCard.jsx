function FoodCard({ product }) {
  const { product_name, brands, nutriments, image_small_url } = product

  return (
    <div className="food-card">
      {image_small_url ? (
        <img src={image_small_url} alt={product_name || 'Food'} />
      ) : (
        <p>No image available</p>
      )}

      <h2>{product_name || 'No product name'}</h2>
      <p><strong>Brand:</strong> {brands || 'Unknown'}</p>
      <p><strong>Calories:</strong> {nutriments?.energy_kcal ?? nutriments?.['energy-kcal'] ?? 'N/A'}</p>
      <p><strong>Protein:</strong> {nutriments?.proteins ?? 'N/A'} g</p>
      <p><strong>Carbs:</strong> {nutriments?.carbohydrates ?? 'N/A'} g</p>
      <p><strong>Fat:</strong> {nutriments?.fat ?? 'N/A'} g</p>
    </div>
  )
}

export default FoodCard