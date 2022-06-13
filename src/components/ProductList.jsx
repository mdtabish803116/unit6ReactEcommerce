

const ProductList = ({data , handleDelete}) => {
    console.log(data);
    return (
          <div style = {{
               display : "grid",
               gridTemplateColumns : "auto auto auto",
               gridGap : "30px",
               marginTop : "100px"
          }}>
            {
              data.map((item) => {
                   return (
                         <div style = {{
                               border : "1px solid red"
                         }}>
                                <img src = {item.image}></img>
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <p>{item.category}</p>
                                <button onClick = {() => handleDelete(item.id)}>Delete</button>
                         </div>
                   )
              })     
            }
          </div>
    )
}
     

export default ProductList;