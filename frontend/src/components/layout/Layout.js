import React, { Children } from 'react'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='content'> {children}</div>
        </div>
    )
}

export default Layout