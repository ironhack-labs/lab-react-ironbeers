import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Home extends Component{
  render(){
    return(
      <div>
        <section>  
          <Link to='/all'>
            <img width='500' src='https://assets3.thrillist.com/v1/image/676279/size/tmg-article_default_mobile.jpg' alt='img'/>
            <h2>All beers</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nostrum alias magni fuga provident, laboriosam fugit nesciunt accusamus dignissimos rerum facilis nulla quia vitae itaque sed, deserunt, amet voluptate ducimus?</p>
          </Link>
        </section>

        <section>
          <Link to='/random'>
          <img width='500' src='http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/3w/cb/p03wcbny.jpg' alt='img'/>
          <h2>Random beer</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae mollitia assumenda nulla ducimus facere, nisi sed, necessitatibus fuga, ea placeat odio accusamus deserunt. Voluptatem eveniet ullam non corrupti sed voluptatum.</p>
          </Link>
        </section>
        
        <section>
          <Link to='/new'>
          <img width='500' src='https://www.maxim.com/.image/t_share/MTQ2MjQ2OTE2MTczMjExMjMz/gettyimages-171583002.jpg' alt='img'/>
          <h2>New beer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti placeat necessitatibus sunt animi recusandae vel? Fugiat blanditiis tenetur impedit deserunt delectus! Placeat perferendis, vel veritatis deleniti quidem recusandae sint.</p>
          </Link>
        </section>
      </div>
    )
  }
}

export default Home

