import React, { useEffect, useRef } from 'react';
import './StarWarsScroll.css';

export default function StarWarsScroll() {
  const crawlRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (crawlRef.current) {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
  
        const progress = scrollY / maxScroll;
  
        // Make the crawl move up gently, and scale down gradually
        const translateY = -progress * 1000; // Feel free to tweak this number
        const scale = 1 - progress * 0.7;     // Shrinks to 30% size at max scroll
  
        crawlRef.current.style.transform = `
          perspective(800px)
          rotateX(25deg)
          translateZ(0)
          translateY(${translateY}px)
          scale(${Math.max(scale, 0.3)})
        `;
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div className="star-wars-wrapper">
      <div className="crawl" ref={crawlRef}>
        <p>Episode IV</p>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero ut nulla vehicula...
        </p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae...
        </p>
        <p>
          Aenean sodales massa nec orci ultricies, at faucibus nibh mattis. Quisque ac est in purus luctus euismod...
        </p>
        <p>
          Morbi porta sem id sapien malesuada, vitae dignissim purus porta. Aliquam erat volutpat...
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus! Lorem ipsum dolor sit amet consectetur.
        </p>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quod beatae, voluptates, iure eaque esse sit repellat corrupti rerum, labore accusantium sed laboriosam veritatis at perferendis provident totam? Dolor ullam, ipsa aliquid, a ex</p> 
        
        <p>culpa perferendis laborum labore quibusdam, quidem dolore animi debitis veritatis eveniet! Error quis quo iusto, expedita sint iste recusandae ullam a fugit delectus illo sed voluptas quos, magni unde nemo quaerat rerum temporibus necessitatibus voluptate ad ipsa libero.</p>
        
        <p>Mollitia error cum veritatis suscipit quia aliquid totam nostrum aliquam id earum, hic dolorem excepturi ex odio animi harum est. A veritatis dolorem recusandae asperiores exercitationem odio enim qui distinctio cupiditate? Quae non totam, ullam reprehenderit incidunt excepturi maxime beatae in quis? Tenetur rem possimus omnis asperiores atque eligendi et porro vitae inventore.</p>
        
        <p> Dignissimos fuga similique explicabo repellat repellendus asperiores architecto deserunt pariatur eos nulla laudantium corrupti deleniti velit maxime iste nesciunt libero error temporibus provident rem, quaerat totam! Doloribus laudantium voluptates ipsum earum</p>
        <p> optio officiis aut reiciendis odit vitae nesciunt. Magnam eius hic est accusamus et, quam nostrum eligendi quo iste sequi laborum alias sapiente, quaerat nisi velit expedita. Quod facilis, repellendus autem enim laborum accusantium assumenda placeat est, rem consequatur ad reprehenderit maxime obcaecati itaque? Recusandae?</p>




      </div>
    </div>
  );
}
