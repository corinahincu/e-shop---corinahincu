import { CartItem } from "../cart/model";

export const getCartItems = () => {
  const items = [
    {
      id: 1,
      name: "iphone",
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-max-graphite-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072989055",
      price: {
        amount: 1300,
        currency: "EUR"
      },
      quantity: 1,
    }
  ]
  return items.map( item => {
    return new CartItem(item)
  })
};


