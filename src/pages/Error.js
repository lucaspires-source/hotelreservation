import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
const Error = () => {
    return (
            <Hero>
                <Banner title="404" subtitle="PAGE NOT FOUND">
                    <Link to="/" className="btn-primary">Return Home</Link>
                </Banner>
            </Hero>
    )
}
export default Error