import classNames from 'classnames';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Col, Form, Label, Row } from 'reactstrap';
import { Block, BlockDes, BlockTitle, OverlineTitle } from '../../../components/Component';
export default function PreviousInsurer(props, { alter }) {
    const [changeowner, setChangeowner] = useState("yes");
    const [claimlastyear, setClaimlastyear] = useState("yes");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onFormSubmit = (e) => {
        props.handleNext()
    };
    const formClass = classNames({
        "form-validate": true,
        "is-alter": alter,
    });

    return (
        <React.Fragment>
            <Block>
                <BlockTitle tag="h4">
                    Create New Claim Request
                </BlockTitle>
                <BlockDes>
                    <p>Basic Info, like insured name and address for which claim needs to be processed</p>
                </BlockDes>



                <Form className={formClass} onSubmit={handleSubmit(onFormSubmit)}>
                    <Row className='gy-4 mt-1'>
                        <Col sm="3" md="3">
                            <div>
                                <Label>
                                    Previous Insurer <span className='text-danger'>*</span>
                                </Label>
                            </div>
                            <div>
                                <select type="select" className="form-control form-select" {...register('previous_insurer', {
                                    required: true,
                                })}>>
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                {errors.previous_insurer && <span className="invalid">This field is required</span>}
                            </div>
                        </Col>
                        <Col sm="3">
                            <div>
                                <Label>
                                    Previous Policy Type <span className='text-danger'>*</span>
                                </Label>
                            </div>
                            <div>
                                <select type="select" className="form-control form-select" {...register('policy_type', {
                                    required: true,
                                })}>>
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                {errors.policy_type && <span className="invalid">This field is required</span>}
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-2' >
                        <OverlineTitle tag="span" className="preview-title-lg">Policy Dates</OverlineTitle>

                    </Row>

                    <Row className='gy-4'>
                        <Col sm="3">
                            <div className="form-group">
                                <Label>
                                    Previous Policy Start Date <span className='text-danger'>*</span>
                                </Label>

                                <div className="form-control-wrap">
                                    <input className="form-control" type="date" id="default-0" placeholder="DD/MM/YYYY" {...register('policy_start_date', { required: true })}
                                    />
                                    {errors.policy_start_date && <span className="invalid">This field is required</span>}
                                </div>
                            </div>
                        </Col>
                        <Col sm="3">
                            <div>
                                <Label>
                                    Previous Policy End Date <span className='text-danger'>*</span>
                                </Label>
                                <div className="form-control-wrap">
                                    <input className="form-control" type="date" id="default-0" placeholder="DD/MM/YYYY" {...register('policy_end_date', { required: true })}
                                    />
                                    {errors.policy_end_date && <span className="invalid">This field is required</span>}
                                </div>
                            </div>
                        </Col>
                        <Col sm="3">
                            <div>
                                <Label>
                                    Previous TP Policy End Date <span className='text-danger'>*</span>
                                </Label>
                                <div className="form-control-wrap">
                                    <input className="form-control" type="date" id="default-0" placeholder="DD/MM/YYYY" {...register('tp_policy_end_date', { required: true })}
                                    />
                                    {errors.tp_policy_end_date && <span className="invalid">This field is required</span>}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row className="mt-2">
                        <Label>Was the Vehicle Ownership Changed in the past 12 Months ? <span className="text-danger">*</span></Label>
                    </Row>
                    <Row>
                        <Col>
                            <div className="preview-block">
                                <div className="g-4 align-center flex-wrap">
                                    <div className="g">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                name="vehicle ownership"
                                                id="vehicle ownership yes"
                                                value="yes"
                                                onChange={(e) => setChangeowner(e.target.value)}
                                            />
                                            <label className="custom-control-label" htmlFor="vehicle ownership yes">
                                                YES
                                            </label>
                                        </div>
                                    </div>
                                    <div className="g ">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                name="vehicle ownership"
                                                id="vehicle ownership no"
                                                value="no"
                                                onChange={(e) => setChangeowner(e.target.value)}
                                            />
                                            <label className="custom-control-label" htmlFor="vehicle ownership no">
                                                NO
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>

                    </Row>

                    <Row className="mt-2">
                        <Label>Was there any Claim in last year ? <span className="text-danger">*</span></Label>
                    </Row>
                    <Row>
                        <Col>
                            <div className="preview-block">
                                <div className="g-4 align-center flex-wrap">
                                    <div className="g">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                name="claim last year"
                                                id="claim last year yes"
                                                value={"yes"}
                                                onChange={(e) => setClaimlastyear(e.target.value)}
                                            />
                                            <label className="custom-control-label" htmlFor="claim last year yes">
                                                YES
                                            </label>
                                        </div>
                                    </div>
                                    <div className="g">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                name="claim last year"
                                                id="claim last year no"
                                                value={"no"}
                                                onChange={(e) => setClaimlastyear(e.target.value)}
                                            />
                                            <label className="custom-control-label" htmlFor="claim last year no">
                                                NO
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>

                    </Row>


                    {(changeowner === "no" && claimlastyear === "no") && <Row className='mt-2 '>
                        <Label>Previous Claim Bonus (NCB) ? <span className="text-danger">*</span></Label>
                        <Col>
                            <div className="preview-block">
                                <div className="g-4 align-center flex-wrap">
                                    <div className="g">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                name="claim bonus NCB"
                                                id="NCB-0"

                                            />
                                            <label className="custom-control-label" htmlFor="NCB-0">
                                                0
                                            </label>
                                        </div>
                                    </div>
                                    <div className="g">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                name="claim bonus NCB"
                                                id="NCB-20"
                                            />
                                            <label className="custom-control-label" htmlFor="NCB-20">
                                                20
                                            </label>
                                        </div>
                                    </div>
                                    <div className="g">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                name="claim bonus NCB"
                                                id="NCB-25"
                                            />
                                            <label className="custom-control-label" htmlFor="NCB-25">
                                                25
                                            </label>
                                        </div>
                                    </div>
                                    <div className="g">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                name="claim bonus NCB"
                                                id="NCB-35"
                                            />
                                            <label className="custom-control-label" htmlFor="NCB-35">
                                                35
                                            </label>
                                        </div>
                                    </div>
                                    <div className="g">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                name="claim bonus NCB"
                                                id="NCB-45"
                                            />
                                            <label className="custom-control-label" htmlFor="NCB-45">
                                                45
                                            </label>
                                        </div>
                                    </div>
                                    <div className="g">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                name="claim bonus NCB"
                                                id="NCB-50"
                                            />
                                            <label className="custom-control-label" htmlFor="NCB-50">
                                                50
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>

                    </Row>}
                    <Row className='gy-2 mt-4 gx-2'>
                        <Col md="2">
                            <Button className="btn btn-dim bg-purple-dim text-purple" size="md" onClick={() => props.handleBack()}>GO BACK</Button>
                        </Col>
                        <Col md="2">
                            <Button color='primary' type='submit' size="md" >NEXT</Button>
                        </Col>
                    </Row>
                </Form>


            </Block>
        </React.Fragment >
    )
}
