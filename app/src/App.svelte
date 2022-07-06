<script lang="ts">
  import { onMount } from 'svelte';
  import { Product } from './lib/models/Product';

  import ProductPreview from './lib/ProductPreview.svelte';

  let loading: boolean;
  let product: Product;

  onMount(async () => {
    loading = true;
    const response = await (await fetch('data/product.json')).json();
    product = new Product(
      response.type,
      response.title,
      response.description,
      response.price,
      response.discountPrice,
      response.desktopImage,
      response.mobileImage,
    );
    loading = false;
  });
</script>

<main>
  {#if loading}
    Loading...
  {:else}
    <div class="preview-container">
      <ProductPreview {product} />
    </div>
  {/if}
</main>

<style>
  :global * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #f2e9e2;
  }

  main {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
</style>
