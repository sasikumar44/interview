import axios from 'axios';
import React,{useEffect,useState} from 'react';

const Order =() =>{
    const [order, setorder]=useState();
    useEffect(()=>{
        axios.get('https://my-json-server.typicode.com/dsrishi/orders/orders')
        .then(res=>{
            console.log(res.data)
            setorder(res.data)
    })
},[])
    return <div >
<h3>Orders</h3>
<select className="form-control"
onChange
>
</select>


<p>Filter By brach</p>



<input class="form-control" id="myInput" type="text" placeholder="Search.."></input>
<p> Filter By Service</p>
<input class="form-control" id="myInput" type="text" placeholder="Search.."></input>

{
    !order ? ("No data found"):(
        <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th> ORDER ID</th>
                    <th> CUSTOMER</th>
                    <th> ADDED BY</th>
                    <th> REFERENCE</th>
                    <th> BRANCH</th>
                    <th> SERVICE</th>
                    <th> STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    order.map((order,index)=>(
                        <tr key={index}>
                            <input type="checkbox"></input>
                            <td>{order.id}</td>
                            <td>{order.customer.name}<br></br>{order.customer.city}</td>
                            <td>{order.addedby}</td>
                            <td>{order.reference}</td>
                            <td>{order.branch}</td>
                            <td>{order.service}</td>
                            <td class='text-success'>{order.status}</td>
                            </tr>

                    )
                    )
                }
            </tbody>
        </table>
    )
}
         
    </div>;
}

export default Order;  