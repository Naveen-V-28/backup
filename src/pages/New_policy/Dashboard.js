import React, { createContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { Col, Row } from "reactstrap";
import {
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    PreviewCard
} from '../../components/Component';
import Content from '../../layout/content/Content';
import Head from '../../layout/head/Head';
import pcv from "./Images/bus-driver.svg";
import health from "./Images/health-insurance.svg";
import privatecar from "./Images/privatecar.svg";
import twowheeler from "./Images/twowheeler.svg";

export const UserContext = createContext({});

export default function Dashboard() {


    const [insurancetype, setInsurancetype] = useState("hi");
    console.log(insurancetype)
    const [policydetails, setPolicydetails] = useState({

    })



    /* const headers = "";
    useEffect(() => {
        fetch('https://dummyjson.com/products', {
            method: 'GET',
            headers
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); */

    /* #7E57C2 */
    let user = "hi";
    return (
        <UserContext.Provider user={user}>
            <React.Fragment>
                <Head title="New Policy" />
                <Content >
                    <BlockHead size="sm">

                        <BlockHeadContent>
                            <BlockTitle page  >One-stop Solution for your insurance</BlockTitle>
                            <h5 className='ibms'>Sub Heading</h5>
                        </BlockHeadContent>

                    </BlockHead>
                    <Block >
                        <PreviewCard className='pt-4'>
                            <BlockHead>
                                <BlockHeadContent>
                                    <BlockTitle tag="h5">What are you looking for ?</BlockTitle>
                                    <span>Choose the category for which you seek insurance</span>
                                </BlockHeadContent>
                            </BlockHead>


                            <Row className="gy-4 text-center ">



                                <Col md="6" lg='3'>
                                    <Link to={process.env.PUBLIC_URL + "privatecar"}>
                                        <div className="custom-control-group custom-control custom-radio custom-control-pro no-control "  >
                                            <input type="radio" value="PCC" className="custom-control-input" name="btnCheck" id="btnCheck1" />
                                            <label className="custom-control-label preview-icon-svg" htmlFor="btnCheck1">
                                                <div className="preview-icon-box">
                                                    <div className="preview-icon-wrap"><img src={privatecar} alt="" /></div>
                                                    <h5>Private Car</h5>
                                                    <span className="preview-icon-name">Prioritize and solve your tasks in short time cycles.</span>
                                                </div>
                                            </label>
                                        </div>
                                    </Link>
                                </Col>
                                <Col md="6" lg='3' >
                                    <Link to={process.env.PUBLIC_URL + "twowheeler"}>
                                        <div className="custom-control-group custom-control custom-radio custom-control-pro no-control">
                                            <input type="radio" value="two-wheeler" className="custom-control-input" name="btnCheck" id="btnCheck2" onChange={(e) => setInsurancetype(e.target.value)} />
                                            <label className="custom-control-label preview-icon-svg" htmlFor="btnCheck2">
                                                <div className="preview-icon-box">
                                                    <div className="preview-icon-wrap"><img src={twowheeler} alt="" /></div>
                                                    <h5>Two Wheeler</h5>
                                                    <span className="preview-icon-name">Prioritize and solve your tasks in short time cycles.</span>
                                                </div>
                                            </label>
                                        </div>
                                    </Link>
                                </Col>
                                <Col md="6" lg='3'>
                                    <Link to={process.env.PUBLIC_URL + "gcv"}>
                                        <div className="custom-control-group custom-control custom-radio custom-control-pro no-control">
                                            <input type="radio" value="gcv" className="custom-control-input" name="btnCheck" id="btnCheck3" onChange={(e) => setInsurancetype(e.target.value)} />
                                            <label className="custom-control-label preview-icon-svg" htmlFor="btnCheck3">
                                                <div className="preview-icon-box">
                                                    <div className="preview-icon-wrap"><img src={pcv} alt="" /></div>
                                                    <h5>GCV</h5>
                                                    <span className="preview-icon-name">Prioritize and solve your tasks in short time cycles.</span>
                                                </div>
                                            </label>
                                        </div>
                                    </Link>
                                </Col>
                                <Col md="6" lg='3'>
                                    <Link to={process.env.PUBLIC_URL + "pcv"}>
                                        <div className=" custom-control-group custom-control custom-radio custom-control-pro no-control ">
                                            <input type="radio" value="pcv" className="custom-control-input" name="btnCheck" id="btnCheck4" onChange={(e) => setInsurancetype(e.target.value)} />
                                            <label className="custom-control-label preview-icon-svg" htmlFor="btnCheck4">
                                                <div className="preview-icon-box">
                                                    <div className="preview-icon-wrap"><img src={twowheeler} alt="" /></div>
                                                    <h5>PCV</h5>
                                                    <span className="preview-icon-name">Prioritize and solve your tasks in short time cycles.</span>
                                                </div>
                                            </label>
                                        </div>
                                    </Link>
                                </Col>


                            </Row>


                            <Row className="gy-4 mt-4 text-center">

                                <Col md="6" lg='3'>

                                    <div className="custom-control-group custom-control custom-radio custom-control-pro no-control ">
                                        <input type="radio" value="health" className="custom-control-input" name="btnCheck" id="btnCheck5" onChange={(e) => setInsurancetype(e.target.value)} />
                                        <label className="custom-control-label preview-icon-svg" htmlFor="btnCheck5">
                                            <div className="preview-icon-box">
                                                <div className="preview-icon-wrap"><img src={twowheeler} alt="" /></div>
                                                <h5>Health</h5>
                                                <span className="preview-icon-name">Prioritize and solve your tasks in short time cycles.</span>
                                            </div>
                                        </label>
                                    </div>

                                </Col>
                                <Col md="6" lg='3'>

                                    <div className="custom-control-group custom-control custom-radio custom-control-pro no-control">
                                        <input type="radio" value="life" className="custom-control-input" name="btnCheck" id="btnCheck6" onChange={(e) => setInsurancetype(e.target.value)} />
                                        <label className="custom-control-label preview-icon-svg" htmlFor="btnCheck6">
                                            <div className="preview-icon-box">
                                                <div className="preview-icon-wrap"><img src={health} alt="" /></div>
                                                <h5>Life</h5>
                                                <span className="preview-icon-name">Prioritize and solve your tasks in short time cycles.</span>
                                            </div>
                                        </label>
                                    </div>

                                </Col>

                                <Col md="6" lg='3'>

                                    <div className=" custom-control-groupcustom-control custom-radio custom-control-pro no-control ">
                                        <input type="radio" value="personal-accident" className="custom-control-input" name="btnCheck" id="btnCheck7" onChange={(e) => setInsurancetype(e.target.value)} />
                                        <label className="custom-control-label preview-icon-svg" htmlFor="btnCheck7">
                                            <div className="preview-icon-box">
                                                <div className="preview-icon-wrap"><img src={twowheeler} alt="" /></div>
                                                <h5>Personal Accident</h5>
                                                <span className="preview-icon-name">Prioritize and solve your tasks in short time cycles.</span>
                                            </div>
                                        </label>
                                    </div>

                                </Col>
                                <Col md="6" lg='3'>

                                    <div className="custom-control-group custom-control custom-radio custom-control-pro no-control">
                                        <input type="radio" value="others" className="custom-control-input" name="btnCheck" id="btnCheck8" onChange={(e) => setInsurancetype(e.target.value)} />
                                        <label className="custom-control-label preview-icon-svg" htmlFor="btnCheck8">
                                            <div className="preview-icon-box">
                                                <div className="preview-icon-wrap"><img src={twowheeler} alt="" /></div>
                                                <h5>Others</h5>
                                                <span className="preview-icon-name">Prioritize and solve your tasks in short time cycles.</span>
                                            </div>
                                        </label>
                                    </div>

                                </Col>


                            </Row>





                        </PreviewCard>
                    </Block>
                </Content>

            </React.Fragment>
        </UserContext.Provider>

    )
}
