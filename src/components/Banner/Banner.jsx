import React, { useState } from 'react'
import './Banner.css'
import swagImg from '../../assets/coverImg_swag.JPG'
import intenseImg from '../../assets/coverImg_intense.JPG'
import paintingImg from '../../assets/coverImg_painting.JPG'
import vanGogh from '../../assets/logoIcon_vanGogh.png'
import bannerOne from '../../assets/BannerImages/BannerOne.jpg'
import bannerLogoOne from '../../assets/BannerLogoIcons/logoOne.png'
import bannerLogoTwoo from '../../assets/BannerLogoIcons/BITS_Horizontal.png'
import bannerLogoTwo from '../../assets/BannerLogoIcons/BannerLogoTwo.png'



let colorfulImg = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlnaHQlMjBjb2xvdXJ8ZW58MHx8MHx8fDA%3D'
let bannersData = [
    {   id:'Witcher3',
        logo: bannerLogoOne,
        description: `Hi! I am Rishik, a software developer based in Hyderabad. I graduated from BITS Pilani in 2024 with a degree in Electronics Engineering. I made this website using React, a pinch of Redux and a Spotify subscription.`,
        image: bannerOne,
    },
    {   id:'pancha',
        // logo: 'https://support.erp.bits-pilani.ac.in/osta/uploads/HorizontalShort_version_crop.png?1727327354',
        logo: bannerLogoTwo,
        image: swagImg,
        description: "Other than that, I am also a passionate Video/Film Editor, who occasionally dabbles in Photography and Cinematography. I'm also into graphic design."
    },
    // {
    //     id: 'intense',
    //     logo: 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/2395/1707195422395-t',
    //     image: intenseImg,
    //     description: "This is just here because I thought it looked like a cool netflix poster with an intense protagonist. It was taken when i was making a short film."
    // },
    {
        id:'painting',
        logo : vanGogh,
        image: paintingImg,
        description: "This one is just here because I just painted it recently and I'm proud of it hehe. First time I tried to create some digital art"
    }, 

]


// let stylesCustom = {
//     zIndex: bannerCurrent.id == 'painting' ? 1000 : 1,
//     '@media (max-width: 412px)': {
//         objectPosition: bannerCurrent.id === 'pancha' ? 'center' : 'right',
//     }
// }

function Banner() {
  const [bannerItem, setBannerItem] = useState(bannersData[0]);

  return (
    <>
    <div className='banners'>
        <div className='overlay'></div>
        {
            bannersData.map((bannerCurrent,index) => (
                <div key={index} className='bannerContainer'>
                    {/* main banner image */}
                    <img className='bannerImg' src={bannerCurrent.image} alt="" style={{zIndex: bannerCurrent.id == 'painting' ? 1000 : 1, objectPosition: bannerCurrent.id === 'pancha' ? 'center' : bannerCurrent.id == 'painting' ? 'left' : '', }}/>

                    {/* info of banner */}
                    <div className='bannerTitleContainer'>
                        <img src={bannerCurrent.logo} className="bannerLogo" alt="logo" />
                        <div className='bannerText'>
                            <p>{bannerCurrent.description}</p>
                        </div>
                    </div>
                </div>
            ))    
        }
    </div>
    <div className='bottomFadeOverlay' style = {{position: 'absolute', top: '550px', zIndex: 1,  height: '150px', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(20, 20, 20, 0.97))', width: '100%'}}></div>
        {/* <div className='bottomFadeOverlay' style = {{position: 'absolute', top: '600px', zIndex: 200,  height: '100px', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(20, 20, 20, 0.97))', width: '100%'}}></div> */}
        </>
  )
}

export default Banner