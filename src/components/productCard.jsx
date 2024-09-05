import "./style.css";
import Desktop from "../assets/images/image-product-desktop.jpg";
import Mobile from "../assets/images/image-product-mobile.jpg";
import Cart from "../assets/images/icon-cart.svg"

const productCard = () => {
  return (
    <main>
      <div className="product_card">
        <div className="product_card_right">
          <picture>
            <source srcSet={Desktop} media="(min-width:48rem)"/>
            <img src={Mobile} alt="Appearance of perfume product " />
          </picture>
        </div>

        <div className="product_card_left">
          <p className="product_text">Perfume</p>
          <h2 className="product_heading"> Gabrielle Essence Eau De Parfum</h2>
          <p className="product_description">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <span className="product_price">$149.99</span>
          <s> $169.99</s>
           <div className="product_btn">
           <button type="button">
            <img src={Cart} alt="adding to cart"/>
            <span>Add to cart</span>
          </button>
           </div>
        </div>
      </div>
    </main>
  );
};

export default productCard;
