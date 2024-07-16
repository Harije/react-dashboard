import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AC_GET_PRODUCTS_LIST } from '../actions/dashboard';
import { useSelector } from 'react-redux';

function Dashboard(){

    const DashboardState = useSelector((state) => state.DashboardReducer)
    const productList = DashboardState.productslist;  
    
    
    const dispatch=useDispatch();

    useEffect(() =>{
       dispatch(AC_GET_PRODUCTS_LIST());
    // AC_GET_PRODUCTS_LIST();
      }, []);

    return(
        <Container>
            <Row className='gap-4 my-4'>
                <Col className='bg-danger ms-lg-4 rounded col-lg-3 col-12 text-white' style={{height:"150px"}}>
                    <h1 className='fs-2 '>Users</h1>
                    <p>18</p>
                </Col>
                <Col className='bg-success rounded col-lg-3 col-12 text-white'  style={{height:"150px"}}>
                    <h1 className='fs-2'>products</h1>
                    <p>{productList.length}</p>
                </Col>
                <Col className='bg-info me-lg-4 rounded col-lg-3 col-12' style={{height:"150px"}}>
                    <h1 className='fs-2'>Vendors</h1>
                    <p>18</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Dashboard;