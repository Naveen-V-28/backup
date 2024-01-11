import classNames from 'classnames';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Col, Form, Label, Row } from 'reactstrap';
import { Block, BlockHead, BlockHeadContent, BlockTitle } from '../../../components/Component';
export default function PolicyPerquisite(props, { alter }) {
  const [policyType, setPolicyType] = useState("")
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
                      className="custom-control-input"
                      name="policy type"
                      id="new business"
                      value="new business"
                      onClick={(e) => setPolicyType(e.target.value)}
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
                      onClick={(e) => setPolicyType(e.target.value)}
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
                      value="own damage"
                      onClick={(e) => setPolicyType(e.target.value)}
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
                      value="Third party"
                      onClick={(e) => setPolicyType(e.target.value)}
                    />
                    <label className="custom-control-label" htmlFor="Third party">
                      TP (Third Party)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {policyType === "new business" &&
          <>
            <Row className="gy-4 pt-2 ">
              <Col sm="4">
                <div className="form-group">
                  <Label htmlFor="default-3" className="form-label">
                    Policy Tenure
                  </Label>
                  <div className="form-control-wrap">

                    <select className="form-control form-select" type="select" name="select" id="default-4" {...register('policy_tenure', {
                      required: true,
                    })}>

                      <option value="1od+5tp">1 YEAR OD + 5 YEAR TP</option>
                      <option value="5od+5tp">5 YEAR OD + 5 YEAR TP</option>
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
          <Row>
            <BlockTitle tag="h4">REGISTRATION DETAILS</BlockTitle>
          </Row>

          <Row className='mt-2'>
            <Label>Customer Type <span className='text-danger'>*</span></Label>
          </Row>
          <Row className="gy-4 ">
            <Col>
              <div className="preview-block">
                <div className="g-4 align-center flex-wrap">
                  <div className="g ">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="customer type"
                        id="individual"
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
                      />
                      <label className="custom-control-label" htmlFor="company">
                        Company
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="gy-4 mt-1 ">
            <Col sm="4">
              <div className="form-group">
                <Label htmlFor="default-3" className="form-label">
                  Vehicle Registration Number <span className='text-danger'>*</span>
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
          </Row>

          <Row className='mt-2'>
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
                        onClick={(e) => console.log(e.target.value)}
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
                        onClick={(e) => console.log(e.target.value)}

                      />
                      <label className="custom-control-label" htmlFor="manual">
                        Manual
                      </label>
                    </div>
                  </div>
                  {/*  {(errors.data_entry_type1 || errors.data_entry_type2) && <span className="invalid">This field is required</span>} */}
                </div>
              </div>
            </Col>
          </Row>
          <Row className='gy-2 mt-4 gx-2'>
            <Col md="2">
              <Button className="btn btn-dim bg-purple-dim text-purple disabled" size="md" >GO BACK</Button>
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
