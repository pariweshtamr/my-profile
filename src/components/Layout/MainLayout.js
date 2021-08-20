import React from 'react'
import { Navigation } from '../Navbar/Navigation'

export const MainLayout = ({ children }) => {
    return (
        <div>
            <Navigation />
            {children}
        </div>
    )
}
