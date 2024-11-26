import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            {/* now yah jo he in header or footer ke bich me dynamically chiozein render kardu
            to iske liye hamare paas react router me he Outlet karke 
            to ye Outlet kya karega basically iss layout kp as a base use kardega like uss ke andar jo bhi chiz aygi like upar ka or niche na ka 
            same rakhega like jaha pe bhi mene outlet de diuya vaha pe aap chizon ko same rakh sakte ho */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
