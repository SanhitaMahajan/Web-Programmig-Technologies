import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header';
import Footer from './component/Footer';
import MainNavBar from './component/MainNavBar';
import HomeComponent from './pages/HomeComponent';
import {Routes,Route} from 'react-router-dom'
import TableComponent from './pages/ProductTable';
import ProductList from './pages/ProductList';
import FormComponent from './pages/ProductForm';
import ProductEdit from './pages/ProductEdit';
import ProductView from './pages/ProductView';

function App() {
  return (
   <div>
    <Header></Header>
    <MainNavBar></MainNavBar>
    <Routes>
      <Route path="/" element={<HomeComponent></HomeComponent>}></Route>
      <Route path="/table" element={<TableComponent></TableComponent>}></Route>
      <Route path='/list' element={<ProductList></ProductList>}></Route>
      <Route path="/form" element={<FormComponent></FormComponent>}></Route>
      <Route path='/editProduct/:id' element={<ProductEdit></ProductEdit>}></Route>
      <Route path="/view/:id" element={<ProductView></ProductView>}></Route>
    </Routes>
    <Footer></Footer>

   </div>
  );
}

export default App;
