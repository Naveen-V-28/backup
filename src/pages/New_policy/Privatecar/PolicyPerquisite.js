import classNames from 'classnames';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Button, Col, Form, Label, Row } from 'reactstrap';
import { Block, BlockHead, BlockHeadContent, BlockTitle } from '../../../components/Component';
import { UserContext } from './Vehicledetails';
export default function PolicyPerquisite(props) {
  const { privateCar, setPrivateCar } = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onFormSubmit = (e) => {

    props.handleNext()
  };
  const formClass = classNames({
    "form-validate": true,

  });


  return (
    <React.Fragment>
      <BlockHead size="sm">
        <BlockHeadContent>
          <BlockTitle page>
            Create New Claim Request</BlockTitle>
          <span>Basic Info, like insured name and address for which claim needs to be processed</span>

        </BlockHeadContent>

      </BlockHead>


      <Form className={formClass} onSubmit={handleSubmit(onFormSubmit)}>
        <Row className="gy-4 ">
          <Col sm="6" md="3">
            <div className="preview-block">
              <Label>Policy Type <span className='text-danger'>*</span></Label>
            </div>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col md="12">
            <div className="preview-block">
              <div className="g-4 align-center flex-wrap">
                <div className="g ">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input bg-ibms"
                      name="policy type"
                      id="new business"
                      value="New Business"
                      {...register('policy_type', {
                        required: true,
                      })}
                      onClick={(e) => setPrivateCar({ ...privateCar, policyType: e.target.value })}
                    />
                    <label className="custom-control-label" htmlFor="new business">
                      New Business
                    </label>
                  </div>
                </div>
                <div className="g ms-2">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="policy type"
                      id="rollover"
                      value="Rollover"
                      {...register('policy_type', {
                        required: true,
                      })}
                      onClick={(e) => setPrivateCar({ ...privateCar, policyType: e.target.value })}
                    />
                    <label className="custom-control-label" htmlFor="rollover">
                      Rollover
                    </label>
                  </div>
                </div>
                <div className="g ms-2">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="policy type"
                      id="own damage"
                      value="Own Damage"
                      {...register('policy_type', {
                        required: true,
                      })}
                      onClick={(e) => setPrivateCar({ ...privateCar, policyType: e.target.value })}
                    />
                    <label className="custom-control-label" htmlFor="own damage">
                      OD (Own Damage)
                    </label>
                  </div>
                </div>
                <div className="g ms-2">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="policy type"
                      id="Third party"
                      value="Third Party"
                      {...register('policy_type', {
                        required: true,
                      })}
                      onClick={(e) => setPrivateCar({ ...privateCar, policyType: e.target.value })}
                    />
                    <label className="custom-control-label" htmlFor="Third party">
                      TP (Third Party)
                    </label>
                  </div>
                </div>
              </div>
              {errors.policy_type && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This is required</span>}
            </div>
          </Col>
        </Row>

        {privateCar.policyType === "New Business" &&
          <>
            <Row className="gy-4 mt-1 ">
              <Col sm="4">
                <div className="form-group" >
                  <Label htmlFor="policy_tenur" className="form-label">
                    Policy Tenure <span className='text-danger'>*</span>
                  </Label>
                  <div className="form-control-wrap" onChange={(e) => setPrivateCar({ ...privateCar, policyTenure: e.target.value })} >
                    <select className="form-control form-select" type="select" name="select" id="policy_tenur" {...register('policy_tenure', {
                      required: true,
                    })}>

                      <option value="1 YEAR OD + 3 YEAR TP" >1 YEAR OD + 3 YEAR TP</option>
                      <option value="3 YEAR OD + 3 YEAR TP">3 YEAR OD + 3 YEAR TP</option>
                    </select>
                    {errors.policy_tenure && <span className="invalid">This field is required</span>}
                  </div>
                </div>
              </Col>
            </Row>
          </>
        }
        <hr></hr>
        <Block>
          {/*   <Row>
            <BlockTitle tag="h4">REGISTRATION DETAILS</BlockTitle>
          </Row> */}

          <Row className='mt-2'>
            <Label>Customer Type <span className='text-danger'>*</span></Label>
          </Row>
          <Row className="gy-4 ">
            <Col>
              <div className="preview-block">
                <div className="g-4 align-center flex-wrap" onClick={(e) => setPrivateCar({ ...privateCar, customerType: e.target.value })}
                >
                  <div className="g ">
                    <div className="custom-control custom-radio">

                      <input
                        type="radio"
                        className="custom-control-input"
                        name="customer type"
                        id="individual"
                        {...register('company_type', {
                          required: true,
                        })}
                        value="Individual"
                      />

                      <label className="custom-control-label" htmlFor="individual">
                        Individual
                      </label>
                    </div>
                  </div>
                  <div className="g ms-2">
                    <div className="custom-control custom-radio">
                      <input

                        type="radio"
                        className="custom-control-input"
                        name="customer type"
                        id="company"
                        {...register('company_type', {
                          required: true,
                        })}
                        value="Company"

                      />

                      <label className="custom-control-label" htmlFor="company">
                        Company
                      </label>
                    </div>
                  </div>
                </div>
                {errors.company_type && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This is required</span>}
              </div>

            </Col>
          </Row>

          <Row className="gy-4 mt-1 ">
            <Col sm="8">
              <div className="form-group">
                <Label htmlFor="default-3" className="form-label">
                  Vehicle Registration Number <span className='text-danger'>*</span>
                </Label>
                <div className="form-control-wrap">
                  {/*  <input

                    className="form-control" type="text" value={privateCar.registrationNumber} id="default-0" placeholder="XXXX"
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
                  )} */}
                  <Row className='gx-1'>
                    <Col sm='2' className="form-control-wrap" onChange={(e) => setPrivateCar({ ...privateCar, registrationNumber1: e.target.value.toUpperCase() })}>
                      <input className="form-control" type="text" value={privateCar.registrationNumber1}
                        {...register('registration_number1', {
                          required: true,
                          pattern: {
                            value: /^[A-Z]{2}$/i,
                            message: "Invalid",
                          },
                        })}

                      />
                      {errors.registration_number1 && errors.registration_number1.type === "pattern" && (
                        <span className="invalid">{errors.registration_number1.message}</span>
                      )}
                    </Col>
                    <Col sm='2' onChange={(e) => setPrivateCar({ ...privateCar, registrationNumber2: e.target.value })}>
                      <input className="form-control" value={privateCar.registrationNumber2} type="number"
                        {...register('registration_number2', {
                          required: true,
                          pattern: {
                            value: /^[0-9]{1,2}$/i,
                            message: "Invalid",
                          },
                        })}

                      />
                      {errors.registration_number2 && errors.registration_number2.type === "pattern" && (
                        <span className="invalid">{errors.registration_number2.message}</span>
                      )}

                    </Col>
                    {privateCar.policyType !== "New Business" && <><Col sm='2' onChange={(e) => setPrivateCar({ ...privateCar, registrationNumber3: e.target.value.toUpperCase() })}>
                      <input className="form-control" value={privateCar.registrationNumber3} type="text"
                        {...register('registration_number3', {
                          required: true,
                          pattern: {
                            value: /^[A-Z]{1,2}$/i,
                            message: "Invalid ",
                          },
                        })}

                      />
                      {errors.registration_number3 && errors.registration_number3.type === "pattern" && (
                        <span className="invalid">{errors.registration_number3.message}</span>
                      )}
                    </Col>
                      <Col sm='2' onChange={(e) => setPrivateCar({ ...privateCar, registrationNumber4: e.target.value })} >
                        <input className="form-control" value={privateCar.registrationNumber4} type="number"
                          {...register('registration_number4', {
                            required: true,
                            pattern: {
                              value: /^[0-9]{4}$/i,
                              message: "Invalid",
                            },
                          })}
                        />
                        {errors.registration_number4 && errors.registration_number4.type === "pattern" && (
                          <span className="invalid">{errors.registration_number4.message}</span>
                        )}
                      </Col></>}
                    {((errors.registration_number1 && errors.registration_number1.type === "required") || (errors.registration_number2 && errors.registration_number2.type === "required") || (errors.registration_number3 && errors.registration_number3.type === "required") || (errors.registration_number4 && errors.registration_number4.type === "required")) && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This is required</span>}

                  </Row>
                </div>
              </div>
            </Col>
          </Row>

          <Row className='gy-4 mt-1'>
            <Label>Data Entry Type <span className='text-danger'>*</span></Label>
          </Row>
          <Row className="gy-4">
            <Col>
              <div className="preview-block">
                <div className="g-4 align-center flex-wrap">
                  <div className="g">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="Data entry type"
                        id="vahan API"
                        value="Vahan API"
                        {...register('data_entry', {
                          required: true,
                        })}
                        onClick={(e) => setPrivateCar({ ...privateCar, dataEntryType: e.target.value })}
                      />
                      <label className="custom-control-label" htmlFor="vahan API">
                        Vahan API
                      </label>
                    </div>
                  </div>
                  <div className="g ms-2">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="Data entry type"
                        id="manual"
                        value="Manual"
                        {...register('data_entry', {
                          required: true,
                        })}
                        onClick={(e) => setPrivateCar({ ...privateCar, dataEntryType: e.target.value })}

                      />
                      <label className="custom-control-label" htmlFor="manual">
                        Manual
                      </label>
                    </div>
                  </div>


                </div>
                {errors.data_entry && <span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic' }}>This is required</span>}
              </div>
            </Col>
          </Row>
          <Row className='gy-2 mt-4 gx-2'>
            <Col md="2">
              <Button className="btn btn-dim bg-purple-dim  disabled" size="md" >GO BACK</Button>
            </Col>
            <Col md="2">
              <Button color='primary' type='submit' size="md" >NEXT</Button>
            </Col>
          </Row>


        </Block>
      </Form>

    </React.Fragment >
  )
}

/*

import React, { useState } from 'react';

const YourComponent = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');

  const handleChange = event => {
    const input = event.target.value.replace(/[^A-Z0-9]/g, '').toUpperCase(); // Remove non-alphanumeric characters and convert to uppercase

    // Format the input with hyphens
    let formattedInput = '';
    for (let i = 0; i < input.length; i++) {
      if (i === 2 || i === 5 || i === 8) {
        formattedInput += '-';
      }
      formattedInput += input.charAt(i);
    }

    setRegistrationNumber(formattedInput);
  };

  return (
    <div>
      <label htmlFor="registrationNumber">Registration Number:</label>
      <input
        type="text"
        id="registrationNumber"
        value={registrationNumber}
        onChange={handleChange}
        placeholder="TN-41-RE-4567"
      />
    </div>
  );
};

export default YourComponent; */
