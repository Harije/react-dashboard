import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

function Products(){
    const DashboardState = useSelector((state) => state.DashboardReducer)
    const ProductsList = DashboardState.productslist; 

    console.log("---ProductsList---",ProductsList);
    return(
       <div className="container">
             <Row>
            <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>category</th>
            <th>brand</th>
            <th>price</th>
            
          </tr>
        </thead>
        <tbody>
          {ProductsList.map((products) =>
          <tr>
            <td>{products.id}</td>
            <td>{products.title}</td>
            <td>{products.category}</td>
            <td>{products.brand}</td>
            <td>{products.price}</td>
          </tr>
          )}
          
        </tbody>
      </Table>
            </Row>
       </div>
    )
}
export default Products;