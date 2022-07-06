<script lang="ts">
  import type { Product } from './models/Product';
  import shoppingCartIcon from '../assets/icon-cart.svg';

  export let product: Product;
</script>

{#if product}
  <div class="preview-card">
    <div
      class="preview-card-image desktop"
      style="background-image: url({product.desktopImage})"
    />
    <div
      class="preview-card-image mobile"
      style="background-image: url({product.mobileImage})"
    />
    <div class="preview-card-content">
      <div class="preview-card-type">{product.type}</div>
      <h1 class="preview-card-title">{product.title}</h1>
      <p class="preview-card-description">{product.description}</p>
      <div class="preview-card-price">
        <span class="discounted-price">${product.discountPrice}</span>
        <span class="original-price">${product.price}</span>
      </div>
      <button type="button" class="preview-card-button">
        <img src={shoppingCartIcon} alt="cart icon" />
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
{/if}

<style>
  .preview-card {
    width: 100%;
    max-width: 593px;
    min-height: 446px;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
  }

  .preview-card-image {
    background-size: cover;
    background-position: center;
    background-color: #fafafa;
    background-repeat: no-repeat;
    transition: opacity 0.3s ease;
    overflow: hidden;
    opacity: 1;
  }

  .preview-card-image:hover {
    opacity: 0.93;
  }

  .preview-card-image.desktop {
    flex: 1 0 50%;
  }

  .preview-card-image.mobile {
    display: none;
  }

  .preview-card-content {
    flex: 1 0 50%;
    flex-shrink: 1;
    background-color: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .preview-card-type {
    text-transform: uppercase;
    color: #7d7d89;
    letter-spacing: 4px;
    font-weight: 500;
    font-size: 13px;
    font-family: Montserrat, sans-serif;
  }

  h1.preview-card-title {
    font-family: Fraunces, serif;
    font-size: 32px;
    line-height: 1;
  }

  p.preview-card-description {
    font-size: 15px;
    line-height: 1.5;
    font-weight: 400;
    color: #83828f;
    font-family: Montserrat, sans-serif;
  }

  .preview-card-price {
    display: flex;
    align-items: center;
  }

  .original-price {
    color: #818591;
    font-size: 13px;
    text-decoration: line-through;
    font-weight: 500;
    margin-left: 26px;
    font-family: Montserrat, sans-serif;
  }

  .discounted-price {
    color: #40836b;
    font-size: 32px;
    font-weight: bold;
    font-family: Fraunces, serif;
  }

  button.preview-card-button {
    display: block;
    border: none;
    background-color: #3d8168;
    padding: 14px;
    border-radius: 10px;
    color: #f3fffd;
    font-size: 14px;
    font-weight: 500;
    font-family: Montserrat, sans-serif;
    transition: background-color 0.3s ease;
    cursor: pointer;
  }

  button.preview-card-button:hover {
    background-color: rgb(61, 129, 104, 0.9);
  }

  button.preview-card-button:active {
    background-color: #184132;
  }

  button.preview-card-button img {
    position: relative;
    top: 2px;
    color: #f3fffd;
    margin-right: 8px;
    width: 14px;
  }

  @media screen and (max-width: 630px) {
    .preview-card {
      flex-direction: column;
    }
    .preview-card-image.desktop {
      display: none;
    }
    .preview-card-image.mobile {
      display: block;
      height: 240px;
      background-position: top;
    }
    .preview-card-type,
    .preview-card-title,
    .preview-card-price {
      margin-bottom: 1rem;
    }
    .preview-card-description {
      margin-bottom: 3rem;
    }
  }
</style>
