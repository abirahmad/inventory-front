import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword } from '../../../actions/userAction';
import { ToastContainer, toast } from 'react-toastify';
import { loginAction } from '../../../actions/authActions';
import { useFormik } from "formik";
import { validates } from '../../../utils/Validation';
import { productAddAction, productEditAction, productSingleAction } from '../../../actions/productAction';
import { Spinner } from 'react-bootstrap';

const ProductEdit = (props) => {
    const dispatch = useDispatch();
    const { productDeatils, isLoading } = useSelector((state) => state.product);
    let productId=props.match.params.id;
    const [formValues, setFormValues] = useState({
        name: '',
        quantity: 0,
        description: ''
    });
    useEffect(() => {
        dispatch(productSingleAction(productId))
    }, []);

    useEffect(() => {
        setFormValues(productDeatils);
    }, [productDeatils]);

    const handleChange = (e) => {
        const { value, name } = e.target;
    
        setFormValues((prev) => {
          return { ...prev, [name]: value };
        });
      };


    const {
        errors,
        handleSubmit,
    } = useFormik({
        initialValues: formValues,

        // validationSchema: validates,
        handleChange: () => { },
        onSubmit: () => {
            let cp = { ...formValues };
            //   let formData = new FormData();


            //   formData.append("employee", employeePhoto);
            //   formData.append("nominee", nomeineePhoto);

            dispatch(productEditAction(cp,productId));
        },
    });

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="card" style={{ width: 1000, height: 500, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)' }}>
                <div className="card-body">
                    <h5 className="card-title">Product Add</h5>
                    <form onSubmit={handleSubmit}>
                        <div className='col-12 row'>
                            <div className="mb-3 col-6">
                                <label htmlFor="username" className="form-label">Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='name'
                                    value={formValues.name}
                                    onChange={handleChange}
                                    aria-describedby="usernameHelp"
                                />
                                <p className="text-danger"> {errors.name}</p>
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="password" className="form-label">Quantity</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="quantity"
                                    value={formValues.quantity}
                                    onChange={handleChange}
                                />
                                <p className="text-danger"> {errors.quantity}</p>
                            </div>
                        </div>
                        <div className='col-12 row'>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Description</label>
                                <textarea
                                    className='form-control'
                                    name='description'
                                    value={formValues.description}
                                    onChange={handleChange}>

                                </textarea>
                                <p className="text-danger"> {errors.description}</p>
                            </div>
                        </div>

                        <div className="d-grid gap-2">
                            {isLoading == true ?
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                    <Spinner animation="border" size="sm" />
                                </button> :
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            }

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default ProductEdit;
