import React from 'react'
import Banner from './Banner'
import CardItem from '../models/Item'
import Item from './Item'
const Body = () => {
    const list = [
        new CardItem("fa-box", "Fresh new layout", "With Bootstrap 5, we've created a fresh new layout for this template!"),
        new CardItem("fa-cloud-download-alt", "Free to download", "As always, Start Bootstrap has a powerful collectin of free templates."),
        new CardItem("fa-address-card", "Jumbotron hero header", "The heroic part of this template is the jumbotron hero header!"),
        new CardItem("fa-bold", "Feature boxes", "We've created some custom feature boxes using Bootstrap icons!"),
        new CardItem("fa-link", "Simple clean code", "We keep our dependencies up to date and squash bugs as they come!"),
        new CardItem("fa-check-circle", "A name you trust", "Start Bootstrap has been the leader in free Bootstrap templates since 2013!")
    ];
    return (
        <div>
            {/* Banner */}
            <Banner />
            {/* List Item  */}
            <div className='bg-white py-6'>
                <div className='container mx-auto px-12'>
                    <div className='grid grid-cols-3'>
                        {/* Item  */}
                        {list.map((e, i) => <Item card={e} key={i} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body