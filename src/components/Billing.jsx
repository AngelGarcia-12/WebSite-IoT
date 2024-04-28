import React from 'react'
import { apple, bill, google, smartlamp, smartcamera, smartfridge } from '../assets'
import styles, { layout } from '../style'
import Card from './Card'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <Card 
          image={smartlamp}
          name='Smart lamp'
          description='A smart lamp with different colors'
          price='950'
        />
        <Card 
          image={smartcamera}
          name='Smart camera'
          description='Smart camera that you can connect and watch in your smartphone'
          price='1800'
        />
        <Card 
          image={smartfridge}
          name='Smart fridge'
          description='Smart fridge with different features'
          price='7500'
        />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> devices & data.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Get the latest in IoT so you can enjoy convenience wherever you are.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img
            src={apple}
            alt='app-store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src={google}
            alt='google-play'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div>
      </div>  
    </section>
  )
}

export default Billing
