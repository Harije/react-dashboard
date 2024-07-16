import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from  'axios';
import { useSelector } from 'react-redux';

function Users(){

  const [userList,SetUserList]  =  useState([])
  useEffect(() =>{
    axios.get('https://dummyjson.com/users', {} )
    .then(function (response) {
      SetUserList(response.data.users);
      // swal("Success", "User added Successfully", "success");
    })
    .catch(function (error) {
      // console.log(error);
      // swal("Oops!", "Something went wrong!", "error");
    });
  }, []);


    return(
        <Container className='my-3'>
            <Link to="/Adduser" className='text-decoration-none bg-primary text-white py-2 px-3 rounded'>AddUser</Link>
            
            <Row className='my-4'>
            <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>age</th>
            
          </tr>
        </thead>
        <tbody>
          {userList.map((users) =>
          <tr>
            <td>{users.id}</td>
            <td>{users.firstName}</td>
            <td>{users.lastName}</td>
            <td>{users.email}</td>
            <td>{users.phone}</td>
            <td>{users.age}</td>
          </tr>
          )}
          
        </tbody>
      </Table>
            </Row>
        </Container>
      
    )
}
export default Users;