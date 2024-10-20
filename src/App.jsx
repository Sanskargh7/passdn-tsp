import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About'
import Blog from './Components/Pages/Blog'
import Contact from './Components/Pages/Contact'

import Mobility from './Components/Pages/Products/MobilePages/Mobility';
import Fintech from './Components/Pages/Products/MobilePages/Fintech';
import Retails from './Components/Pages/Products/MobilePages/Retails';
import Logistics from './Components/Pages/Products/MobilePages/Logistics';
import HealthCare from './Components/Pages/Products/MobilePages/HealthCare';
import UEI from './Components/Pages/Products/MobilePages/UEI';
import GENAIandMLmore from './Components/Pages/Products/MobilePages/GENAIandMLmore';
import ARVR from './Components/Pages/Products/MobilePages/ARVR';

// Mobility Sub-routes
import OnDemandScheduledRides from './Components/Pages/Products/ProductPages/Mobility/OnDemandScheduledRides';
import OutstationRides from './Components/Pages/Products/ProductPages/Mobility/OutstationRides';
import MetroBuyer from './Components/Pages/Products/ProductPages/Mobility/MetroBuyer';
import MetroManagement from './Components/Pages/Products/ProductPages/Mobility/MetroManagement';
import IntercityBusBuyer from './Components/Pages/Products/ProductPages/Mobility/IntercityBusBuyer';
import IntercityBusManagement from './Components/Pages/Products/ProductPages/Mobility/IntercityBusManagement';
import IntracityBuyer from './Components/Pages/Products/ProductPages/Mobility/IntracityBuyer';
import IntracityBusManagement from './Components/Pages/Products/ProductPages/Mobility/IntracityBusManagement';
import MobilitySuperApp from './Components/Pages/Products/ProductPages/Mobility/MobilitySuperApp';

// Fintech Sub-routes
import FintechSuperSeller from './Components/Pages/Products/ProductPages/Fintech/FintechSuperSeller';
import CreditBuyerApp from './Components/Pages/Products/ProductPages/Fintech/CreditBuyerApp';
import GSTBasedCreditBuyer from './Components/Pages/Products/ProductPages/Fintech/GSTBasedCreditBuyer';
import InsuranceBuyerApp from './Components/Pages/Products/ProductPages/Fintech/InsuranceBuyerApp';
import MutualFundsBuyerApp from './Components/Pages/Products/ProductPages/Fintech/MutualFundsBuyerApp';
import CustomizeSolutions from './Components/Pages/Products/ProductPages/Fintech/CustomizeSolutions';

// Retails Sub-routes
import UniversalSellerApp from './Components/Pages/Products/ProductPages/Retails/UniversalSellerApp';
import CustomCategorySellerApp from './Components/Pages/Products/ProductPages/Retails/CustomCategorySellerApp';
import ECommerceIntegrations from './Components/Pages/Products/ProductPages/Retails/ECommerceIntegrations';
import ECommerceBuyerApp from './Components/Pages/Products/ProductPages/Retails/ECommerceBuyerApp';
import FoodGroceryBuyerApp from './Components/Pages/Products/ProductPages/Retails/FoodGroceryBuyerApp';

// Logistics Sub-routes
import ECommerceLogistics from './Components/Pages/Products/ProductPages/Logistics/ECommerceLogistics';
import IntracityDeliveryApp from './Components/Pages/Products/ProductPages/Logistics/IntracityDeliveryApp';

// HealthCare Sub-routes
import HospitalManagementSoftware from './Components/Pages/Products/ProductPages/HealthCare/HospitalManagementSoftware';

// GENAIandMLmore Sub-routes
import ChatBuyerApp from './Components/Pages/Products/ProductPages/GENAIandMLmore/ChatBuyerApp';
import ChatSellerApp from './Components/Pages/Products/ProductPages/GENAIandMLmore/ChatSellerApp';

// ARVR Sub-routes
import VirtualShowroom from './Components/Pages/Products/ProductPages/ARVR/VirtualShowroom';

//Hotel sub-routes
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomestaySolution from './Components/Pages/Products/ProductPages/Hotel/HomestaySolution'
import HotelBuyer from './Components/Pages/Products/ProductPages/Hotel/HotelBuyer'
import HotelManagementCRM from './Components/Pages/Products/ProductPages/Hotel/HotelManagementCRM'


export default function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/products'>
            <Route path='mobility' element={<Mobility />} />
            <Route path='fintech' element={<Fintech />} />
            <Route path='retails' element={<Retails />} />
            <Route path='logistics' element={<Logistics />} />
            <Route path='healthcare' element={<HealthCare />} />
            <Route path='uei' element={<UEI />} />
            <Route path='genaiandmlmore' element={<GENAIandMLmore />} />
            <Route path='arvr' element={<ARVR />} />
          </Route>


          <Route path='/products' >
            <Route path='mobility' >
              <Route path='OnDemandScheduledRides' element={<OnDemandScheduledRides />} />
              <Route path='OutstationRides' element={<OutstationRides />} />
              <Route path='MetroBuyer' element={<MetroBuyer />} />
              <Route path='MetroManagement' element={<MetroManagement />} />
              <Route path='IntercityBusBuyer' element={<IntercityBusBuyer />} />
              <Route path='IntercityBusManagement' element={<IntercityBusManagement />} />
              <Route path='IntracityBuyer' element={<IntracityBuyer />} />
              <Route path='IntracityBusManagement' element={<IntracityBusManagement />} />
              <Route path='MobilitySuperApp' element={<MobilitySuperApp />} />
            </Route>


            <Route path='fintech' >
              <Route path='FintechSuperSeller' element={<FintechSuperSeller />} />
              <Route path='CreditBuyerApp' element={<CreditBuyerApp />} />
              <Route path='GSTBasedCreditBuyer' element={<GSTBasedCreditBuyer />} />
              <Route path='InsuranceBuyerApp' element={<InsuranceBuyerApp />} />
              <Route path='MutualFundsBuyerApp' element={<MutualFundsBuyerApp />} />
              <Route path='CustomizeSolutions' element={<CustomizeSolutions />} />
            </Route>


            <Route path='retails'>
              <Route path='UniversalSellerApp' element={<UniversalSellerApp />} />
              <Route path='CustomCategorySellerApp' element={<CustomCategorySellerApp />} />
              <Route path='ECommerceIntegrations' element={<ECommerceIntegrations />} />
              <Route path='ECommerceBuyerApp' element={<ECommerceBuyerApp />} />
              <Route path='FoodGroceryBuyerApp' element={<FoodGroceryBuyerApp />} />
            </Route>


            <Route path='logistics' >
              <Route path='ECommerceLogistics' element={<ECommerceLogistics />} />
              <Route path='IntracityDeliveryApp' element={<IntracityDeliveryApp />} />
            </Route>


            <Route path='healthcare' >
              <Route path='HospitalManagementSoftware' element={<HospitalManagementSoftware />} />
            </Route>

            <Route path='Hotel' >
              <Route path='HomestaySolution' element={<HomestaySolution />} />
              <Route path='HotelBuyer' element={<HotelBuyer />} />
              <Route path='HotelManagementCRM' element={<HotelManagementCRM />} />
            </Route>


            <Route path='uei' element={<UEI />} />

            <Route path='genaiandmlmore' >
              <Route path='ChatBuyerApp' element={<ChatBuyerApp />} />
              <Route path='ChatSellerApp' element={<ChatSellerApp />} />
            </Route>


            <Route path='arvr' >
              <Route path='VirtualShowroom' element={<VirtualShowroom />} />
            </Route>

          </Route>

          <Route path='/products'>
            <Route path='mobility' element={<Mobility />} />
            <Route path='fintech' element={<Fintech />} />
            <Route path='retails' element={<Retails />} />
            <Route path='logistics' element={<Logistics />} />
            <Route path='healthcare' element={<HealthCare />} />
            <Route path='uei' element={<UEI />} />
            <Route path='genaiandmlmore' element={<GENAIandMLmore />} />
            <Route path='arvr' element={<ARVR />} />
          </Route>
        </Routes>
      </BrowserRouter>




    </>

  )
}
