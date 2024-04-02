import React from 'react';
import ScrollToTop from '../../layouts/ScrollTop';
import ProductEdit from './ProductEdit';
import { useHistory } from 'react-router-dom';

const ProductTable = ({ data }) => {
    const history = useHistory();

    const handleEdit = (productId) => {
      history.push(`/product-edit/${productId}`);
    };
    
    return (
        <div>
            <table className="table table-striped table-hover table-responsive">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product) => (
                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.description}</td>
                            <td>
                                <button className="btn btn-sm btn-primary me-1" onClick={() => handleEdit(product.id)}>Edit</button>
                                <button className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ScrollToTop />
        </div>
    );
};

export default ProductTable;
