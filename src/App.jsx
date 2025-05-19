import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Banner />

      <div 
      style={{paddingLeft:'60px', paddingRight:'60px', position:"relative",zIndex:200 , top: "-150px", height: '150px', background: 'linear-gradient(to bottom, rgba(190, 0, 0, 0), rgb(20, 20, 20)) '}}>
        <br /><br />
        <h2 style={{textAlign: 'justify'}}>BODY OF THE APP</h2>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur velit laudantium obcaecati ea tenetur? Itaque, pariatur. Eum dignissimos ea odio perspiciatis distinctio in delectus accusamus dolores aspernatur optio mollitia porro a sapiente ipsa expedita dolore modi voluptas, asperiores labore iste, eveniet totam. Fuga ipsa distinctio perferendis eaque ab autem numquam maiores expedita accusamus dolor, nostrum sit provident eum obcaecati inventore nemo voluptatum hic commodi itaque consequatur voluptatibus est. Voluptatem, rerum incidunt itaque, quos nostrum commodi distinctio nesciunt harum quasi odit neque praesentium similique corporis! Autem repudiandae pariatur qui ad laborum quisquam commodi quae libero nulla itaque velit expedita veniam, magni quaerat accusantium nihil quam ipsam. Libero laudantium magnam, nemo dolore fugit quam accusantium aut eveniet quasi nulla recusandae voluptas voluptatibus ullam corporis necessitatibus, perspiciatis sunt culpa quas distinctio. Magnam minima dignissimos itaque quis ea? Praesentium sint possimus sapiente harum necessitatibus maxime quam accusantium, veritatis assumenda illum, sequi unde eaque enim dolor quis omnis eius aut odit. Amet rerum rem libero aut corporis beatae suscipit provident hic! Autem et, impedit eaque dolore labore alias tempore, libero minima assumenda magnam ducimus iusto delectus repellendus in. Quae atque aperiam maiores doloremque numquam natus odio quaerat dicta enim, mollitia, at consequatur maxime quasi dolore.</p>
      </div>
    </>
  )
}

export default App
