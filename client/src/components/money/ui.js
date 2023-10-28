import React from "react"

function Money({productObject: {amount, currency}}){
  return <p> {amount} {currency}</p>
}
export default Money