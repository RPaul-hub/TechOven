'use client';
import PageHeading from "@/components/page-heading";
import { products } from "../../lib/product-data";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function CartPage() {

    const [cartItems, setCartItems] = useState(products.slice(0, 2)); // Example: first two products in cart

    return (
        <div>
            <PageHeading heading="Items in cart" subheading="Lorem ipsum dollar sit amet consectetur"/>
            <div className="mt-5">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[600px]">Product</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead className="text-right">Total Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {cartItems.map(product => (
                            <TableRow key={product.id}>
                                <TableCell className="font-medium">{product.name}</TableCell>
                                <TableCell>$ {product.offerprice}</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell className="text-right">$ {product.offerprice}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$300.00</TableCell>
                        </TableRow>
                    </TableFooter>
                    </Table>
            </div>
            <div className="mt-5 w-full flex justify-end">
                <button className="w-fit p-2 px-6 border-2 text-sm font-medium bg-rose-500 text-white rounded-lg hover:cursor-pointer">Checkout</button>
            </div>
        </div>
    );
}   

export default CartPage;