import SearchProduct from "@/components/shop/SearchProduct";
import { getSearchedProducts } from "@/db/query";

export default async function ShopPage({ params: { item } }) {
  const decodedQueryString = decodeURIComponent(item);
  const queryParams = decodedQueryString.split("&");

  let products = null;
  let categories = [];
  let minPrice = null;
  let maxPrice = null;
  let size = null;
  let id = null;

  queryParams.forEach((param) => {
    const [key, value] = param.split("=");

    switch (key) {
      case "categories":
        categories = value.split(",");
        break;
      case "min":
        minPrice = parseInt(value);
        break;
      case "max":
        maxPrice = parseInt(value);
        break;
      case "size":
        size = value;
        break;
      case "id":
        id = value;
        break;
      default:
        break;
    }
  });

  // console.log(categories, minPrice, maxPrice);
  if (id) {
    products = await getSearchedProducts(id, [], null, null, null);
  } else if (
    categories.length > 0 &&
    minPrice !== null &&
    maxPrice !== null &&
    size
  ) {
    products = await getSearchedProducts(
      null,
      categories,
      minPrice,
      maxPrice,
      null
    );
  } else if (categories.length > 0) {
    products = await getSearchedProducts(null, categories, null, null, null);
  }
  return <SearchProduct products={products} />;
}
