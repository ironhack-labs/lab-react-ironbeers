import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Link to={'/beers'}>
                <img src="https://edibleottawa.ediblecommunities.com/sites/default/files/kanata%20beer%20banner-03.jpg" className="banner" />
                <h1>All Beers</h1>
                <p>Nulla voluptate incididunt consectetur exercitation Lorem eu sunt laborum velit tempor nulla excepteur excepteur. Ut quis irure do elit ipsum. Culpa qui consectetur nulla Lorem elit nisi Lorem ipsum ipsum fugiat aliquip ex duis. Irure consequat culpa quis Lorem consequat incididunt in adipisicing laborum consequat.</p>
            </Link>
            <Link to={'/beers/random'}>
                <img src="https://www.cohoferry.com/img/pages/FWBF-banner.jpg" className="banner" />
                <h1>Random Beer</h1>
                <p>Nulla voluptate incididunt consectetur exercitation Lorem eu sunt laborum velit tempor nulla excepteur excepteur. Ut quis irure do elit ipsum. Culpa qui consectetur nulla Lorem elit nisi Lorem ipsum ipsum fugiat aliquip ex duis. Irure consequat culpa quis Lorem consequat incididunt in adipisicing laborum consequat.</p>
            </Link>
            <Link to={'/create'}>
                <img src="https://images.squarespace-cdn.com/content/v1/5d6db40233f26e00011705c7/1586241559022-EH6M8L60I2LWUUDWPOKR/ke17ZwdGBToddI8pDm48kDu-OvKe9-yMBj32JSWknrt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZNNUmsixw3l8iPy3vgDTPMwfMBbaTJA8uE3oWp8JUwqzkQXHaRS3Yhvu0vV6Jt1AA/BEERS+BANNER+7+V2.jpg" className="banner" />
                <h1>New Beer</h1>
                <p>Nulla voluptate incididunt consectetur exercitation Lorem eu sunt laborum velit tempor nulla excepteur excepteur. Ut quis irure do elit ipsum. Culpa qui consectetur nulla Lorem elit nisi Lorem ipsum ipsum fugiat aliquip ex duis. Irure consequat culpa quis Lorem consequat incididunt in adipisicing laborum consequat.</p>
            </Link>
        </div>
    )
}
