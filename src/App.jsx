import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/Pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'
import { BrowserRouter } from 'react-router-dom'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div>
          {/* <HomePage/> */}
          {/* <Product /> */}
          <ProductDetails/>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
