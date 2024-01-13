import classNames from 'classnames';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Select from 'react-select';
import { Button, Col, Form, Label, Row } from 'reactstrap';
import { Block, BlockHead, BlockHeadContent, BlockTitle, OverlineTitle } from '../../../components/Component';
import headers from '../token';
import { UserContext } from './Vehicledetails';
export default function PreviousInsurer(props, { alter }) {
    const { privateCar, setPrivateCar } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors }, setValue, clearErrors } = useForm();
    const onFormSubmit = (e) => {
        if (privateCar.customerType === "Individual") {
            setPrivateCar({ ...privateCar, additionalCovers: [...privateCar.additionalCovers, "COMPULSORY PERSONAL ACCIDENT(OWNER DRIVER)"], policyStartDate: date_start, policyEndDate: date_end, previousInsurerCode: previousInsuercode, save: "true", recalculate: "true" })
        }
        else if (privateCar.customerType === "Company") {
            setPrivateCar({ ...privateCar, additionalCovers: [...privateCar.additionalCovers, "LEGAL LIABILITY PAID TO EMPLOYEE"], policyStartDate: date_start, policyEndDate: date_end, previousInsurerCode: previousInsuercode, save: "true", recalculate: "true" })
        }
        props.handleNext()
    };

    const [insurer, setInsurer] = useState();
    useEffect(() => {
        fetch('https://pot.fapremium.net/masters/api/getInsurerDetail.json', {
            method: 'POST',
            headers,
        })
            .then((response) => response.json())
            .then((responseData) => {
                setInsurer(responseData.insurerList);
            })
    }, []);




    let previous_insurer = [];
    if (insurer !== undefined) {
        insurer.map((item) => {
            return (
                previous_insurer.push({
                    value: item.insurerName, label: item.insurerName
                })
            );
        })
    }

    let previousInsuercode;
    if (privateCar.previousInsurer !== "") {
        previousInsuercode = insurer.filter((name) => (name.insurerName).includes(privateCar.previousInsurer))[0].insurerCode
    }

    const previous_insurer_type = [
        { value: "COMPREHENSIVE", label: "COMPREHENSIVE" },
        { value: "THIRD PARTY", label: "THIRD PARTY" },
        { value: "STAND ALONE POLICY", label: "STAND ALONE POLICY" },
    ];

    const formClass = classNames({
        "form-validate": true,
        "is-alter": alter,
    });
    let date_start;
    let date_end;
    if (privateCar.previousOdPolicyExpiryDate !== "" && privateCar.policyType === "Own Damage") {
        let date_od1 = new Date(privateCar.previousOdPolicyExpiryDate);
        date_od1.setDate(date_od1.getDate() + 1)
        let date_tp1 = new Date(date_od1);
        date_tp1.setDate(date_tp1.getDate() + (365))
        date_start = moment(date_od1).format('YYYY-MM-DD');
        date_end = moment(date_tp1).format('YYYY-MM-DD');
    }
    else if (privateCar.previousPolicyExpiryDate !== "") {
        let date_od1 = new Date(privateCar.previousPolicyExpiryDate);
        date_od1.setDate(date_od1.getDate() + 1)
        let date_tp1 = new Date(date_od1);
        date_tp1.setDate(date_tp1.getDate() + (365))
        date_start = moment(date_od1).format('YYYY-MM-DD');
        date_end = moment(date_tp1).format('YYYY-MM-DD');
    }
    return (
        <React.Fragment>

            <BlockHead size="sm">
                <BlockHeadContent>
                    <BlockTitle page>Create New Claim Request</BlockTitle>
                    <span >Basic info, like insured name and address for which claim needs to be processed</span>
                </BlockHeadContent>
            </BlockHead>
            <Block className="mt-2" >

                <Form className={formClass} onSubmit={handleSubmit(onFormSubmit)}>
                    <Row className='gy-4 '>
                        <Col sm="4" >
                            <div>
                                <Label>
                                    Previous Insurer <span className='text-danger'>*</span>
                                </Label>
                            </div>
                            <div >
                                {/* <select type="select" className="form-control form-select" {...register('previous_insurer', {
                                    required: true,
                                })}>>
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select> */}
                                <Select className='z-2'
                                    {...register('pre_ins', { required: true })}
                                    options={previous_insurer}
                                    onChange={(selectedOption) => {
                                        setValue('pre_ins', selectedOption?.value);
                                        clearErrors('pre_ins');
                                        setPrivateCar({ ...privateCar, previousInsurer: selectedOption?.value })
                                    }}

                                />{errors.pre_ins && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This field is required</span>}

                            </div>
                        </Col>
                        <Col sm="4">
                            <div>
                                <Label>
                                    Previous Policy Type <span className='text-danger'>*</span>
                                </Label>
                            </div>
                            <div >
                                {/*  <select type="select" className="form-control form-select" {...register('policy_type', {
                                    required: true,
                                })}>>
                                    <option value="">Select</option>
                                    <option value="1">COMPREHENSIVE </option>
                                    <option value="2">THIRD PARTY</option>
                                    <option value="3">STAND ALONE POLICY</option>
                                </select>
                                {errors.policy_type && <span className="invalid">This field is required</span>} */}
                                <Select
                                    {...register('pre_ins_typ', { required: true })}
                                    options={previous_insurer_type}
                                    onChange={(selectedOption) => {
                                        setValue('pre_ins_typ', selectedOption?.value);
                                        clearErrors('pre_ins_typ');
                                        setPrivateCar({ ...privateCar, previousPolicyType: selectedOption?.value })
                                    }}

                                />{errors.pre_ins_typ && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This field is required</span>}
                            </div>
                        </Col>
                    </Row>

                    <Row className='gy-2 mt-2' >
                        <OverlineTitle tag="span" className="preview-title-lg">Policy Dates</OverlineTitle>

                    </Row>
                    {(privateCar.policyType === "Rollover" || privateCar.policyType === "Third Party") && <Row >
                        <Col sm="4">
                            <div>
                                <Label>
                                    Previous Policy Expiry Date <span className='text-danger'>*</span>
                                </Label>
                                <div className="form-control-wrap" onChange={(e) => setPrivateCar({ ...privateCar, previousPolicyExpiryDate: e.target.value })}>
                                    <input className="form-control" type="date" id="previous_policy_expiry_date" placeholder="DD/MM/YYYY" {...register('previous_policy_expiry_date', { required: true })}
                                    />
                                    {errors.previous_policy_expiry_date && <span className="invalid">This field is required</span>}
                                </div>
                            </div>
                        </Col>

                    </Row>}
                    {privateCar.policyType === "Own Damage" && <Row >
                        <Col md="4">
                            <div>
                                <Label>
                                    Previous OD Policy Expiry Date <span className='text-danger'>*</span>
                                </Label>
                                <div className="form-control-wrap" onChange={(e) => setPrivateCar({ ...privateCar, previousOdPolicyExpiryDate: e.target.value })}>
                                    <input className="form-control" type="date" id="previous_od_policy_expiry_date" placeholder="DD/MM/YYYY" {...register('previous_od_policy_expiry_date', { required: true })}
                                    />
                                    {errors.previous_od_policy_expiry_date && <span className="invalid">This field is required</span>}
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div>
                                <Label>
                                    Previous TP Policy Start Date <span className='text-danger'>*</span>
                                </Label>
                                <div className="form-control-wrap" onChange={(e) => setPrivateCar({ ...privateCar, previousTpPolicyStartDate: e.target.value })}>
                                    <input className="form-control" type="date" id="previous_tp_policy_start_date" placeholder="DD/MM/YYYY" {...register('previous_tp_policy_start_date', { required: true })}
                                    />
                                    {errors.previous_tp_policy_start_date && <span className="invalid">This field is required</span>}
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div>
                                <Label>
                                    Previous TP Policy Expiry Date <span className='text-danger'>*</span>
                                </Label>
                                <div className="form-control-wrap" onChange={(e) => setPrivateCar({ ...privateCar, previousTpPolicyExpiryDate: e.target.value })}>
                                    <input className="form-control" type="date" id="previous_tp_policy_expiry_date" placeholder="DD/MM/YYYY" {...register('previous_tp_policy_expiry_date', { required: true })}
                                    />
                                    {errors.previous_tp_policy_expiry_date && <span className="invalid">This field is required</span>}
                                </div>
                            </div>
                        </Col>


                    </Row>}

                    <Row className='gy-2 mt-1'>

                        <Col sm="4">
                            <div className="form-group">
                                <Label>
                                    Policy Start Date <span className='text-danger'>*</span>
                                </Label>

                                <div className="form-control-wrap" onChange={(e) => setPrivateCar({ ...privateCar, policyStartDate: e.target.value })}>
                                    <input disabled className="form-control" type="date" id="default-0"
                                        value={date_start}
                                        placeholder="DD/MM/YYYY"
                                    />

                                </div>
                            </div>
                        </Col>
                        <Col sm="4">
                            <div>
                                <Label>
                                    Policy End Date <span className='text-danger'>*</span>
                                </Label>
                                <div className="form-control-wrap" onChange={(e) => setPrivateCar({ ...privateCar, policyEndDate: e.target.value })}>
                                    <input className="form-control" disabled type="date" id="default-0"
                                        value={date_end}
                                        placeholder="DD/MM/YYYY"
                                    />

                                </div>
                            </div>
                        </Col>

                    </Row>


                    <hr></hr>
                    <Row className="mt-2">
                        <Label>Was there any Claim in last year ? <span className="text-danger">*</span></Label>
                    </Row>
                    <Row>
                        <Col>
                            <div className="preview-block">
                                <div className="g-4 align-center flex-wrap" onChange={(e) => setPrivateCar({ ...privateCar, lastYearClaim: e.target.value })}>
                                    <div className="g">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                name="claim last year"
                                                id="claim last year yes"
                                                value={"Y"}
                                                {...register('lastyear', {
                                                    required: true,
                                                })}

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
                                                value={"N"}
                                                {...register('lastyear', {
                                                    required: true,
                                                })}

                                            />
                                            <label className="custom-control-label" htmlFor="claim last year no">
                                                NO
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                {errors.lastyear && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This is required</span>}
                            </div>
                        </Col>

                    </Row>

                    <Row className="mt-2">
                        <Label>Was the Vehicle Ownership Changed in the past 12 Months ? <span className="text-danger">*</span></Label>
                    </Row>
                    <Row>
                        <Col>
                            <div className="preview-block">
                                <div className="g-4 align-center flex-wrap" onChange={(e) => setPrivateCar({ ...privateCar, vehicleOwnershipChanged: e.target.value })}>
                                    <div className="g">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                name="vehicle ownership"
                                                id="vehicle ownership yes"
                                                value="Y"
                                                {...register('ownership', {
                                                    required: true,
                                                })}

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
                                                value="N"
                                                {...register('ownership', {
                                                    required: true,
                                                })}


                                            />
                                            <label className="custom-control-label" htmlFor="vehicle ownership no">
                                                NO
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                {errors.ownership && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This is required</span>}
                            </div>
                        </Col>

                    </Row>



                    {(privateCar.lastYearClaim === "N" && privateCar.vehicleOwnershipChanged === "N") && <Row className='mt-2 '>
                        <Label>Previous Claim Bonus (NCB) ? <span className="text-danger">*</span></Label>
                        <Col>
                            <div className="preview-block">
                                <div className="g-4 align-center flex-wrap" onChange={(e) => setPrivateCar({ ...privateCar, ncb: e.target.value })}>
                                    <div className="g">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                name="claim bonus NCB"
                                                id="NCB-0"
                                                value={0}
                                                {...register('ncb', {
                                                    required: true,
                                                })}

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
                                                value={20}
                                                {...register('ncb', {
                                                    required: true,
                                                })}
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
                                                value={25}
                                                {...register('ncb', {
                                                    required: true,
                                                })}
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
                                                value={35}
                                                {...register('ncb', {
                                                    required: true,
                                                })}
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
                                                value={45}
                                                {...register('ncb', {
                                                    required: true,
                                                })}
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
                                                value={50}
                                                {...register('ncb', {
                                                    required: true,
                                                })}
                                            />
                                            <label className="custom-control-label" htmlFor="NCB-50">
                                                50
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                {errors.ncb && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This is required</span>}
                            </div>
                        </Col>

                    </Row>}
                    <Row className='gy-2 mt-4 gx-2'>
                        <Col md="2">
                            <Button className="btn btn-dim bg-purple-dim " size="md" onClick={() => props.handleBack()}>GO BACK</Button>
                        </Col>
                        <Col md="2">
                            <Button color='primary' type='submit' size="md" >NEXT</Button>
                        </Col>
                    </Row>
                    {/*    <Row className='mt-4'>

                        <Col sm="3">
                            <Select
                                {...register('sel', { required: true })}
                                options={defaultOptions}
                                onChange={(selectedOption) => {
                                    setValue('sel', selectedOption?.value);
                                    clearErrors('sel');
                                }}

                            />{errors.sel && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This field is required</span>}
                        </Col>


                    </Row> */}

                </Form>

            </Block>

        </React.Fragment >
    )
}
