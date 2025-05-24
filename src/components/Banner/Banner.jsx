import React, { useState } from 'react'
import './Banner.css'
import swagImg from '../../assets/coverImg_swag.JPG'
import intenseImg from '../../assets/coverImg_intense.JPG'
import paintingImg from '../../assets/coverImg_painting.JPG'
import vanGogh from '../../assets/logoIcon_vanGogh.png'



let colorfulImg = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlnaHQlMjBjb2xvdXJ8ZW58MHx8MHx8fDA%3D'
let bannersData = [
    {   id:'Witcher3',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/EN_The-Witcher-3_Logo-Black_RGB.svg/1280px-EN_The-Witcher-3_Logo-Black_RGB.svg.png',
        description: `This is my favourite game, The Witcher 3. I am putting this here just because I don't know what else to put here. Also it makes the website cool hehe`,
        image: 'https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2015/04/The_Witcher_3_Wild_Hunt_A_lonely_tower_is_it_abandoned.png'
    },
    {   id:'pancha',
        logo: 'https://support.erp.bits-pilani.ac.in/osta/uploads/HorizontalShort_version_crop.png?1727327354',
        image: swagImg,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus fugit sunt, iste autem facilis veniam vero possimus veritatis distinctio in expedita fugiat voluptatibus ex"
    },
    {
        id:'poster',
        logo : 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/2395/1707195422395-t',
        image: intenseImg,
        description: 'This one is just here because I thought it looked like a cool netflix movie poster, where the main character has an intense gaze towards the camera. This was taken when I was working on a short film in college.'
    },
    {
        id:'painting',
        logo : vanGogh,
        image: paintingImg,
        description: 'This one is just here because I thought it looked like a cool netflix movie poster, where the main character has an intense gaze towards the camera. This was taken when I was working on a short film in college.'
    }

]


function Banner() {
  const [bannerItem, setBannerItem] = useState(bannersData[0]);

  return (
    <>
    <div className='banners'>
        <div className='overlay'></div>
        {
            bannersData.map((bannerCurrent,index) => (
                <div key={index} className='bannerContainer'>
                <img className='bannerImg' src={bannerCurrent.image} alt="" style={{zIndex: bannerCurrent.id == 'painting' ? 1000 : 1}}/>

                <div className='bannerTitleContainer'>
                    <img src={bannerCurrent.logo} className="bannerLogo" alt="logo" />
                    <div className='bannerText'>
                        <p>{bannerCurrent.description}</p>
                    </div>
                </div>
            </div>)
        )    
        }
        </div>
        <div className='bottomFadeOverlay' style = {{position: 'absolute', top: '550px', zIndex: 1,  height: '150px', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(20, 20, 20, 0.97))', width: '100%'}}></div>
        {/* <div className='bottomFadeOverlay' style = {{position: 'absolute', top: '600px', zIndex: 200,  height: '100px', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(20, 20, 20, 0.97))', width: '100%'}}></div> */}
        </>
  )
}

export default Banner