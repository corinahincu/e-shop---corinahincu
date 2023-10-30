import {Money} from '../money/model'

export class CartItem {
  constructor(item, quantity) {
    this.item = item
    this.quantity = quantity
    this.cost = new Money(
      item.price.amount * quantity,
      item.price.currency
    )
  }
}
