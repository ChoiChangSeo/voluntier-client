import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import useAdmin from "../../../../src/components/commons/hooks/useAdmit";
import ProductWrite from "../../../../src/components/units/Product/productWrite/ProductWriteContainer";
const FETCH_PRODUCT = gql`
    query fetchProduct($productId:String!){
      fetchProduct(productId:$productId){
        id
        name
        price
        details
        createdAt
        productImage{
          imageUrl
        }
    }
  }
`

export default function ProductEditPage(){
    useAdmin()
    const router = useRouter()
    const {data} = useQuery(FETCH_PRODUCT,{
        variables:{productId:router.query.productId}
      })
    return(
    <ProductWrite data={data} isEdit={true}/>
    )
}