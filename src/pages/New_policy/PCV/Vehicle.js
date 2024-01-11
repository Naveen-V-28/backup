import React from 'react';
import { useForm } from "react-hook-form";

import { Button, Col, Form, Label, Row } from "reactstrap";
import {
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    OverlineTitle
} from '../../../components/Component';

import classNames from 'classnames';

import Head from '../../../layout/head/Head';
export default function Vehicle(props, { alter }) {
/*     const [rto, setRto] = useState("");
 */    const { register, handleSubmit, formState: { errors } } = useForm();
    const onFormSubmit = (e) => {
        props.handleNext()
    };
    const formClass = classNames({
        "form-validate": true,
        "is-alter": alter,
    });
    /*  const handleChange1 = (e) => {
         setRto(e.target.value);
         console.log(rto)
     } */
    return (
        <React.Fragment>
            <Head title="Claims" />

            <BlockHead size="sm">

                <BlockHeadContent>
                    <BlockTitle page>Create New Claim Request</BlockTitle>
                    <span >Basic info, like insured name and address for which claim needs to be processed</span>
                </BlockHeadContent>

            </BlockHead>
            <Form className={formClass} onSubmit={handleSubmit(onFormSubmit)}>


                <Row className="gy-4">
                    <Col md="4">
                        <div className="form-group">
                            <Label htmlFor="default-0" className="form-label">
                                Vehicle Registration Number<code className='text-danger'>*</code>
                            </Label>
                            <div className="form-control-wrap">
                                <input className="form-control" type="text" id="default-0" placeholder="XXXX"
                                    {...register('registration_number', {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/i,
                                            message: "Invalid Registration Number",
                                        },
                                    })}
                                />
                                {errors.registration_number && errors.registration_number.type === "required" && <span className="invalid">This is required</span>}
                                {errors.registration_number && errors.registration_number.type === "pattern" && (
                                    <span className="invalid">{errors.registration_number.message}</span>
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="form-group">
                            <Label htmlFor="default-4" className="form-label">
                                RTO Location<code className='text-danger'>*</code>
                            </Label>
                            <div className="form-control-wrap">
                                <div className="form-control-select">
                                    <select className="form-control form-select" type="select" name="select" id="default-4"
                                        {...register('rto_location', {
                                            required: true,
                                        })}>
                                        <option value="">Select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                    {errors.rto_location && <span className="invalid">This field is required</span>}
                                </div>
                            </div>
                        </div>

                    </Col>

                    <Col md="4">
                        <div className="form-group">
                            <Label htmlFor="default-0" className="form-label">
                                Registration Date<code className='text-danger'>*</code>
                            </Label>
                            <div className="form-control-wrap">
                                <input className="form-control" type="date" id="default-0" placeholder="DD/MM/YYYY" {...register('registration_date', { required: true })}
                                />
                                {errors.registration_date && <span className="invalid">This field is required</span>}
                            </div>
                        </div>
                    </Col>
                </Row>



                <OverlineTitle tag="span" className="preview-title-lg mt-4">
                    {" "}
                    MANUFACTURER DETAILS
                </OverlineTitle>

                <Row className="gy-4 pt-1">
                    <Col md="3">
                        <div className="form-group">
                            <Label htmlFor="default-1" className="form-label">
                                Make<code className='text-danger'>*</code>
                            </Label>
                            <div className="form-control-wrap">
                                <div className="form-control-select">
                                    <select className="form-control form-select" type="select" name="select" id="default-1"{...register('make', {
                                        required: true,
                                    })}>

                                        <option value="">Select</option>
                                        <option value="1">Option select name1</option>
                                        <option value="2">Option select name2</option>
                                    </select>
                                    {errors.make && <span className="invalid">This field is required</span>}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="form-group">
                            <Label htmlFor="default-2" className="form-label">
                                Model<code className='text-danger'>*</code>
                            </Label>
                            <div className="form-control-wrap">
                                <div className="form-control-select">
                                    <select className="form-control form-select" type="select" name="select" id="default-2"  {...register('model', {
                                        required: true,
                                    })}>

                                        <option value="">Select</option>
                                        <option value="1">Option select name</option>
                                        <option value="2">Option select name</option>
                                    </select>
                                    {errors.model && <span className="invalid">This field is required</span>}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="form-group">
                            <Label htmlFor="default-3" className="form-label">
                                Sub Model<code className='text-danger'>*</code>
                            </Label>
                            <div className="form-control-wrap">
                                <div className="form-control-select">
                                    <select className="form-control form-select" type="select" name="select" id="default-3"  {...register('submodel', {
                                        required: true,
                                    })}>

                                        <option value="">Select</option>
                                        <option value="1">Option select name</option>
                                        <option value="2">Option select name</option>
                                    </select>
                                    {errors.submodel && <span className="invalid">This field is required</span>}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="form-group">
                            <Label htmlFor="default-4" className="form-label">
                                Fuel Type<code className='text-danger'>*</code>
                            </Label>
                            <div className="form-control-wrap">
                                <div className="form-control-select">
                                    <select className="form-control form-select" type="select" name="select" id="default-4"  {...register('fuel', {
                                        required: true,
                                    })}>

                                        <option value="">Select</option>
                                        <option value="petrol">Petrol</option>
                                        <option value="diesel">Diesel</option>

                                    </select>
                                    {errors.fuel && <span className="invalid">This field is required</span>}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="gy-4 mt-1">
                    <Col md="3">
                        <div className="form-group">
                            <Label htmlFor="default-0" className="form-label">
                                Manufacturing Year<code className='text-danger'>*</code>
                            </Label>
                            <div className="form-control-wrap">
                                <input className="form-control" type="text" id="default-0" placeholder="YYYY" {...register('manufacturing_year', { required: true })}
                                />
                                {errors.manufacturing_year && <span className="invalid">This field is required</span>}
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="form-group">
                            <Label htmlFor="default-0" className="form-label">
                                Engine Number<code className='text-danger'>*</code>
                            </Label>
                            <div className="form-control-wrap">
                                <input className="form-control" type="text" id="default-0" placeholder="XXXX" {...register('engine_number', { required: true })}
                                />
                                {errors.engine_number && <span className="invalid">This field is required</span>}
                            </div>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="form-group">
                            <Label htmlFor="default-0" className="form-label">
                                Chassis Number<code className='text-danger'>*</code>
                            </Label>
                            <div className="form-control-wrap">
                                <input className="form-control" type="text" id="default-0" placeholder="XXXX" {...register('chassis_number', { required: true })}
                                />
                                {errors.chassis_number && <span className="invalid">This field is required</span>}
                            </div>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="form-group">
                            <Label htmlFor="default-0" className="form-label">
                                CC<code className='text-danger'>*</code>
                            </Label>
                            <div className="form-control-wrap">
                                <input className="form-control" type="text" id="default-0" placeholder="XXXX" {...register('cc', { required: true })}
                                />
                                {errors.cc && <span className="invalid">This field is required</span>}
                            </div>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="form-group">
                            <Label htmlFor="default-0" className="form-label">
                                Seating Capacity<code className='text-danger'>*</code>
                            </Label>
                            <div className="form-control-wrap">
                                <input className="form-control" type="text" id="default-0" placeholder="XX" {...register('seating_capacity', { required: true })}
                                />
                                {errors.seating_capacity && <span className="invalid">This field is required</span>}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='gy-2 mt-4 gx-2'>
                    <Col md="2">
                        <Button className="btn btn-dim bg-purple-dim text-purple" size="md" onClick={() => props.handleBack()}>GO BACK</Button>
                    </Col>
                    <Col md="2">
                        <Button color='primary' type='submit' size="md" >NEXT</Button>
                    </Col>

                </Row>



            </Form>

        </React.Fragment>
    )
}
