import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const home = () => (
    <div className="main-wrapper container">
        <div className="row">
            <Link className="main-link" to="/beers">
                <div className="card">
                    <div className="image">
                        <img className="beerImg" src="http://belsolod.by/wp-content/uploads/2017/08/image-6.jpeg" alt="beer"/>
                    </div>
                    <div className="card-descr">
                        <h2 className="card-header">All Beers</h2>
                        <p className="card-text">Beer is the oldest recorded recipe in the world. The ancient Egyptians first documented the brewing process on papyrus scrolls around 5,000 B.C. These first beers were brewed with things like dates, pomegranates, and other indigenous herbs, and were probably quite harsh by todayâ€™s standards. The Egyptians used beer for religious ceremonies, with the Pharaoh directing the brewing schedule and distribution to the masses. You could call the Pharaohs the first “brewmasters” (or you could call the current brewmasters Pharaohs if you like).Before the Egyptians, the primitive cultures of Mesopotamia are believed to have been the first brewers, though they didn’t bother to write anything down (this was around 10,000 B.C.!). All they left behind were malted barley scraps and bowls with beer like residue (and they called themselves brewers!). This residue was probably the remnants of a grain porridge that had fermented naturally with wild yeast, imparting an intoxicating effect to the consumer, who, therefore, repeated the process.</p>
                    </div>
                </div>
            </Link>
            <Link className="main-link" to="/random-beer">
                <div className="card">
                    <div className="image">
                        <img className="beerImg" src="https://w-dog.ru/wallpapers/1/21/452876768068483.jpg" alt="beer"/>
                    </div>
                    <div className="card-descr">
                        <h2 className="card-header">Random Beer</h2>
                        <p className="card-text">Beer is the oldest recorded recipe in the world. The ancient Egyptians first documented the brewing process on papyrus scrolls around 5,000 B.C. These first beers were brewed with things like dates, pomegranates, and other indigenous herbs, and were probably quite harsh by todayâ€™s standards. The Egyptians used beer for religious ceremonies, with the Pharaoh directing the brewing schedule and distribution to the masses. You could call the Pharaohs the first “brewmasters” (or you could call the current brewmasters Pharaohs if you like).Before the Egyptians, the primitive cultures of Mesopotamia are believed to have been the first brewers, though they didn’t bother to write anything down (this was around 10,000 B.C.!). All they left behind were malted barley scraps and bowls with beer like residue (and they called themselves brewers!). This residue was probably the remnants of a grain porridge that had fermented naturally with wild yeast, imparting an intoxicating effect to the consumer, who, therefore, repeated the process.</p>
                    </div>
                </div>
            </Link>
            <Link className="main-link" to="/new-beer">
                <div className="card">
                    <div className="image">
                        <img className="beerImg" src="http://napitkimira.net/wp-content/uploads/2016/04/pivo_1.jpg" alt="beer"/>
                    </div>
                    <div className="card-descr">
                        <h2 className="card-header">New Beer</h2>
                        <p className="card-text">Beer is the oldest recorded recipe in the world. The ancient Egyptians first documented the brewing process on papyrus scrolls around 5,000 B.C. These first beers were brewed with things like dates, pomegranates, and other indigenous herbs, and were probably quite harsh by todayâ€™s standards. The Egyptians used beer for religious ceremonies, with the Pharaoh directing the brewing schedule and distribution to the masses. You could call the Pharaohs the first “brewmasters” (or you could call the current brewmasters Pharaohs if you like).Before the Egyptians, the primitive cultures of Mesopotamia are believed to have been the first brewers, though they didn’t bother to write anything down (this was around 10,000 B.C.!). All they left behind were malted barley scraps and bowls with beer like residue (and they called themselves brewers!). This residue was probably the remnants of a grain porridge that had fermented naturally with wild yeast, imparting an intoxicating effect to the consumer, who, therefore, repeated the process.</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
);

export default home;