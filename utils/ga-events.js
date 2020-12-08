const addToCartGAEvent = (name, price, type) =>
  window.gtag("event", "add_to_cart", {
    items: [
      {
        item_id: name,
        item_name: name,
        item_category: type,
        price: price,
        currency: "EUR",
      },
    ],
    value: price,
  });

export { addToCartGAEvent };
