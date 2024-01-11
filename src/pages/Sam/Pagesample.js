import React, { useState } from 'react';
import { Col, Label, Row } from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Button,
  PieChartExample,
  PreviewCard,
  Table
} from "../../components/Component";

/*
import {
  doughnutChartData
} from "../components/charts/ChartData"; */

import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
export default function Pagesample() {
  const [customer, setCustomer] = useState({
    fname: "",
    lname: "",
    age: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",

  })

  const [bankdetails, setBankdetails] = useState({
    bank_name: "",
    branch: "",
    telephone: "",
    amount: "",
    communication: [],
    payment_method: "",


  })
  const [lab, setLab] = useState({
    assigned: 1,
    unassigned: 1,
    lost: 1,

  })
  const handleAdd = (e) => {
    if (e.target.checked) {
      setBankdetails({ ...bankdetails, communication: [...bankdetails.communication, e.target.value] })
    }


  }


  const doughnutChartData = {
    labels: ["Assigned", "Unassigned", "Lost"],
    dataUnit: "BTC",
    legend: false,
    datasets: [
      {
        borderColor: "#fff",
        backgroundColor: ["rgba(156, 171, 255, 0.8)", "rgba(244, 170, 164, 0.8)", "rgba(143, 234, 197, 0.8)"],
        data: [lab.assigned, lab.unassigned, lab.lost],
      },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(bankdetails);
    //setArr([]);
    setBankdetails({
      bank_name: "",
      branch: "",
      telephone: "",
      amount: "",
      communication: [],
      payment_method: "",
    })


  }
  return (
    <React.Fragment>
      <Head title="Sample page" />
      <Content >
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>Sample page</BlockTitle>

            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        {/* ----------------------------Customer Details---------------------------------- */}


        <Block>
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Customer Details</BlockTitle>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>

            <Row className="gy-4">

              <Col md="4">
                <div className="form-group">
                  <Label htmlFor="default-0" className="form-label">
                    First Name
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input placeholder" value={customer.fname} onChange={(e) => setCustomer({ ...customer, fname: e.target.value })} />
                  </div>
                </div>
              </Col>

              <Col md="4">
                <div className="form-group">
                  <Label htmlFor="default-0" className="form-label">
                    Last Name
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input placeholder" value={customer.lname} onChange={(e) => setCustomer({ ...customer, lname: e.target.value })} />
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="form-group">
                  <Label htmlFor="default-0" className="form-label">
                    Age
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="number" id="default-0" placeholder="Input placeholder" value={customer.age} onChange={(e) => setCustomer({ ...customer, age: e.target.value })} />
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="form-group">
                  <Label htmlFor="default-0" className="form-label">
                    Email
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="email" id="default-0" placeholder="Input placeholder" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} />
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="form-group">
                  <Label htmlFor="default-0" className="form-label">
                    Address
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input placeholder" value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })} />
                  </div>
                </div>
              </Col>

              <Col md="4" >
                <div className="form-group">
                  <Label htmlFor="default-0" className="form-label">
                    Country
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input placeholder" value={customer.country} onChange={(e) => setCustomer({ ...customer, country: e.target.value })} />
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="form-group">
                  <Label htmlFor="default-0" className="form-label">
                    State
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input placeholder" value={customer.state} onChange={(e) => setCustomer({ ...customer, state: e.target.value })} />
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="form-group">
                  <Label htmlFor="default-0" className="form-label">
                    City
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="text" id="default-0" placeholder="Input placeholder" value={customer.city} onChange={(e) => setCustomer({ ...customer, city: e.target.value })} />
                  </div>
                </div>
              </Col>

              <Col xl="12" >
                <Button color="success" size="lg" onClick={(e) => handleSubmit(e)} >
                  Save Information
                </Button>
              </Col>

            </Row>
          </PreviewCard>
        </Block>

        {/* ----------------------------Bank Details---------------------------------- */}


        <Block size="lg" >
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Bank Details</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="card-head">
              <h5 className="card-title">Bank Info</h5>
            </div>
            <form>
              <Row className="g-4">
                <Col lg="6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="bank-name">
                      Bank Name
                    </label>
                    <div className="form-control-wrap">
                      <input type="text" id="bank-name" className="form-control" value={bankdetails.bank_name} onChange={(e) => setBankdetails({ ...bankdetails, bank_name: e.target.value })} />
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="branch">
                      Branch
                    </label>
                    <div className="form-control-wrap">
                      <input type="text" id="branch" className="form-control" value={bankdetails.branch} onChange={(e) => setBankdetails({ ...bankdetails, branch: e.target.value })} />
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone-no-1">
                      Telephone No
                    </label>
                    <div className="form-control-wrap">
                      <input type="number" id="phone-no-1" className="form-control" value={bankdetails.telephone} onChange={(e) => setBankdetails({ ...bankdetails, telephone: e.target.value })} />
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="pay-amount-1">
                      Amount
                    </label>
                    <div className="form-control-wrap">
                      <input type="number" id="pay-amount-1" className="form-control" value={bankdetails.amount} onChange={(e) => setBankdetails({ ...bankdetails, amount: e.target.value })} />
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="form-group">
                    <label className="form-label">Communication</label>
                    <ul className="custom-control-group g-3 align-center">
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="com-email-1" value="Email" onClick={(e) => handleAdd(e)} />
                          <label className="custom-control-label" htmlFor="com-email-1">
                            Email
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="com-sms-1" value="SMS" onClick={(e) => handleAdd(e)} />
                          <label className="custom-control-label" htmlFor="com-sms-1">
                            SMS
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="com-phone-1" value="Phone" onClick={(e) => handleAdd(e)} />
                          <label className="custom-control-label" htmlFor="com-phone-1">
                            Phone
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="form-group">
                    <label className="form-label">Payment Methods</label>
                    <ul className="custom-control-group g-3 align-center" >
                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input name='payment' type="radio" value="Card" onChange={(e) => setBankdetails({ ...bankdetails, payment_method: e.target.value })} className="custom-control-input" id="pay-card-1" />
                          <label className="custom-control-label" htmlFor="pay-card-1">
                            Card
                          </label>
                        </div>
                      </li>

                      <li>
                        <div className="custom-control custom-control-sm custom-checkbox">
                          <input name='payment' type="radio" value="Cash" onChange={(e) => setBankdetails({ ...bankdetails, payment_method: e.target.value })} className="custom-control-input" id="pay-cash-1" />
                          <label className="custom-control-label" htmlFor="pay-cash-1">
                            Cash
                          </label>
                        </div>
                      </li>

                    </ul>
                  </div>
                </Col>

                <Col xl="12">
                  <Button color="primary" size="lg" onClick={(e) => handleSubmit(e)} >
                    Save Information
                  </Button>
                </Col>
              </Row>
            </form>
          </PreviewCard>
        </Block>


        {/* ----------------------------CHART---------------------------------- */}

        <Block>

          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Chart</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col sm="4">
                <div className="form-group">
                  <Label htmlFor="default-0" className="form-label">
                    Assigned
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="number" id="default-0" placeholder="Input placeholder" onChange={(e) => setLab({ ...lab, assigned: e.target.value })} />
                  </div>
                </div>
              </Col>
              <Col sm="4">
                <div className="form-group">
                  <Label htmlFor="default-0" className="form-label">
                    Unassigned
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="number" id="default-0" placeholder="Input placeholder" onChange={(e) => setLab({ ...lab, unassigned: e.target.value })} />
                  </div>
                </div>
              </Col>
              <Col sm="4">
                <div className="form-group">
                  <Label htmlFor="default-0" className="form-label">
                    Lost
                  </Label>
                  <div className="form-control-wrap">
                    <input className="form-control" type="number" id="default-0" placeholder="Input placeholder" onChange={(e) => setLab({ ...lab, lost: e.target.value })} />
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="g-gs mt-4" >
              <Col >

                <div className="card-head text-center">
                  <h6 className="title">Pie Chart</h6>
                </div>
                <div className="nk-ck-sm">
                  <PieChartExample data={doughnutChartData} />
                </div>

              </Col>
              {/*          <Col md={4}>
              <PreviewCard>
                <div className="card-head text-center">
                  <h6 className="title">Doughnut Chart</h6>
                </div>
                <div className="nk-ck-sm">
                  <DoughnutExample data={doughnutChartData} />
                </div>
              </PreviewCard>
            </Col>
            <Col md={4}>
              <PreviewCard>
                <div className="card-head text-center">
                  <h6 className="title">Polar Chart</h6>
                </div>
                <div className="nk-ck-sm">
                  <PolarExample data={polarChartData} />
                </div>
              </PreviewCard>
            </Col> */}
            </Row>
          </PreviewCard>
        </Block>
        {/* ----------------------------Table---------------------------------- */}

        <Block>
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Table</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Table></Table>
          </PreviewCard>

        </Block>
      </Content>
    </React.Fragment>
  )
}
