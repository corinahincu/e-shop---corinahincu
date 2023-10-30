import React from "react"
import { getCartItems } from "./api"
import { Money } from "../money/ui"
import { Product } from "../product/ui"
import { Quantity } from "./quantity"

export function Cart() {
  const items = getCartItems();

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Cost</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>
              <Product productObject={item.product} />
            </td>
            <td>
              <Money money={item.cost} />
            </td>
            <td>
              <Quantity quantity={item.quantity} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}