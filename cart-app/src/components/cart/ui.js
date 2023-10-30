import React from "react"
import { getCartItems } from "./api"
import { Money } from "../money/ui"
import { Product } from "../product/ui"
import { Quantity } from "./quantity"

export function Cart( {item, quantity, cost }){
  const items = getCartItems
  console.log(items)
  return (
    <tbody>
      <tr>
        <td>{(item = <Product />)}</td>
        <td>{(cost = <Money />)}</td>
        <td>{(quantity = <Quantity />)}</td>
      </tr>
    </tbody>
  );
}