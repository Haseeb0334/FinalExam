import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonImage from '../assets/images/Play Button.png' ;
import Bckgrnd from '../assets/images/Web.png';
import Bckgrnd2 from '../assets/images/Rectangle 51.png';
import line from '../assets/images/Group 165.png';
import group from '../assets/images/Group 167.png';
import Mask from '../assets/images/Mask group.png';
import profile from '../assets/images/Image.png';
import blog from '../assets/images/Group 168.png';
import pic from '../assets/images/Group 148.png';
import base from '../assets/images/Group 169.png'



const Home = () => {
  return (
    <>
      <div className='heading1'>
        <h1>
        Web3Makr Redefining How You Create
        </h1>
        <h5>Unlock the blockchain potential to create Web3 Applications</h5>

        <button type="play">
      <img src={ButtonImage} alt="buttonLogo" />
    </button>

      <img src={Bckgrnd} alt='bckgrndImage'/>
      <br></br>
      <img src={line} alt='LineImage'/>
      <br></br>

      <div>
        <h2>Create Your Own Web3 MasterPiece</h2>
        <p>Most entrepreneurs want to create their own web3 sites, unfortunately, they dont know much about creating one. Web3Makr makes it easier for newbies to create a blockchain-based collectibles solution without the hassle of leaving their favorite creation tools and by simple drag and drop functionality.</p>
        <Button type="submit">Start Building</Button>{' '}
      </div>
      
      <img className='bckgrnd2' src={Bckgrnd2} alt='image'/>

      <img className='group' src={group} alt='image'/>
      <img className='maskimage ' src={Mask} alt='image'/>

      <p>Testimonials</p>
      <h2>What People Are Saying</h2>
      <h4>Multi chain interoperability</h4>
      <p>“Web3makr provides a solution for web3 developers and beginners by integrating the drag and drop feature for properties like NFT Search Marketplace, Wallet Integration, downloadable source code, and Smart Contract. Aside from this, the software also provides its users with ready-made and customizable templates that users can use when creating their web3 applications.”</p>
      <img src={profile}  alt='profile' />


      </div>
      <h1>Frequently asked questions</h1>
      <p>Have a question? Check out our frequently asked questions to find your answer.</p>
      <h4>Why Should I use Web3Makr</h4>
      <p>Web3makr provides a solution for web3 developers and beginners by integrating the drag and drop feature for properties like NFT Search Marketplace, Wallet Integration, downloadable source code, and Smart Contract. Aside from this, the software also provides its users with ready-made and customizable templates that users can use when creating their web3 applications.
    </p>

    <h1>Our Blog</h1>
    <img src={blog} alt='blog' />
    <img src={pic} alt='blog' />
    <img src={base} alt='base' />


    </>
  )
}

export default Home
