import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Topnav from './components/layouts/topnav';
import EMPSideNav from './components/layouts/EMPsidenav';
import React, { Component } from 'react';

import CusNavigation from './components/layouts/Navbar';
import RMsidenav from './components/layouts/Roomsidenav';
import AddRoom from './components/room/AddRoom';
import ViewRooms from './components/room/ViewAllRooms';
import ViewOneRoom from './components/room/ViewOneRoom';
import AddInventory from './components/inventory/AddInventory';
import Inventorysidenav from './components/layouts/InventorySideNav';
import ViewAllInventory from './components/inventory/ViewAllInventory';
import ViewOneInventory from './components/inventory/ViewOneInventory';
import RestockInventory from './components/inventory/RestockInventory';
import CusLogin from './components/auth/cusLogin';
import CusReg from './components/auth/CusRegister';

import Supsidenav from './components/layouts/Supsidenav';
import AddSupplier from './components/supplier/AddSupplier';
import ViewSuppliers from './components/supplier/ViewAllSuppliers';
import ViewOneSupplier from './components/supplier/ViewOneSupplier';
import ViewAllSupplierHistoryRecords from './components/supplier/ViewAllSupplierHistoryRecords';
import Dashboard from './components/Dashboard';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import EmpDetailsSideNav from './components/layouts/EmpDetailsSideNav';
import ViewEmployee from './components/employee/ViewEmployee';
import AddEmployee from './components/employee/AddEmployee';
import ViewOneEmployee from './components/employee/ViewOneEmployee';
import Bookings from './components/room/RoomBookings';
import AllBookings from './components/room/ViewAllRoomBookings';

import ViewPaidSalary from './components/employee/ViewPaidSalary';
import AddPaidSalary from './components/employee/AddPaidSalary';
import ViewAllSuppliers from './components/supplier/ViewAllSuppliers';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            {/* Public Routes */}
            <Route path='/'>
                <CusNavigation />
                {/* <Home /> */}
            </Route>
            <Route path='/cuslogin'>
                <CusLogin />
            </Route>
            <Route path='/cusreg'>
                <CusReg />
            </Route>

            {/* Room Booking Routes */}
            <Route exact path='/home'>
                <Home />
            </Route>
            <Route exact path='/rooms'>
                <Rooms />
            </Route>
            <Route exact path='/rooms/:slug' component={SingleRoom} />

            {/* Protected Routes */}
            <ProtectedRoute exact path='/roommanager' component={RMsidenav} />
            <ProtectedRoute exact path='/roommanager/add' component={AddRoom} />
            <ProtectedRoute exact path='/roommanager/view' component={ViewRooms} />
            <ProtectedRoute exact path='/roomManager/view/:id' component={ViewOneRoom} />

            <ProtectedRoute exact path='/supmanager' component={Supsidenav} />
            <ProtectedRoute exact path='/supmanager/add' component={AddSupplier} />
            <ProtectedRoute exact path='/supmanager/view' component={ViewSuppliers} />
            <ProtectedRoute exact path='/supManager/view/:id' component={ViewOneSupplier} />
            <ProtectedRoute exact path='/supManager/supplierhistory' component={ViewAllSupplierHistoryRecords} />

            <ProtectedRoute exact path='/empManager' component={EmpDetailsSideNav} />
            <ProtectedRoute exact path='/empManager/add' component={AddEmployee} />
            <ProtectedRoute exact path='/empManager/view' component={ViewEmployee} />
            <ProtectedRoute exact path='/empManager/view/:id' component={ViewOneEmployee} />
            <ProtectedRoute exact path='/paidsalManager/view' component={ViewPaidSalary} />
            <ProtectedRoute exact path='/paidsalManager/add' component={AddPaidSalary} />

            <ProtectedRoute exact path='/bookings' component={Bookings} />
            <ProtectedRoute exact path='/viewbookings' component={AllBookings} />

            <ProtectedRoute exact path='/inventorymanager' component={Inventorysidenav} />
            <ProtectedRoute exact path='/inventorymanager/add' component={AddInventory} />
            <ProtectedRoute exact path='/inventorymanager/view' component={ViewAllInventory} />
            <ProtectedRoute exact path='/inventorymanager/view/:id' component={ViewOneInventory} />
            <ProtectedRoute exact path='/inventorymanager/restock' component={RestockInventory} />

            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
        </BrowserRouter>
    );
}

export default App;
