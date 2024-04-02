import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword } from '../../../actions/userAction';
import { ToastContainer, toast } from 'react-toastify';
import { loginAction } from '../../../actions/authActions';
import { useFormik } from "formik";
import { validates } from '../../../utils/Validation';
import { productAddAction } from '../../../actions/productAction';
import { Spinner } from 'react-bootstrap';

const ProductAdd = (props) => {

    const dispatch = useDispatch();
    const { productForm, isLoading } = useSelector((state) => state.product);
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Basic validation
    //     if (username.trim() === '') {
    //         toast.error('Please enter your username!');
    //         return;
    //     }

    //     if (password.trim() === '') {
    //         toast.error('Please enter your password!');
    //         return;
    //     }
    //     // Simulate login (replace with actual login logic)
    //     dispatch(loginAction(username, password, props.history)); // Dispatch login success action
    //     dispatch(setUsername(username)); // Dispatch action to update username
    //     dispatch(setPassword(password));
    // };

    const {
        errors,
        handleSubmit,
        values,
        handleChange,
        resetForm
    } = useFormik({
        initialValues: {
            name: '',
            quantity: 0,
            description: '',
            image: ''
        },

        validationSchema: validates,
        handleChange: () => { },
        onSubmit: (values, { resetForm }) => {
            let cp = { ...values };
            //   cp.offDayList = offDays;
            //   cp.grossSalary = salaryCalculation.gross;
            //   cp.teamID = 1;
            //   cp.contactPeriod = 1;
            //   cp.identificationType = 1;
            //   // cp.nomineeNid = "nomineeNid"
            //   // cp.nomineeContact = "nomineeContact"
            //   // console.log('cp :>> ', cp);
            //   let formData = new FormData();


            //   formData.append("employee", employeePhoto);
            //   formData.append("nominee", nomeineePhoto);

            dispatch(productAddAction(cp));
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
                                    value={values.name}
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
                                    value={values.quantity}
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
                                    value={values.description}
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


export default ProductAdd;
