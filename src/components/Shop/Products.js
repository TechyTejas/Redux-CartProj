import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  
const Sample_PRODUCTS=[
  {id:"t1", 
  price:60,
  title:"Yamaha",
   description:'Yamaha goes like gun...'},
   {id:"t2", 
  price:50,
  title:"Pulsar",
   description:'Heavy bikes for heavy riders'}
]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {Sample_PRODUCTS.map((product)=>(
            <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
