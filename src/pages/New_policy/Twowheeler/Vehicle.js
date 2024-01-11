import React, { useEffect, useState } from 'react';
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
    const headers = {
        'Authorization': "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJTUklOVkFTIiwic2NvcGVzIjpbIlJPTEVfUE9TIl0sIlVzZXJDb250ZXh0Ijp7ImVtcGxveWVlTWFzdGVyRGV0YWlscyI6bnVsbCwiYnJhbmNoTWFzdGVyRGV0YWlscyI6eyJwYXJlbnRCcmFuY2hDb2RlIjoiIiwiYnJhbmNoTmFtZSI6IkNPUlBPUkFURSIsImJyYW5jaENvZGUiOiJDT1JQIiwicmVnaW9uIjoiUjIiLCJpc0ZyYW5jaGllcyI6InllcyIsImlzUHJvY2VzcyI6InllcyIsInN0YXR1cyI6IkFDVElWRSIsImNvdW50IjpudWxsfSwiZmFDZFBheW1lbnRMaW1pdCI6IjAuMCIsInBvc3BFeGFtU3RhdHVzIjoiWSIsIndhbGxldFR5cGUiOiIiLCJjaGVja05ld1VzZXIiOiJOTyIsIlVzZXJuYW1lIjoiU1JJTlZBUyBTIiwibG9naW5JZCI6IlNSSU5WQVMiLCJQcm9maWxlSWQiOiJHUDAwMDEyMjc1IiwicHJvZHVjdENvZGUiOlsiVFdDIl0sImFjY2Vzc1R5cGUiOiJQT1MiLCJhdXRoVG9rZW4iOm51bGwsImFnZW50RGV0YWlscyI6eyJpbnRlcm1lZGlhcnlDb2RlIjoiR1AwMDAxMjI3NSIsImFnZW50VHlwZUNvZGUiOiJGcmFuY2hpc2UiLCJpc0NvcnBvcmF0ZSI6Ik4iLCJwcm9jZXNzVHlwZSI6IiIsImZpcnN0TmFtZSI6IlNSSU5WQVMiLCJsYXN0TmFtZSI6IlMiLCJnZW5kZXJUeXBlIjoiTSIsImRhdGVPZkJpcnRoIjoiMjAwMC0wNC0wOSAxMjozMjo1NS4wIiwiZW1haWwiOiJzcmluaXZhcy5zQGdvcG9saWN5Lm5ldCIsImFsdGVyZW1haWwiOiIiLCJtb2JpbGVObyI6IjYzODI3Nzg0OTkiLCJhbHRlcm5hdGVNb2JpbGVObyI6IiIsInRlbGVwaG9uZU5vIjoiIiwicGVybWFuZW50QWRkcmVzczEiOiJGQVMiLCJwZXJtYW5lbnRBZGRyZXNzMiI6IkZBUyIsInBlcm1hbmVudEFkZHJlc3MzIjoiVEFNSUwgTkFEVSIsInBlckNpdHkiOiJDVDExOTQiLCJwZXJTdGF0ZSI6IiIsInBlclBpbmNvZGUiOiI2MDAwMTQiLCJ0ZW1wQWRkcmVzczEiOiJGQVMiLCJ0ZW1wQWRkcmVzczIiOiJGQVMiLCJ0ZW1wQWRkcmVzczMiOiJUQU1JTCBOQURVIiwidGVtcENpdHkiOiIiLCJ0ZW1wU3RhdGUiOiIiLCJ0ZW1wUGluY29kZSI6IjYwMDAxNCIsImFhZGhhck5vIjoiOS44NjU2NkUrMTEiLCJvckFnZW50IjoiIiwiY2hhbm5lbFR5cGUiOiJQT1MiLCJicmFuY2giOiJDT1JQIiwic3VibGluZSI6bnVsbCwiYnVzaW5lc3NUeXBlIjpudWxsLCJjb21taXNzaW9uQXBwbGljYWJsZSI6bnVsbCwiY29tbWlzc2lvbiI6bnVsbCwicGF5bWVudE1vZGUiOm51bGwsImNvcnBvcmF0ZU5hbWUiOiIiLCJjb3Jwb3JhdGVBZGRyZXNzIjoiIiwiY2luIjoiIiwid2ViIjoiIiwiaXNMaWNlbnNlIjoiIiwibGljZW5zZU51bSI6IiIsImxpY2Vuc2VJc3N1ZURhdGUiOiIiLCJsaWNlbnNlRXhwRGF0ZSI6IiIsInN0YXR1cyI6IkFDVElWRSIsInBhbk5vIjoiQVNERkY1NjM0TCJ9LCJ1c2VyUm9sZXMiOlsiUk9MRV9QT1MiXSwiaW5zdXJlckNvZGUiOiIiLCJjZFVzZXIiOiJOIiwicGFyZW50VXNlciI6InNhcmF2YW5hbkAxMiIsInNob3J0ZmFsbFBlcmNlbnQiOiIwLjAiLCJpc1BhcmVudFVzZXIiOiIiLCJwZW5kaW5nUHJvcG9zYWxGbGFnIjoiTiIsInVzZXJJbnNwZWN0aW9uRmxhZyI6Ik4ifSwiaXNzIjoiRkFDQVBJVEFMIiwiaWF0IjoxNzA0Mjc5NzMzLCJleHAiOjE3MDQyOTc3MzN9.pDINUWVEw9a0P5X_4sFNPQs80CCTgINIkBwJG2S3HC0rC9PUhxSeIh8AEkEbLdr9InNotPXdK-0j8jGXpmeUBA"
    };
    const [vehicledetails, setVehicledetails] = useState();
    const [names, setNames] = useState("we");
    const [allvehicledetails, setAllVehicledetails] = useState("");
    const arr = [
        {
            "coverCode": "BFK",
            "coverName": "BI-FUEL KIT (CNG)",
            "coverType": "ADDITIONAL",
            "productCode": "GCT",
            "sumInsuredType": "TEXT",
            "sumInsuredList": []
        },
        {
            "coverCode": "CPA",
            "coverName": "COMPULSORY PERSONAL ACCIDENT(OWNER DRIVER)",
            "coverType": "ADDITIONAL",
            "productCode": "GCT",
            "sumInsuredType": "NONE",
            "sumInsuredList": []
        },
        {
            "coverCode": "BFK",
            "coverName": "LEGAL LIABILITY PAID TO CLEANER",
            "coverType": "ADDITIONAL",
            "productCode": "GCT",
            "sumInsuredType": "NONE",
            "sumInsuredList": []
        },
        {
            "coverCode": "LCO",
            "coverName": "LEGAL LIABILITY PAID TO COOLIE",
            "coverType": "ADDITIONAL",
            "productCode": "GCT",
            "sumInsuredType": "NONE",
            "sumInsuredList": []
        },
        {
            "coverCode": "LCO",
            "coverName": "LEGAL LIABILITY PAID TO DRIVER",
            "coverType": "ADDITIONAL",
            "productCode": "GCT",
            "sumInsuredType": "NONE",
            "sumInsuredList": []
        },
        {
            "coverCode": "PAD",
            "coverName": "P.A. COVER TO PAID DRIVER",
            "coverType": "ADDITIONAL",
            "productCode": "GCT",
            "sumInsuredType": "LIST",
            "sumInsuredList": []
        },
        {
            "coverCode": "BFK",
            "coverName": "THIRD PARTY LIABILITY",
            "coverType": "DEFAULT",
            "productCode": "GCT",
            "sumInsuredType": "NONE",
            "sumInsuredList": []
        }
    ];
    useEffect(() => {


        fetch('https://pot.fapremium.net/masters/api/getAllMake.json', {
            method: 'POST',
            headers
        })
            .then((response) => response.json())
            .then((responseData) => {
                setVehicledetails(responseData.makeList
                );
            })
        fetch('https://pot.fapremium.net/masters/api/getVehicleDetailsByVehicleCategory.json?sublineCode=PC', {
            method: 'POST',
            headers
        })
            .then((response) => response.json())
            .then((responseData) => {
                setAllVehicledetails(responseData.vehicleDetailsBySublineCode
                );
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlechange1 = (e) => {
        setNames(names => e.target.value)


    }
    console.log(names);

    /*   let allmodel;
      if (allvehicledetails !== undefined) {
          allmodel = allvehicledetails.filter((i) => i.makeName.includes(names))
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
                            {/*   <select onChange={(e) => handlechange1(e)} >
                                <option value="de">Select</option>
                                <option value="1" >Option select name1</option>
                                <option value="2" >Option select name2</option>
                            </select> */}
                            <div className="form-control-wrap">
                                <div className="form-control-select" onChange={(e) => handlechange1(e)}>
                                    <select className="form-control form-select" type="select" name="select" id="default-1"{...register('make', {
                                        required: true,
                                    })}>
                                        <option value="">Select</option>

                                        {
                                            arr.map((item) => {
                                                return (
                                                    <option value={item.coverCode}  > {item.coverCode}</option>
                                                );
                                            })
                                        }
                                        {/*  {vehicledetails !== undefined &&
                                            vehicledetails.map((item) => {
                                                return (
                                                    <option value={item.name} > {item.name}</option>
                                                );
                                            })
                                        } */}

                                        {/* <option value="">Select</option>
                                        <option value="1">Option select name1</option>
                                        <option value="2">Option select name2</option> */}
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
                                        {arr.filter(name => (name.coverCode).includes(names)).map(filteredName => (
                                            <option value={filteredName.coverName}>{filteredName.coverName}</option>
                                        ))}



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

        </React.Fragment >
    )
}
