import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./components/router/home.component";
import Navigation from "./components/router/navigation/navigation.component";
import Authentication from './components/router/authentication/authentication.component';
import Signup from "./components/sign-up-form/sign-up-form.component";
import Shop from "./components/router/shop/shop.component";

// const Shop = () => {
//   return (
//     <div>
//       <h1>the shop is me</h1>
//       <h1>the shop is me</h1>
//       <h1>the shop is me</h1>
//       <h1>the shop is me</h1>
//       <h1>the shop is me</h1>
//       <h1>the shop is me</h1>
//       <h1>the shop is me</h1>
//       <Shop />
//     </div>
    
//   )
// }




const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}
      >
        <Route index element={<Home />}
        />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}



export default App;
