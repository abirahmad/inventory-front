import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductTable from './ProductTable';
import { productListAction } from '../../../actions/productAction';
import { Spinner } from 'react-bootstrap';

const ProductList = () => {

    const dispatch = useDispatch();
    const { productList, isLoading } = useSelector((state) => state.product);
console.log('productList', productList)
    useEffect(() => {
        dispatch(productListAction())
    }, []);


    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="card" style={{ width: 1000, maxHeight:"100%", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)' }}>
            <div className="card-body">
                <h5 className="card-title">Product List</h5>
                {productList.length > 0 ?
                    <ProductTable data={productList} /> :
                    <h5 className="text-center">No Data Available
                    <Spinner animation="border" size="sm" />
                    </h5>
                }
            </div>
        </div>
    </div>
    
    );
};


export default ProductList;
