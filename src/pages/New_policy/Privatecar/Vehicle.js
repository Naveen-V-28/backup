import classNames from 'classnames';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import Select from 'react-select';
import { Button, Col, Form, Label, Row } from "reactstrap";
import {
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    OverlineTitle
} from '../../../components/Component';
import headers from '../token';
import { UserContext } from './Vehicledetails';
export let date_od;
export let date_tp;
export default function Vehicle(props) {
    let thisyear = (new Date()).getFullYear();
    const { privateCar, setPrivateCar } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors }, setValue, clearErrors } = useForm();
    const onFormSubmit = (e) => {

        if (privateCar.policyType === "New Business") {
            setPrivateCar({ ...privateCar, manufacturingYear: thisyear })
        }



        if (privateCar.policyType === "New Business" && privateCar.customerType === "Individual") {
            setPrivateCar({ ...privateCar, additionalCovers: [...privateCar.additionalCovers, "COMPULSORY PERSONAL ACCIDENT(OWNER DRIVER)"], makeCode: makCode, modelCode: modeCode, subModelCode: subModeCode, rtoRegistration: rtoRegistration, rtoLocation: rtoLocation, rtoNo: rtoNo, zoneName: zoneName, rtoCode: rtoCode })
        }
        else if (privateCar.policyType === "New Business" && privateCar.customerType === "Company") {
            setPrivateCar({ ...privateCar, additionalCovers: [...privateCar.additionalCovers, "LEGAL LIABILITY PAID TO EMPLOYEE"], makeCode: makCode, modelCode: modeCode, subModelCode: subModeCode, rtoRegistration: rtoRegistration, rtoLocation: rtoLocation, rtoNo: rtoNo, zoneName: zoneName, rtoCode: rtoCode })
        }

        props.handleNext()
    };
    const formClass = classNames({
        "form-validate": true,
    });




    let yearArray = [];
    for (let i = thisyear; i >= 2000; i--) {
        yearArray.push({ value: i, label: i });
    }

    if (privateCar.registrationDate !== "") {
        let date_od1
        if (privateCar.policyTenure === "1 YEAR OD + 3 YEAR TP") {
            date_od1 = new Date(privateCar.registrationDate);
            date_od1.setFullYear(date_od1.getFullYear() + 1);
            date_od1.setDate(date_od1.getDate() - 1);
        }

        if (privateCar.policyTenure === "3 YEAR OD + 3 YEAR TP") {
            date_od1 = new Date(privateCar.registrationDate);
            date_od1.setFullYear(date_od1.getFullYear() + 3);
            date_od1.setDate(date_od1.getDate() - 1);
        }
        let date_tp1 = new Date(privateCar.registrationDate);
        date_tp1.setDate(date_tp1.getDate() - 1);
        date_tp1.setFullYear(date_tp1.getFullYear() + 3);
        date_od = moment(date_od1).format('DD-MM-YYYY');
        date_tp = moment(date_tp1).format('DD-MM-YYYY');
    }



    let state = privateCar.registrationNumber1;
    let stateNumber = (privateCar.registrationNumber2);




    const [modelAll, setModelAll] = useState();
    const [rtoL, setRtoLocation] = useState();

    useEffect(() => {


        fetch('https://pot.fapremium.net/masters/api/getVehicleDetailsByVehicleCategory.json?sublineCode=PC', {
            method: 'POST',
            headers
        })
            .then((response) => response.json())
            .then((responseData) => {
                setModelAll(responseData.vehicleDetailsBySublineCode);
            })
        fetch('https://pot.fapremium.net/masters/api/getRtoAndZoneByRtoNo.json', {
            method: 'POST',
            headers
        })
            .then((response) => response.json())
            .then((responseData) => {
                setRtoLocation(responseData.rtoZoneMap.PC);
            })

    }, []);

    let rtoCode, rtoLocation, rtoNo, rtoRegistration, zoneName;
    if (rtoL !== undefined) {
        let ap = (Object.keys(rtoL))
        let vp = ap.indexOf(state + stateNumber)
        if ((rtoL[ap[vp]]) !== undefined) {
            rtoRegistration = ((rtoL[ap[vp]])[0].rtoRegistration)
            rtoCode = ((rtoL[ap[vp]])[0].rtoCode)
            rtoLocation = ((rtoL[ap[vp]])[0].rtoLocation)
            rtoNo = ((rtoL[ap[vp]])[0].rtoNo)
            zoneName = ((rtoL[ap[vp]])[0].zoneName)
        }


    }

    let makeAll = [];
    if (modelAll !== undefined) {
        modelAll.map(i => {
            return (
                makeAll.includes(i.makeName) !== true && makeAll.push(i.makeName)
            )
        })
    }
    let arrayMake = [];
    makeAll.map((item) => {
        return (
            arrayMake.push({ value: item, label: item })
        );
    })



    let allModels = [];
    if (modelAll !== undefined) {
        modelAll.filter(name => (name.makeName).includes(privateCar.make)).map(i => {
            return (
                allModels.includes(i.modelName) !== true && allModels.push(i.modelName)
            )
        })
    }
    let arrayModel = [];
    allModels.map((item) => {
        return (
            arrayModel.push({ value: item, label: item })
        );
    })


    let arraySubModel = [];
    if (modelAll !== undefined) {
        modelAll.filter(name => (name.modelName).includes(privateCar.model)).map(item => (
            arraySubModel.push({ value: item.subModelName, label: item.subModelName })
        ))
    }
    let makCode, modeCode, subModeCode;

    if (modelAll !== undefined && privateCar.subModel !== undefined && privateCar.subModel !== "") {
        let codes = modelAll.filter(name => (name.subModelName).includes(privateCar.subModel));
        makCode = codes[0].makeCode;
        modeCode = codes[0].modelCode;
        subModeCode = codes[0].subModelCode;
    }



    let fueltype = [];
    let result, seatingcapacity, cc;
    if (modelAll !== undefined && privateCar.subModel !== "") {
        modelAll.filter(name => (name.subModelName).includes(privateCar.subModel)).map(item => (
            fueltype.push({ value: item.fuelType, label: item.fuelType })


        ))
        result = fueltype[0].value;

    }
    if (modelAll !== undefined && privateCar.subModel !== "") {
        seatingcapacity = modelAll.filter(name => (name.subModelName).includes(privateCar.subModel))[0].seatingCapacity;
        cc = modelAll.filter(name => (name.subModelName).includes(privateCar.subModel))[0].engineCC;



    }
    return (
        <React.Fragment>
            <BlockHead size="sm">
                <BlockHeadContent>
                    <BlockTitle page>Create New Claim Request</BlockTitle>
                    <span >Basic info, like insured name and address for which claim needs to be processed</span>
                </BlockHeadContent>
            </BlockHead>
            <Block >
                <Form className={formClass} onSubmit={handleSubmit(onFormSubmit)}>
                    <Row className="gy-2">
                        <Col sm="6">
                            <div className="form-group">
                                <Label htmlFor="default-0" className="form-label">
                                    Vehicle Registration Number<code className='text-danger'>*</code>
                                </Label>
                                <div className="form-control-wrap">
                                    <input className="form-control" type="text" disabled id="default-0" value={privateCar.registrationNumber1 + "-" + privateCar.registrationNumber2 + "-" + privateCar.registrationNumber3 + "-" + privateCar.registrationNumber4} placeholder="XXXX"
                                    />

                                </div>
                            </div>
                        </Col>
                        <Col sm="6">
                            <div className="form-group">
                                <Label htmlFor="default-4" className="form-label">
                                    RTO Location<code className='text-danger'>*</code>
                                </Label>
                                <div className="form-control-wrap">
                                    <input className='form-control' value={rtoRegistration} disabled ></input>
                                    {/*  <div  >
                                        {/* <select className="form-control form-select" type="select" name="select" id="default-4"
                                            {...register('rto_location', {
                                                required: true,
                                            })}>

                                            <option selected value={location}>{location}</option>

                                        </select>
                                        {errors.rto_location && <span className="invalid">This field is required</span>}
                                        <Select
                                            {...register('rto', { required: true })}
                                            options={[{ value: location, label: location }]}
                                            onChange={(selectedOption) => {

                                                setValue('rto', selectedOption?.value);
                                                clearErrors('rto');
                                                setPrivateCar({ ...privateCar, rtoLocation: selectedOption?.value })
                                            }}

                                        />{errors.rto && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This is required</span>}
                                         </div>
 */}
                                </div>
                            </div>
                        </Col>
                        <Col sm="4">
                            <div className="form-group">
                                <Label htmlFor="default-0" className="form-label">
                                    Registration Date<code className='text-danger'>*</code>
                                </Label>
                                <div className="form-control-wrap" onChange={(e) => setPrivateCar({ ...privateCar, registrationDate: (e.target.value) })}>
                                    <input className="form-control" type="date" id="default-0" placeholder="DD/MM/YYYY" {...register('registration_date', { required: true })}
                                    />
                                    {errors.registration_date && <span className="invalid">This is required</span>}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <OverlineTitle tag="span" className="preview-title-lg mt-4">
                        {" "}
                        MANUFACTURER DETAILS
                    </OverlineTitle>
                    <Row className="gy-4 pt-1">
                        <Col md="4">
                            <div className="form-group">
                                <Label htmlFor="default-1" className="form-label">
                                    Make<code className='text-danger'>*</code>
                                </Label>
                                <div >


                                    {/*    <select className="form-control form-select" type="select" name="select" id="default-1" {...register('make', {
                                            required: true,
                                        })}>
                                            <option value="">Select</option>
                                            />

                                            {modelAll !== undefined && makeAll.map((item) => {
                                                return (
                                                    <option value={item}   > {item}</option>
                                                );
                                            })
                                            }
                                        </select>
                                        {errors.make && <span className="invalid">This field is required</span>} */}
                                    <Select
                                        {...register('make', { required: true })}
                                        options={arrayMake}
                                        onChange={(selectedOption) => {
                                            setValue('make', selectedOption?.value);
                                            clearErrors('make');
                                            setPrivateCar({ ...privateCar, make: selectedOption?.value })
                                        }}

                                    />{errors.make && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This is required</span>}


                                </div>

                            </div>
                        </Col>
                        <Col md="4">
                            <div className="form-group">
                                <Label htmlFor="default-2" className="form-label">
                                    Model<code className='text-danger'>*</code>
                                </Label>
                                <div className="form-control-wrap">


                                    {/*  <select className="form-control form-select" type="select" name="select" id="default-2"  {...register('model', {
                                            required: true,
                                        })}>
                                            <option value="" selected>Select</option>
                                            {allModels.map(filteredName => (
                                                <option value={filteredName}>{filteredName}</option>
                                            ))}


                                        </select>
                                        {errors.model && <span className="invalid">This field is required</span>} */}
                                    <Select
                                        {...register('model', { required: true })}
                                        options={arrayModel}
                                        onChange={(selectedOption) => {
                                            setValue('model', selectedOption?.value);
                                            clearErrors('model');
                                            setPrivateCar({ ...privateCar, model: selectedOption?.value })
                                        }}

                                    />{errors.model && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This is required</span>}

                                </div>

                            </div>
                        </Col>
                        <Col md="4">
                            <div className="form-group">
                                <Label htmlFor="default-3" className="form-label">
                                    Sub Model<code className='text-danger'>*</code>
                                </Label>
                                <div className="form-control-wrap">
                                    {/*  <div className="form-control-select" onChange={(e) => setPrivateCar({ ...privateCar, subModel: e.target.value })}>

                                        <select className="form-control form-select" type="select" name="select" id="default-3"  {...register('submodel', {
                                            required: true,
                                        })}>

                                            <option value="">Select</option>
                                            {(privateCar.model) !== "" && modelAll !== undefined && modelAll.filter(name => (name.modelName).includes(privateCar.model)).map(filteredName => (

                                                <option value={filteredName.subModelName}>{filteredName.subModelName}</option>
                                            ))}


                                        </select>
                                        {errors.submodel && <span className="invalid">This field is required</span>} */}
                                    <Select
                                        {...register('subModel', { required: true })}
                                        options={arraySubModel}
                                        onChange={(selectedOption) => {
                                            setValue('subModel', selectedOption?.value);
                                            clearErrors('subModel');
                                            setPrivateCar({ ...privateCar, subModel: selectedOption?.value })


                                        }}

                                    />{errors.subModel && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This is required</span>}

                                </div>
                            </div>

                        </Col>
                        <Col md="4">
                            <div className="form-group">
                                <Label htmlFor="default-4" className="form-label">
                                    Fuel Type<code className='text-danger'>*</code>
                                </Label>
                                <div className="form-control-wrap">
                                    {/*  <Select
                                        {...register('fuel', { required: true })}
                                        options={fueltype[0]}
                                        value={fueltype[0]}
                                        onChange={(selectedOption) => {
                                            setValue('fuel', selectedOption?.value);
                                            clearErrors('fuel');
                                            setPrivateCar({ ...privateCar, fuel: selectedOption?.value })

                                        }}
                                        isDisabled

                                    />{errors.fuel && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This field is required</span>}
 */}

                                    <input className="form-control" type="text" disabled id="default-0" value={result}
                                    />
                                    {/*   <select className="form-control form-select " isSearchable={true} type="select" name="select" id="default-4"  {...register('fuel', {
                                            required: true,
                                        })}>

                                            <option value="">Select</option>
                                            <option value="Petrol">Petrol</option>
                                            <option value="Diesel">Diesel</option>
                                        </select>{errors.fuel && <span className="invalid">This field is required</span>} */}

                                </div>
                            </div>
                        </Col>

                        <Col md="4">
                            <div className="form-group">
                                <Label htmlFor="default-0" className="form-label">
                                    Manufacturing Year<code className='text-danger'>*</code>
                                </Label>
                                <div className="form-control-wrap" >
                                    {/* <select className="form-control form-select" type="select" name="select" id="default-0" placeholder="YYYY" {...register('manufacturing_year', { required: true })}
                                    >
                                        <option value="">Select</option>
                                        <option value={thisyear}>{thisyear}</option>
                                    </select>
                                    {errors.manufacturing_year && <span className="invalid">This field is required</span>} */}
                                    {privateCar.policyType !== "New Business" && <> < Select
                                        {...register('manufacturing_year', { required: true })}
                                        options={yearArray}
                                        onChange={(selectedOption) => {
                                            setValue('manufacturing_year', selectedOption?.value);
                                            clearErrors('manufacturing_year');
                                            setPrivateCar({ ...privateCar, manufacturingYear: selectedOption?.value })
                                        }}

                                    />{errors.manufacturing_year && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This is required</span>}</>}

                                    {privateCar.policyType === "New Business" && <>
                                        <input className='form-control' value={thisyear} />
                                    </>}



                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="form-group">
                                <Label htmlFor="default-0" className="form-label">
                                    Engine Number<code className='text-danger'>*</code>
                                </Label>
                                <div className="form-control-wrap" onChange={(e) => setPrivateCar({ ...privateCar, engineNumber: e.target.value })}>
                                    <input className="form-control" type="text" id="default-0" placeholder="XXXX" {...register('engine_number', { required: true })}
                                    />
                                    {errors.engine_number && <span className="invalid">This is required</span>}
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="form-group">
                                <Label htmlFor="default-0" className="form-label">
                                    Chassis Number<code className='text-danger'>*</code>
                                </Label>
                                <div className="form-control-wrap" onChange={(e) => setPrivateCar({ ...privateCar, chassisNumber: e.target.value })}>
                                    <input className="form-control" type="text" id="default-0" placeholder="XXXX" {...register('chassis_number', { required: true })}
                                    />
                                    {errors.chassis_number && <span className="invalid">This is required</span>}
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="form-group">
                                <Label htmlFor="default-0" className="form-label">
                                    Cubic Capacity<code className='text-danger'>*</code>
                                </Label>
                                <div className="form-control-wrap" >
                                    <input className="form-control" disabled type="text" id="default-0" placeholder="XXXX" value={cc}
                                    />

                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="form-group">
                                <Label htmlFor="default-0" className="form-label">
                                    Seating Capacity<code className='text-danger'>*</code>
                                </Label>
                                <div className="form-control-wrap" >
                                    <input className="form-control" disabled type="text" value={seatingcapacity} id="default-0" placeholder="XX"
                                    />

                                </div>
                            </div>
                        </Col>
                    </Row>
                    {privateCar.policyType === "New Business" &&
                        <>
                            <OverlineTitle tag="span" className="preview-title-lg mt-4">
                                {" "}
                                POLICY DATES
                            </OverlineTitle>
                            <Row>
                                <Col sm="4">
                                    <div className="form-group">
                                        <Label htmlFor="start_date" className="form-label">
                                            Policy Start Date<code className='text-danger'>*</code>
                                        </Label>
                                        <div className="form-control-wrap" onChange={(e) => setPrivateCar({ ...privateCar, policyStartDate_nb: e.target.value })}>
                                            <input className="form-control" disabled type="date" id="start_date" value={privateCar.registrationDate} placeholder="DD/MM/YYYY"
                                            />

                                        </div>
                                    </div>
                                </Col>
                                <Col sm="4">
                                    <div className="form-group">
                                        <Label htmlFor="od_end_date" className="form-label">
                                            OD End Date<code className='text-danger'>*</code>
                                        </Label>
                                        <div className="form-control-wrap" >
                                            <input className="form-control" disabled type="date" id="od_end_date" placeholder="DD/MM/YYYY"
                                                value={date_od}
                                                onChange={(e) => setPrivateCar({ ...privateCar, odEndDate_nb: e.target.value })}
                                            />

                                        </div>
                                    </div>
                                </Col>
                                <Col sm="4">
                                    <div className="form-group">
                                        <Label htmlFor="tp_end_date" className="form-label">
                                            TP End Date<code className='text-danger'>*</code>
                                        </Label>
                                        <div className="form-control-wrap" onChange={(e) => setPrivateCar({ ...privateCar, tpEndDate_nb: e.target.value })}>
                                            <input className="form-control" disabled type="date" id="tp_end_date" placeholder="DD/MM/YYYY"
                                                value={
                                                    date_tp} />

                                        </div>
                                    </div>
                                </Col>
                            </Row></>}

                    <Row className='gy-2 mt-4 gx-2'>
                        <Col md="2">
                            <Button className="btn btn-dim bg-purple-dim " size="md" onClick={() => props.handleBack()}>GO BACK</Button>
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
