function ProductList() {
  const products = [
    { name: "Smartphone", price: "₹15,699" },
    { name: "Laptop", price: "₹43,999" },
    { name: "Headphones", price: "₹2,199" },
    { name: "Smartwatch", price: "₹2,499" },
  ];

  return (
    <div className="App">
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Add chatbot section here */}
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.5rem",
  },
  productCard: {
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

export default ProductList;
