import "./style.css";
import { Link } from "react-router-dom";
import Desktop from "../assets/images/image-product-desktop.jpg";
import Mobile from "../assets/images/image-product-mobile.jpg";
import Cart from "../assets/images/icon-cart.svg";

const productCard = () => {
  return (
    <main className="body">
      <div className="product_card">
        <div className="product_card_right">
          <picture>
            <source srcSet={Desktop} media="(min-width:48rem)" />
            <img src={Mobile} alt="Appearance of perfume product " />
          </picture>
        </div>
        <div className="product_card_left">
          <p className="product_text">perfume</p>
          <h2 className="product_heading"> Gabrielle <br/>Essence Eau <br/>De Parfum</h2>
          <p className="product_description">
            A floral, solar and voluptuous <br/>interpretation composed by <br/>Olivier
            Polge, Perfumer-Creator<br/> for the House of CHANEL.
          </p>
         <div className="product_prices">
              <span className="product_card_price">$149.99</span>
          <s> $169.99</s>
         </div>
          <div className="product_btn">
            <button type="button">
              <img src={Cart} alt="adding to cart" />
              <span className="cart">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </Link>
        . Coded by <Link to="https://github.com/jaysonalfie">Jayson Alfie</Link>.
      </div>
    </main>
  );
};

export default productCard;
