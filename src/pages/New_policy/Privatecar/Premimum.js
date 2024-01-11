import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Collapse, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { Block, Icon } from '../../../components/Component';
import img101 from "../Insurer_Images/101.png";
import img104 from "../Insurer_Images/104.png";
import img105 from "../Insurer_Images/105.png";
import img107 from "../Insurer_Images/107.png";
import img112 from "../Insurer_Images/112.png";
import img114 from "../Insurer_Images/114.png";
import img115 from "../Insurer_Images/115.png";
import img116 from "../Insurer_Images/116.png";
import img117 from "../Insurer_Images/117.png";
import img118 from "../Insurer_Images/118.png";
import img120 from "../Insurer_Images/120.png";
import img122 from "../Insurer_Images/122.png";
import img123 from "../Insurer_Images/123.png";
import img124 from "../Insurer_Images/124.png";
import img125 from "../Insurer_Images/125.png";
import img126 from "../Insurer_Images/126.png";
import img127 from "../Insurer_Images/127.png";
import img128 from "../Insurer_Images/128.png";
import img129 from "../Insurer_Images/129.png";
import img130 from "../Insurer_Images/130.png";
import img131 from "../Insurer_Images/131.png";
import img133 from "../Insurer_Images/133.png";
import img135 from "../Insurer_Images/135.png";
import headers from '../token';
import { UserContext } from './Vehicledetails';
export default function Premimum({ className, variation, ...props }) {
    const { privateCar, setPrivateCar, productCode } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState("0");
    const toggleCollapse = (param) => {
        if (param === isOpen) {
            setIsOpen("0");
        } else {
            setIsOpen(param);
        }
    };

    const [insurerdetails, setInsurerdetails] = useState();
    useEffect(() => {
        fetch('https://pot.fapremium.net/masters/api/getInsurerDetail.json', {
            method: 'POST',
            headers
        })
            .then((response) => response.json())
            .then((responseData) => {
                setInsurerdetails(responseData.insurerList);
            }


            )
    }, []);
    const [sm, updateSm] = useState(false);
    let images = [img133, img101, img104, img105, img107, img135, img112, img114, img115, img116, img117, img118, img120, img122, img123, img124, img125, img126, img127, img128, img129, img130, img131]
    const [mobileView, setMobileView] = useState(false);
    const viewChange = () => {
        if (window.innerWidth < 990) {
            setMobileView(true);
        } else {
            setMobileView(false);
            updateSm(false);
        }
    };


    useEffect(() => {
        viewChange();
        window.addEventListener("load", viewChange);
        window.addEventListener("resize", viewChange);
        document.getElementsByClassName("nk-header")[0].addEventListener("click", function () {
            updateSm(false);
        });
        return () => {
            window.removeEventListener("resize", viewChange);
            window.removeEventListener("load", viewChange);
        };
    }, []);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Block>
            <div className="card-aside-wrap">
                <div
                    className={`card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg w-25 ${sm ? "content-active" : ""
                        }`}
                >
                    <div className="card-group">
                        <div className="card-inner border-bottom ">

                            <Button className="btn btn-dim bg-purple-dim" size="md" onClick={() => props.handleBack()}>Back</Button>


                        </div>
                        <div className="card-inner border-bottom  ">

                            <Button className="btn btn-dim bg-purple-dim" size="md" >Change IDV</Button>


                        </div>
                        <div className="card-inner border-bottom  ">


                            <div className="accordion">

                                <div className="accordion-item">
                                    <div
                                        className="accordion-head"
                                        onClick={() => toggleCollapse("1")}
                                    >
                                        <h6 className="title">Addon Covers</h6>

                                    </div>
                                    <Collapse
                                        className="accordion-body"
                                        isOpen={isOpen === "1" ? true : false}
                                    >
                                        <div className="accordion-inner">
                                            <ul className="custom-control-group custom-control-vertical custom-control-stacked w-100">
                                                {privateCar.policyType !== "" && productCode !== undefined &&
                                                    productCode.filter(name => (name.coverType).includes("ADDON")).map(filteredName => {
                                                        return (
                                                            <><li>
                                                                <div className="custom-control custom-control-sm custom-checkbox mb-2" >
                                                                    <input value={filteredName.coverName} type="checkbox" className="custom-control-input" id={filteredName.coverCode + 10} name="user-choose" />
                                                                    <label className="custom-control-label" htmlFor={filteredName.coverCode}>

                                                                        <span >{filteredName.coverName}</span>

                                                                    </label>
                                                                </div>
                                                            </li>
                                                                <li>  {
                                                                    privateCar.addon.includes(filteredName.coverName) && filteredName.sumInsuredList.length > 0 &&
                                                                    <div className="bg-primary-dim card-inner mb-2 rounded-2 border-2 border-primary"> <label className="form-label " htmlFor="list1">Sum Insured </label>
                                                                        <select className="form-control " type="select" name="select" id="list1">
                                                                            <option value="">Select</option>
                                                                            {
                                                                                filteredName.sumInsuredList.map((item, index) => (<option value={item}>{item}</option>)
                                                                                )
                                                                            }
                                                                        </select></div>
                                                                }</li>
                                                            </>
                                                        )
                                                    })}
                                            </ul>
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <div
                                        className="accordion-head collapsed"
                                        onClick={() => toggleCollapse("2")}
                                    >
                                        <h6 className="title">
                                            Additional Covers
                                        </h6>
                                    </div>
                                    <Collapse
                                        className="accordion-body"
                                        isOpen={isOpen === "2" ? true : false}
                                    >
                                        <div className="accordion-inner">
                                            <ul className="custom-control-group custom-control-vertical custom-control-stacked w-100">
                                                {privateCar.policyType !== "" && productCode !== undefined &&
                                                    productCode.filter(name => (name.coverType).includes("ADDITIONAL")).map(filteredName => {
                                                        return (
                                                            <> <li>
                                                                <div className="custom-control custom-control-sm custom-checkbox mb-2">
                                                                    <input value={filteredName.coverName} type="checkbox" className="custom-control-input" id={filteredName.coverCode} name="user-choose" />
                                                                    <label className="custom-control-label" htmlFor={filteredName.coverCode}>
                                                                        <span >{filteredName.coverName}</span>

                                                                    </label>

                                                                </div>
                                                            </li>
                                                                <li> {
                                                                    privateCar.additionalCovers.includes(filteredName.coverName) && filteredName.sumInsuredList.length > 0 &&
                                                                    <div className="bg-primary-dim card-inner mb-2 rounded-2 border-2 border-primary"><label className="form-label" htmlFor="list1">Sum Insured </label>
                                                                        <select className="form-control form-select" type="select" name="select" id="default-4">
                                                                            <option value="">Select</option>
                                                                            {
                                                                                filteredName.sumInsuredList.map((item) => (<option value={item}>{item}</option>)
                                                                                )
                                                                            }
                                                                        </select></div>
                                                                }</li>
                                                                <li> {
                                                                    privateCar.additionalCovers.includes(filteredName.coverName) && filteredName.coverName === "BI-FUEL KIT (CNG)" &&
                                                                    <div className="bg-primary-dim card-inner mb-2 rounded-2 border-2 border-primary">
                                                                        <label className="form-label " htmlFor="list1">Sum Insured </label><input className="form-control" onChange={(e) => setPrivateCar({ ...privateCar, bi_fuel: (e.target.value) })} type="number" placeholder="Enter the values"></input></div>
                                                                }</li>
                                                            </>
                                                        )
                                                    })}
                                            </ul>
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="accordion-item">
                                    <div
                                        className="accordion-head collapsed"
                                        onClick={() => toggleCollapse("3")}
                                    >
                                        <h6 className="title">
                                            Discount
                                        </h6>
                                    </div>
                                    <Collapse
                                        className="accordion-body"
                                        isOpen={isOpen === "3" ? true : false}
                                    >
                                        <div className="accordion-inner">
                                            <ul className="custom-control-group custom-control-vertical custom-control-stacked w-100">
                                                {privateCar.policyType !== "" && productCode !== undefined &&
                                                    productCode.filter(name => (name.coverType).includes("DISCOUNTS")).map(filteredName => {
                                                        return (
                                                            <li>
                                                                <div className="custom-control custom-control-sm custom-checkbox" >
                                                                    <input type="checkbox" className="custom-control-input" id={filteredName.coverCode} value={filteredName.coverName} name="user-choose" />
                                                                    <label className="custom-control-label" htmlFor={filteredName.coverCode}>

                                                                        <span >{filteredName.coverName}</span>

                                                                    </label>
                                                                </div>
                                                            </li>

                                                        )
                                                    })}
                                            </ul>
                                        </div>
                                    </Collapse>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>
                <div className="card-inner card-inner-lg">
                    {sm && mobileView && <div className="toggle-overlay" onClick={() => updateSm(!sm)}></div>}

                    <Card className='bg-purple-dim border-2 border-primary '>
                        <Row className="row">
                            <Col lg="8" className=" card-inner gy-2">
                                <Row className='card-inner' >

                                    <Col sm="3" className=' align-center'>
                                        <img src={img133}
                                            alt="img" />
                                    </Col>

                                    <Col sm="5" className='align-center '><h5>Name</h5>
                                    </Col>

                                </Row>
                                <Row className='card-inner'  >

                                    <Col lg="4" className='align-center'><span className=' bg-info rounded text-center px-1'>Recomended</span></Col>
                                    <Col lg="4" className='align-center justify-content-center'><p ><strong className='text-black'>IDV</strong> : <span className='mt-2 '><Icon name="sign-inr" /> 680000 </span></p>
                                    </Col>
                                    <Col lg="4" className="align-center justify-content-center"><Button size="sm" color='white' className=" btn btn"><span> Download</span>  <Icon name="arrow-to-down" /></Button></Col>
                                </Row>
                                <Row className='card-inner'  >

                                    <Col className='align-center '>



                                        <div >

                                            <div >
                                                <div

                                                    onClick={() => toggleCollapse("5")}
                                                >
                                                    <Button size='sm' color='primary'>Addon Covers</Button>

                                                </div>
                                                <Collapse
                                                    className="accordion-body"
                                                    isOpen={isOpen === "5" ? true : false}
                                                >
                                                    <div className="accordion-inner bg-white rounded-2">
                                                        {privateCar.additionalCovers.length > 0 && privateCar.additionalCovers.map((item) => (
                                                            <p className='text-base'>{item}</p>
                                                        ))}

                                                        {privateCar.addon.length > 0 && privateCar.addon.map((item) => (
                                                            <p className='text-base'>{item}</p>
                                                        ))}
                                                        {privateCar.discount.length > 0 && privateCar.discount.map((item) => (
                                                            <p className='text-base'>{item}</p>
                                                        ))}
                                                    </div>
                                                </Collapse>
                                            </div>
                                        </div>




                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="3" className="border-start card-inner justify-content-center ">
                                <h5 className='mb-2 text-center' > <Icon name="sign-inr" />7500</h5>
                                <Button color='primary' className="btn" size='md' onClick={toggle}>Premium Breakup</Button>
                            </Col>
                        </Row>
                    </Card>


                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader
                    toggle={toggle}
                    close={
                        <button className="close" onClick={toggle}>
                            <Icon name="cross" />
                        </button>
                    }
                >
                    Modal title
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label className="form-label" htmlFor="full-name">
                                Full Name
                            </label>
                            <div className="form-control-wrap">
                                <input type="text" className="form-control" id="full-name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <div className="form-control-wrap">
                                <input type="text" className="form-control" id="email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="phone-no">
                                Phone No
                            </label>
                            <div className="form-control-wrap">
                                <input type="number" className="form-control" id="phone-no" defaultValue="0880" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Communication</label>
                            <ul className="custom-control-group g-3 align-center">
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="form-control custom-control-input"
                                            id="fv-com-email"
                                            name="com"
                                            value="email"
                                        />
                                        <label className="custom-control-label" htmlFor="fv-com-email">
                                            Email
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="form-control custom-control-input"
                                            id="fv-com-sms"
                                            name="com"
                                            value="sms"
                                        />
                                        <label className="custom-control-label" htmlFor="fv-com-sms">
                                            SMS
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="fv-com-phone"
                                            name="com"
                                            value="phone"
                                        />
                                        <label className="custom-control-label" htmlFor="fv-com-phone">
                                            {" "}
                                            Phone{" "}
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="amount">
                                Amount
                            </label>
                            <div className="form-control-wrap">
                                <input type="text" className="form-control" id="amount" />
                            </div>
                        </div>
                        <div className="form-group">
                            <Button color="primary" type="submit" onClick={(ev) => ev.preventDefault()} size="lg">
                                Save Information
                            </Button>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter className="bg-light">
                    <span className="sub-text">Modal Footer Text</span>
                </ModalFooter>
            </Modal>


        </Block>


    )
}