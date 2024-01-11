import classnames from "classnames";
import React, { createContext, useEffect, useState } from 'react';
import { Button, Col, Collapse, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import {
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    Icon,
    OverlineTitle,
    PreviewCard,
    Sidebar,
    TooltipComponent,
    UserAvatar
} from '../../../components/Component';
import Content from '../../../layout/content/Content';
import Head from '../../../layout/head/Head';
import headers from "../token";
import Addoncovers from "./Addoncovers";
import PolicyPerquisite from "./PolicyPerquisite";
import Premimum from "./Premimum";
import PreviousInsurer from "./PreviousInsurer";
import Vehicle from "./Vehicle";
export const UserContext = createContext()
export default function Vehicledetails({ className, variation, ...props }) {

    const [activeTab, setActiveTab] = useState("1");
    const [activeIconTab, setActiveIconTab] = useState("1");
    const [isOpen, setIsOpen] = useState("0");
    const [p, setP] = useState("");
    const toggleCollapse = (param) => {
        if (param === isOpen) {
            setIsOpen("0");
        } else {
            setIsOpen(param);
        }
    };

    const [accordian, setAccordian] = useState([
    ])



    const [privateCar, setPrivateCar] = useState({
        policyType: "",
        policyTenure: "1 YEAR OD + 3 YEAR TP",
        customerType: "",
        registrationNumber1: "",
        registrationNumber2: "",
        registrationNumber3: "",
        registrationNumber4: "",
        dataEntryType: "",
        registrationDate: "",
        make: "",
        makeCode: "",
        model: "",
        modelCode: "",
        subModel: "",
        subModelCode: "",
        manufacturingYear: "",
        fuel: "",
        engineNumber: "",
        chassisNumber: "",
        cc: "",
        seatingCapacity: "",
        policyStartDate_nb: "",
        tpEndDate_nb: "",
        odEndDate_nb: "",
        previousInsurer: "",
        previousPolicyType: "",
        policyStartDate: "",
        policyEndDate: "",
        previousPolicyExpiryDate: "",
        previousOdPolicyExpiryDate: "",
        previousTpPolicyStartDate: "",
        previousTpPolicyExpiryDate: "",
        vehicleOwnershipChanged: "",
        lastYearClaim: "",
        ncb: "",
        additionalCovers: [],
        addon: [],
        discount: [],
        bi_fuel: "",
        pa_cover: "",
        unnamed_passenger: "",
        personal_belongings: "",
        hotel: "",
        rtoCode: "",
        rtoLocation: "",
        rtoNo: "",
        rtoRegistration: "",
        zoneName: "",


    });
    const [addons, setAddons] = useState();

    useEffect(() => {
        document.getElementsByClassName("nk-header")[0].addEventListener("click", function () {
            setSidebar(false);
        })

        fetch('https://pot.fapremium.net/masters/api/getCoveragesByProduct.json', {
            method: 'POST',
            headers
        })
            .then((response) => response.json())
            .then((responseData) => {
                setAddons(responseData.coverageList);
            })
    }, [])

    let productCode = [];
    if (privateCar.policyType === "New Business" || privateCar.policyType === "Rollover") {

        if (privateCar.customerType === "Individual") {
            productCode = addons.PCC.filter((item) => (item.coverName !== 'LEGAL LIABILITY PAID TO EMPLOYEE' && item.coverName !== 'P.A. COVER TO PAID DRIVER' && item.coverName !== 'TARIFF DISCOUNT'));
        }
        else if (privateCar.customerType === "Company") {
            productCode = addons.PCC.filter((item) => item.coverName !== 'LEGAL LIABILITY PAID TO DRIVER' && item.coverName !== 'TARIFF DISCOUNT');
        }
    }
    else if (privateCar.policyType === "Own Damage") {
        if (privateCar.customerType === "Individual") {
            productCode = addons.PCCOD.filter((item) => (item.coverName !== 'LEGAL LIABILITY PAID TO EMPLOYEE' && item.coverName !== 'P.A. COVER TO PAID DRIVER'));
        }
        else if (privateCar.customerType === "Company") {
            productCode = addons.PCCOD.filter((item) => item.coverName !== 'LEGAL LIABILITY PAID TO DRIVER');
        }
    }
    else if (privateCar.policyType === "Third Party") {
        if (privateCar.customerType === "Individual") {
            productCode = addons.PCT.filter((item) => (item.coverName !== 'LEGAL LIABILITY PAID TO EMPLOYEE' && item.coverName !== 'P.A. COVER TO PAID DRIVER' && item.coverName !== 'TARIFF DISCOUNT'));
        }
        else if (privateCar.customerType === "Company") {
            productCode = addons.PCT.filter((item) => item.coverName !== 'LEGAL LIABILITY PAID TO DRIVER' && item.coverName !== 'TARIFF DISCOUNT');
        }
    }





    const [sideBar, setSidebar] = useState(false);

    // function to toggle sidebar
    const toggle = () => {
        setSidebar(!sideBar);
    };

    const handleEdit = (v) => {
        setActiveIconTab(v)
        setActiveTab(v)
    }

    const handleNext = () => {
        if (activeTab !== "5") {
            let str = (parseInt(activeTab) + 1).toString();

            setActiveIconTab(str)
            setActiveTab(str)
        }
        if (privateCar.policyType === "New Business" && activeTab === "2") {
            let str = (parseInt(activeTab) + 2).toString();

            setActiveIconTab(str)
            setActiveTab(str)
        }
    }
    const handleBack = () => {
        if (activeTab !== "1") {
            let str1 = (parseInt(activeTab) - 1).toString();
            setActiveIconTab(str1)
            setActiveTab(str1)
        }
        if (privateCar.policyType === "New Business" && activeTab === "4") {
            let str = (parseInt(activeTab) - 2).toString();

            setActiveIconTab(str)
            setActiveTab(str)
        }
    }
    const handleSave = () => {
        let currentDate = new Date().toString();
        setAccordian([...accordian, { date: currentDate.slice(4, 10), year: currentDate.slice(11, 15), time: currentDate.slice(16, 21), para: p }])
        setP("");
    }
    return (
        <UserContext.Provider value={{ privateCar, setPrivateCar, productCode }}>
            <React.Fragment >
                <Head title="PrivateCar" />
                <Content >
                    <BlockHead size="sm">

                        <BlockHeadContent>
                            <BlockTitle page>Your Trusted Insurance Partner</BlockTitle>
                            <h5 className='text-primary'>Quote ID: 89793907</h5>
                        </BlockHeadContent>

                    </BlockHead>

                    <Block>
                        <PreviewCard className="card-bordered">
                            <div className="card-aside-wrap" id="user-detail-block">
                                <div className="card-content">
                                    <Nav tabs className="mt-n3  nav nav-tabs nav-tabs-mb-icon nav-tabs-card  bg-white sticky-top ">
                                        <NavItem className="nav-item">
                                            <NavLink
                                                tag="a"

                                                className={classnames({ active: activeIconTab === "1" })}
                                                onClick={() =>
                                                    handleEdit("1")
                                                }
                                            >
                                                <Icon name="user-circle" /> <span>Policy Perquisite </span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="nav-item">
                                            <NavLink
                                                tag="a"

                                                className={classnames({ active: activeIconTab === "2" })}
                                                onClick={() => handleEdit("2")}
                                            >
                                                <Icon name="repeat" /> <span>Vehicle Details</span>
                                            </NavLink>
                                        </NavItem>
                                        {privateCar.policyType !== "New Business" && <NavItem className="nav-item">
                                            <NavLink
                                                tag="a"

                                                className={classnames({ active: activeIconTab === "3" })}
                                                onClick={() => handleEdit("3")}
                                            >
                                                <Icon name="file-text" /> <span>Previous Insurer</span>
                                            </NavLink>
                                        </NavItem>}
                                        <NavItem className="nav-item">
                                            <NavLink
                                                tag="a"

                                                className={classnames({ active: activeIconTab === "4" })}
                                                onClick={() => handleEdit("4")}
                                            >
                                                <Icon name="bell" /> <span>Add-on Covers</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="nav-item">
                                            <NavLink
                                                tag="a"

                                                className={classnames({ active: activeIconTab === "5" })}
                                                onClick={() => handleEdit("5")}
                                            >
                                                <Icon name="activity" /> <span>Quotes</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="nav-item nav-item-trigger d-xxl-none">
                                            <NavLink>
                                                <Button className={`toggle  ${sideBar && "active"}`} color="primary-dim" onClick={toggle}>
                                                    <Icon name="chevron-left" />
                                                </Button>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <Block className="pe-3 ">   <TabContent activeTab={activeTab} >
                                        <TabPane tabId="1">
                                            <PolicyPerquisite handleNext={handleNext} handleBack={handleBack} />

                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Vehicle handleNext={handleNext} handleBack={handleBack} />
                                        </TabPane>
                                        {privateCar.policyType !== "New Business" && <TabPane tabId="3">
                                            <PreviousInsurer handleNext={handleNext} handleBack={handleBack} />
                                        </TabPane>}
                                        <TabPane tabId="4">
                                            <Addoncovers handleNext={handleNext} handleBack={handleBack} />
                                        </TabPane>
                                        <TabPane tabId="5">
                                            <Premimum handleBack={handleBack} />
                                        </TabPane>
                                    </TabContent>

                                        {activeTab !== '5' && <><hr /><div className={[`accordion${variation ? " accordion-s" + variation : ""}${className ? " " + className : ""}`]}>
                                            <div className="accordion-item">
                                                <div className={[`accordion-head${isOpen !== "1" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("1")}>
                                                    <OverlineTitle tag="span" className="preview-title-lg mt-4">
                                                        Quotation Notes
                                                    </OverlineTitle>
                                                    <span className="accordion-icon"></span>
                                                </div>
                                                <Collapse className="accordion-body" isOpen={isOpen === "1" ? true : false}>
                                                    <div className="accordion-inner">
                                                        <Block >

                                                            <div className=" mt-4">
                                                                <label className="form-label" htmlFor="cf-default-textarea">
                                                                    Brief Description
                                                                </label>
                                                                <div className="form-control-wrap">
                                                                    <textarea
                                                                        onChange={(e) => setP(e.target.value)}
                                                                        className="form-control form-control-sm"
                                                                        id="cf-default-textarea"
                                                                        value={p}
                                                                        placeholder="Write your message"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                            <div className='my-2'>
                                                                {p !== "" && <Button color='primary' onClick={handleSave} size="md">
                                                                    Save
                                                                </Button>}
                                                            </div>
                                                        </Block>
                                                    </div>
                                                </Collapse>
                                            </div>
                                        </div>
                                            {accordian.length > 0 && accordian.map((item) => {
                                                return (
                                                    <div>
                                                        <PreviewCard className='bg-gray-dim '>
                                                            <p>{item.para}</p>
                                                        </PreviewCard>
                                                        <div className='mt-1  mb-3 text-gray text-base '><span>Added on <span className='text-dark'>{item.date}, {item.year}</span> at <span className='text-dark'>{item.time}</span> | By <span className='text-dark'>Super Admin</span></span></div>
                                                    </div>
                                                )
                                            })
                                            }</>}
                                    </Block>
                                </div>
                                {activeIconTab !== "5" && <Sidebar toggleState={sideBar} >
                                    <div className="card-inner">
                                        <div className="user-card user-card-s2 mt-5 mt-xxl-0">
                                            <UserAvatar className="lg" theme="primary" text="PC" />
                                            <div className="user-info">

                                                {privateCar.make !== "" && <h5>{privateCar.make}</h5>}
                                                {privateCar.policyType !== "New Business" ? ((privateCar.registrationNumber1 !== "" && privateCar.registrationNumber2 !== "" && privateCar.registrationNumber3 !== "" && privateCar.registrationNumber4 !== "") && <h6 className="sub-text">{privateCar.registrationNumber1}-{privateCar.registrationNumber2}-{privateCar.registrationNumber3}-{privateCar.registrationNumber4}</h6>) : ((privateCar.registrationNumber1 !== "" && privateCar.registrationNumber2 !== "") && <h6 className="sub-text">{privateCar.registrationNumber1}-{privateCar.registrationNumber2}</h6>)}

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-inner">
                                        <Row  >
                                            <Col md='8' >                                                <h6>Policy Perquisite</h6>
                                            </Col>
                                            <Col md='4' onClick={() => handleEdit("1")} >
                                                <TooltipComponent
                                                    tag="a"
                                                    containerClassName="btn btn-trigger btn-icon"
                                                    id={"edit"}
                                                    icon="edit-alt-fill"
                                                    direction="top"
                                                    text="Edit"
                                                />
                                            </Col>
                                        </Row>
                                        <div>
                                            {privateCar.policyType !== "" && <span className="sub-text  text-base">Policy Type: {privateCar.policyType}</span>}
                                            {privateCar.policyType === "New Business" && privateCar.policyTenure !== "" && <span className="sub-text  text-base">Policy Tenure:{privateCar.policyTenure}</span>}
                                            {privateCar.customerType !== "" && <span className="sub-text  text-base">Customer Type: {privateCar.customerType}</span>}
                                        </div>
                                    </div>

                                    <div className="card-inner">
                                        <Row className="" >
                                            <Col md='8'>                                                <h6>Vehicle Details</h6>
                                            </Col>
                                            <Col md='4' onClick={() => handleEdit("2")}>
                                                <TooltipComponent
                                                    tag="a"
                                                    containerClassName="btn btn-trigger btn-icon"
                                                    id={"edit"}
                                                    icon="edit-alt-fill"
                                                    direction="top"
                                                    text="Edit"
                                                />
                                            </Col>
                                        </Row>
                                        <div> {privateCar.rtoRegistration !== "" && <span className="sub-text  text-base">RTO Location: {privateCar.rtoRegistration}</span>}
                                            {privateCar.registrationDate !== "" && <span className="sub-text  text-base">Registration Date: {privateCar.registrationDate}</span>}
                                            {/*    {privateCar.policyType === "New Business" && privateCar.registrationDate !== "" && <><span className="sub-text  text-base">{privateCar.registrationDate}</span>
                                                <span className="sub-text  text-base">{date_od}</span>
                                                <span className="sub-text  text-base">{date_tp}</span></>} */}

                                            {privateCar.model !== "" && <span className="sub-text  text-base">Model: {privateCar.model}</span>}
                                            {privateCar.subModel !== "" && <span className="sub-text text-base">Sub Model: {privateCar.subModel}</span>}
                                            {/*  {privateCar.manufacturingYear !== "" && <span className="sub-text  text-base">Manufacturing Year:{privateCar.manufacturingYear}</span>} */}

                                            {privateCar.engineNumber !== "" && <span className="sub-text  text-base">Engine Number:  {privateCar.engineNumber}</span>}
                                            {privateCar.chassisNumber !== "" && <span className="sub-text  text-base">Chassis Number:  {privateCar.chassisNumber}</span>}


                                        </div>
                                    </div>

                                    {privateCar.policyType !== "New Business" && <div className="card-inner">
                                        <Row className="" >
                                            <Col md='8'>                                                <h6>Previous Insurer</h6>
                                            </Col>
                                            <Col md='4' onClick={() => handleEdit("3")}>
                                                <TooltipComponent
                                                    tag="a"
                                                    containerClassName="btn btn-trigger btn-icon"
                                                    id={"edit"}
                                                    icon="edit-alt-fill"
                                                    direction="top"
                                                    text="Edit"
                                                />
                                            </Col>
                                        </Row>
                                        <div>
                                            {privateCar.previousInsurer !== "" && <span className="sub-text text-base">Previous Insurer: {privateCar.previousInsurer}</span>}
                                            {privateCar.previousPolicyType !== "" && <span className="sub-text  text-base">Previous Policy Type: {privateCar.previousPolicyType}</span>}
                                            {privateCar.policyStartDate !== "" && <span className="sub-text  text-base">Policy Start Date: {privateCar.policyStartDate}</span>}
                                            {privateCar.policyEndDate !== "" && <span className="sub-text  text-base">Policy End Date: {privateCar.policyEndDate}</span>}
                                            {/* <span className="sub-text  text-base">{privateCar. previousPolicyExpiryDate}</span>
                                            <span className="sub-text  text-base">{privateCar.previousOdPolicyExpiryDate}</span>
                                            <span className="sub-text  text-base">{privateCar.previousTpPolicyStartDate}</span>
                                            <span className="sub-text  text-base">{privateCar.previousTpPolicyExpiryDate}</span> */}
                                            {privateCar.vehicleOwnershipChanged !== "" && <span className="sub-text  text-base">Owbership Changed: {privateCar.vehicleOwnershipChanged}</span>}
                                            {privateCar.lastYearClaim !== "" && <span className="sub-text  text-base">Last Year Claim: {privateCar.lastYearClaim}</span>}
                                            {(privateCar.vehicleOwnershipChanged !== "yes" && privateCar.lastYearClaim !== "yes" && privateCar.ncb !== "") && <span className="sub-text  text-base">NCB: {privateCar.ncb}</span>}
                                        </div>
                                    </div>}

                                    <div className="card-inner">
                                        <Row className="" >
                                            <Col md='8' >                                                <h6>Addons</h6>
                                            </Col>
                                            <Col md='4' onClick={() => handleEdit("4")}
                                            >
                                                <TooltipComponent
                                                    tag="a"
                                                    containerClassName="btn btn-trigger btn-icon"
                                                    id={"edit"}
                                                    icon="edit-alt-fill"
                                                    direction="top"
                                                    text="Edit"
                                                />
                                            </Col>
                                        </Row>
                                        <div>

                                            {(privateCar.additionalCovers.length > 0) &&
                                                privateCar.additionalCovers.map((item) => {
                                                    return (
                                                        <>
                                                            {item === "BI-FUEL KIT (CNG)" && <p className=" text-base">{item}:{privateCar.bi_fuel}</p>}

                                                            {item === "P.A. COVER TO PAID DRIVER" && <p className=" text-base">{item}:{privateCar.pa_cover}</p>}

                                                            {item === "UNNAMED PASSENGER" && <p className=" text-base">{item}:{privateCar.unnamed_passenger}</p>}

                                                            {item !== "UNNAMED PASSENGER" && item !== "P.A. COVER TO PAID DRIVER" && item !== "BI-FUEL KIT (CNG)" && <p className=" text-base">{item}</p>}

                                                        </>
                                                    )
                                                })
                                            }
                                            {(privateCar.addon.length > 0) &&
                                                privateCar.addon.map((item) => {
                                                    return (
                                                        <>
                                                            {item === "PERSONAL BELONGING" && <p className=" text-base">{item}: {privateCar.personal_belongings}</p>}

                                                            {item === "EMERGENCY TRANSPORT AND HOTEL EXPENSES " && <p className=" text-base">{item}: {privateCar.hotel}</p>}


                                                            {item !== "EMERGENCY TRANSPORT AND HOTEL EXPENSES " && item !== "PERSONAL BELONGING" && <p className=" text-base">{item}</p>}

                                                        </>
                                                    )
                                                })
                                            }
                                            {(privateCar.discount.length > 0) &&
                                                privateCar.discount.map((item) => {
                                                    return (
                                                        <p className=" text-base">{item}</p>


                                                    )
                                                })
                                            }
                                        </div>
                                    </div>


                                </Sidebar>}{sideBar && <div className="toggle-overlay" onClick={() => toggle()}></div>}
                            </div>
                            {/* {activeTab === "5" && <Premimum />} */}
                        </PreviewCard>
                    </Block>

                </Content>
            </React.Fragment >
        </UserContext.Provider >
    )
}
