import { Link } from 'react-router-dom'


const HomePage = () => {


    return(
        <div>
            <div className='home-card'>
                <Link to={'/beers'}>
                    <h1>All Beers</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident. Libero perspiciatis a vero quis voluptatum dolore unde veniam deserunt itaque ex, corporis fuga eos vitae eum quibusdam, accusantium ipsa.</p>
                </Link>
            </div>

            <div className='home-card'>
                <Link to={'/random-beer'}>
                    <h1>Random Beer</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident. Libero perspiciatis a vero quis voluptatum dolore unde veniam deserunt itaque ex, corporis fuga eos vitae eum quibusdam, accusantium ipsa.</p>
                </Link>
            </div>

            <div className='home-card'>
                <Link to={'/new-beer'}>
                    <h1>New Beer</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident. Libero perspiciatis a vero quis voluptatum dolore unde veniam deserunt itaque ex, corporis fuga eos vitae eum quibusdam, accusantium ipsa.</p>
                </Link>
            </div>
        </div>
    )
}

export default HomePage