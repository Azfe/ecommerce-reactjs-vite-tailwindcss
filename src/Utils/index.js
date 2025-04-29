/**
 * This function calculates total price of all products in the cart.
 * @param {Array} cartProducts cartProducts: Array of objects with the following properties:
 * - id: number, title: string, price: number, images: Array<string>.
 * @param {number} cartProducts[].id: Unique identifier for the product. 
 * @returns {number} totalPrice: Total price of the products in the cart.
 */
export const totalPrice = (cartProducts) => {
    //return cartProducts.reduce((acc, curr) => acc + curr.price, 0);
    let sum = 0;
    cartProducts.forEach((product) => {
        sum += product.price;
    });
    return sum;
}