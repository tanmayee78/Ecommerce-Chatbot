import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to the E-commerce Chatbot!</h2>
        <p>Start interacting with our chatbot to explore products.</p>
        <ProductList />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}

export default App;
