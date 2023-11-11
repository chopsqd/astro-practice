import type {IProduct} from "../types.ts";

interface ProductCardProps {
    product: IProduct
}

const ProductCard = ({product}: ProductCardProps) => {
    return <div className="border rounded mb-2 p-3">
        <h2 className="text-lg">{product.title}</h2>
        <p className="font-bold">{product.price} $</p>

        <p>{product.description}</p>
    </div>
};

export default ProductCard;