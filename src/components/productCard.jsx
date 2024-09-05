import'./style.css';
import Desktop from '../assets/images/image-product-desktop.jpg';
import Mobile from '../assets/images/image-product-mobile.jpg';


const productCard = () => {
  return (
    <main>
         <div className='product_card'>
         <div className='product_card_right'>
            <picture>
                <source srcSet={Desktop} media="(min-width:48rem)"/>
                <img src={Mobile} alt="Perfume product"/>
            </picture> 
         </div>
         <div className='product_card_left'></div>

         </div>
    </main>
  )
}

export default productCard