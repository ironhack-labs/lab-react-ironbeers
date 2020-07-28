import React from 'react'
import { Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

function Home() {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="https://www.cleveland.com/resizer/vezHVESw44mStd0FvjGSvM7kI1M=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/expo.advance.net/img/c5316cfe27/width2048/5dd_taphouse.jpeg" />
                <Card.Body>
                    <Link to={'/beers'} className='link'><h2>All Beers</h2></Link>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum   
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/58b055e16b8f5ba0b946ac0a/1551968634853-7ND7V523EGFT0WLOQX21/ke17ZwdGBToddI8pDm48kOG5uEYhInRN0LmWWJr-nIx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1gBggzXEmE9lJk0lqX0onhwFHPB_L1BY8HIHDJSLm6RuA/brewdog" />
                <Card.Body>
                    <Link to={'/random-beer'} className='link'><h2>Random Beer</h2></Link>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum   
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://s7d2.scene7.com/is/image/TWCNews/112919_oh_brewdogcincyjpg" />
                <Card.Body>
                    <Link to={'/new-beer'} className='link'><h2>New Beer</h2></Link>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum   
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home
