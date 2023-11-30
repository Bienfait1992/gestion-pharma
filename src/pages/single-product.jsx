import { useParams } from "react-router-dom";
import ProductService from "../models/Services/productService.jsx"
import ProductPreview from "../components/product-preview/product-preview.jsx";

function SingleProduct(){
    const { id } = useParams();
    const data = ProductService.getProducts();
    const product = data.find((product) => product.id === id);
    return(
        <>
        <ProductPreview product={product} seeMore={true}></ProductPreview>
        </>
    );
}
export default SingleProduct;