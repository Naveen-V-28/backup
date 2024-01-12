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
import dat from './single';

import axios from 'axios';
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
import Insurerdetails from './Request';
import { UserContext } from './Vehicledetails';
export default function Premimum({ className, variation, ...props }) {
    const { privateCar, setPrivateCar, productCode, defaultcover } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState("0");
    const [range, setRange] = useState();

    const [modalTop, setModalTop] = useState(false);

    const toggleTop = () => setModalTop(!modalTop);
    const toggleCollapse = (param) => {
        if (param === isOpen) {
            setIsOpen("0");
        } else {
            setIsOpen(param);
        }
    };

    const [insurerdetails, setInsurerdetails] = useState();
    let productcode, customer, businessType, productName;


    if (privateCar.policyType === "New Business") {

        productcode = "PCC"
        businessType = "NEW BUSINESS"
        productName = "COMPREHENSIVE"
    }
    if (privateCar.policyType === "Rollover") {

        productcode = "PCC"
        businessType = "RollOver"
        productName = "COMPREHENSIVE"
    }
    if (privateCar.policyType === "Third Party") {

        productcode = "PCT"
        businessType = "RollOver"
        productName = "THIRDPARTY"
    }
    if (privateCar.customerType === "Individual") {
        customer = "CUSTOMER_INDIVIDUAL"
    }

    if (privateCar.customerType === "Company") {
        customer = "COMPANY"
    }

    if (privateCar.policyType === "Own Damage") {

        productcode = "PCCOD"
        businessType = "RollOver"
        productName = "PCC_OWNDAMAGE"
    }
    let coverageList = [];
    if (privateCar.policyType !== "Own Damage" && privateCar.customerType === "Individual") {
        coverageList = [{
            coverCode: "CPA",
            coverName: "COMPULSORY PERSONAL ACCIDENT(OWNER DRIVER)",
            coverType: "ADDITIONAL",
            isPrevOpted: "Y",
            isRateParam: "1500000",
            sumInsured: "0",
            sumInsuredType: "NONE"
        }]
    }
    if (privateCar.policyType !== "Own Damage" && privateCar.customerType === "Company") {
        coverageList = [{
            coverCode: "LLE",
            coverName: "LEGAL LIABILITY PAID TO EMPLOYEE",
            coverType: "ADDITIONAL",
            isPrevOpted: "Y",
            isRateParam: "",
            sumInsured: "0",
            sumInsuredType: "NONE"
        }]
    }
    productCode.map((list) => {
        return (
            privateCar.discount.includes(list.coverName) && (coverageList = [...coverageList, {
                coverCode: list.coverCode,
                coverName: list.coverName,
                coverType: list.coverType,
                isPrevOpted: "",
                isRateParam: "",
                sumInsured: "0",
                sumInsuredType: "NONE"
            }]))
    })
    productCode.map((list) => {
        return (
            (privateCar.addon.includes(list.coverName) && list.coverName !== "PERSONAL BELONGING" && list.coverName !== "EMERGENCY TRANSPORT AND HOTEL EXPENSES ") && (coverageList = [...coverageList, {
                coverCode: list.coverCode,
                coverName: list.coverName,
                coverType: list.coverType,
                isPrevOpted: "",
                isRateParam: "",
                sumInsured: "0",
                sumInsuredType: "NONE"
            }]))
    }
    )
    productCode.map((list) => {
        return (
            (privateCar.addon.includes(list.coverName) && list.coverName === "PERSONAL BELONGING") && (coverageList = [...coverageList, {
                coverCode: list.coverCode,
                coverName: list.coverName,
                coverType: list.coverType,
                isPrevOpted: "",
                isRateParam: "",
                sumInsured: privateCar.personal_belongings,
                sumInsuredType: "NONE"
            }]))
    }
    )
    productCode.map((list) => {
        return (
            (privateCar.addon.includes(list.coverName) && list.coverName === "EMERGENCY TRANSPORT AND HOTEL EXPENSES ") && (coverageList = [...coverageList, {
                coverCode: list.coverCode,
                coverName: list.coverName,
                coverType: list.coverType,
                isPrevOpted: "",
                isRateParam: "",
                sumInsured: privateCar.hotel,
                sumInsuredType: "NONE"
            }]))
    }
    )

    productCode.map((list) => {
        return (
            (privateCar.additionalCovers.includes(list.coverName) && list.coverName !== "P.A. COVER TO PAID DRIVER" && list.coverName !== "LEGAL LIABILITY PAID TO EMPLOYEE" && list.coverName !== "COMPULSORY PERSONAL ACCIDENT(OWNER DRIVER)" && list.coverName !== "UNNAMED PASSENGER" && list.coverName !== "BI-FUEL KIT (CNG)") && (coverageList = [...coverageList, {
                coverCode: list.coverCode,
                coverName: list.coverName,
                coverType: list.coverType,
                isPrevOpted: "",
                isRateParam: "",
                sumInsured: "0",
                sumInsuredType: "NONE"
            }]))
    })

    productCode.map((list) => {
        return (
            (privateCar.additionalCovers.includes(list.coverName) && list.coverName === "P.A. COVER TO PAID DRIVER") && (coverageList = [...coverageList, {
                coverCode: list.coverCode,
                coverName: list.coverName,
                coverType: list.coverType,
                isPrevOpted: "",
                isRateParam: "",
                sumInsured: privateCar.pa_cover,
                sumInsuredType: "NONE"
            }]))
    })
    productCode.map((list) => {
        return (
            (privateCar.additionalCovers.includes(list.coverName) && list.coverName === "UNNAMED PASSENGER") && (coverageList = [...coverageList, {
                coverCode: list.coverCode,
                coverName: list.coverName,
                coverType: list.coverType,
                isPrevOpted: "",
                isRateParam: "",
                sumInsured: privateCar.unnamed_passenger,
                sumInsuredType: "NONE"
            }]))
    })
    productCode.map((list) => {
        return (
            (privateCar.additionalCovers.includes(list.coverName) && list.coverName === "BI-FUEL KIT (CNG)") && (coverageList = [...coverageList, {
                coverCode: list.coverCode,
                coverName: list.coverName,
                coverType: list.coverType,
                isPrevOpted: "",
                isRateParam: "",
                sumInsured: privateCar.bi_fuel,
                sumInsuredType: "NONE"
            }]))
    })

    const request = {
        "CustomerDetails": {
            "firstName": "",
            "lastName": "",
            "mobileNo": "",
            "email": "",
            "customerType": customer,
            "GSTIN": "",
            "aadharNumber": "--",
            "dateOfBirth": "",
            "address1": "",
            "address2": "",
            "address3": "",
            "areaCode": "",
            "areaName": "",
            "cityCode": "",
            "cityName": "",
            "stateName": "",
            "stateCode": "",
            "pinCode": "",
            "panNumber": ""
        },
        "QuotationData": {
            "quoteNo": "",
            "renewalPolicyNo": "",
            "lineOfBusiness": "MOTOR",
            "subLine": "Private Car",
            "productCode": productcode,
            "productName": productName,
            "businessType": businessType,
            "policyStartDate": privateCar.policyStartDate,
            "expiryDate": privateCar.policyEndDate,
            "userId": "",
            "isVipPolicy": "N",
            "channelType": "POS",
            "branchName": "",
            "branchCode": "",
            "quoteStatus": "QUOTE",
            "insurerCode": "",
            "insurerName": "",
            "intgQuotationNo": "",
            "policyTenure": "1",
            "cpaTenure": "1",
            "newBusinessOdTp": "",
            "odExpiryDate": privateCar.odEndDate_nb,
            "tpExpiryDate": privateCar.tpEndDate_nb,
            "parentUserId": "saravanan@12",
            "walletType": "",
            "isCPADeclaration": "",
            "shortfallPercent": "0.0",
            "revisedDiscountRt": "0",
            "PreviousPolicyDetails": {
                "prevPolicyNo": "",
                "prevPolicyExp": privateCar.previousOdPolicyExpiryDate,
                "prevPolicyNcb": privateCar.ncb,
                "prevPolicyInsurerCode": privateCar.previousInsurerCode,
                "prevPolicyInsurerName": privateCar.previousInsurer,
                "isPrevPolicyClaim": privateCar.lastYearClaim,
                "prevPolicyType": privateCar.previousPolicyType,
                "prevPolicyODExpireDate": privateCar.previousOdPolicyExpiryDate,
                "prevPolicyTPExpireDate": privateCar.previousTpPolicyExpiryDate,
                "prevPolicyTPStartDate": privateCar.previousTpPolicyStartDate
            }
        },
        "VehicleDetails": {
            "engineNo": privateCar.engineNumber,
            "chassisNo": privateCar.chassisNumber,
            "registrationNo": privateCar.registrationNumber1 + "-" + privateCar.registrationNumber2 + "-" + privateCar.registrationNumber3 + "-" + privateCar.registrationNumber4,
            "yearOfMfg": privateCar.manufacturingYear,
            "registrationDate": privateCar.registrationDate,
            "makeCode": privateCar.makeCode,
            "modelCode": privateCar.modelCode,
            "makeName": privateCar.make,
            "modelName": privateCar.model,
            "subModelName": privateCar.subModel,
            "subModelCode": privateCar.subModelCode,
            "engineCC": "",
            "fuelType": privateCar.fuel,
            "rtoCode": privateCar.rtoCode,
            "rtoName": privateCar.zoneName,
            "actualIdv": 0,
            "vehicleAge": 1.03,
            "seatingCapacity": privateCar.seatingCapacity,
            "cubicCapacity": privateCar.cc,
            "zone": privateCar.zoneName,
            "currentNCB": privateCar.ncb,
            "isInBuilt": "false",
            "isCarOwnerChanged": privateCar.vehicleOwnershipChanged,
            "isUsedToVehicle": "N",
            "istrailerneed": "",
            "rtoNo": privateCar.rtoNo,
            "rtoRegistration": privateCar.rtoRegistration,
            "showRoomPrice": 0,
            "carrierType": "",
            "usageType": "",
            "noOfTraillers": "",
            "trailerIdvDto": [],
            "vehicleType": "",
            "regiCityCode": "",
            "regiCityName": privateCar.zoneName,
            "grossVehicleWeight": "null"
        },
        "CoverDetails": coverageList,
        "InsurerDetails": Insurerdetails,
    }

    const request1 = {
        "CustomerDetails": {
            "firstName": "",
            "lastName": "",
            "mobileNo": "",
            "email": "",
            "customerType": customer,
            "GSTIN": "",
            "aadharNumber": "--",
            "dateOfBirth": "",
            "address1": "",
            "address2": "",
            "address3": "",
            "areaCode": "",
            "areaName": "",
            "cityCode": "",
            "cityName": "",
            "stateName": "",
            "stateCode": "",
            "pinCode": "",
            "panNumber": ""
        },
        "QuotationData": {
            "quoteNo": privateCar.quoteId,
            "renewalPolicyNo": "",
            "lineOfBusiness": "MOTOR",
            "subLine": "Private Car",
            "productCode": productcode,
            "productName": productName,
            "businessType": businessType,
            "policyStartDate": privateCar.policyStartDate,
            "expiryDate": privateCar.policyEndDate,
            "userId": "",
            "isVipPolicy": "N",
            "channelType": "POS",
            "branchName": "",
            "branchCode": "",
            "quoteStatus": "QUOTE",
            "insurerCode": "",
            "insurerName": "",
            "intgQuotationNo": "",
            "policyTenure": "1",
            "cpaTenure": "1",
            "newBusinessOdTp": "",
            "odExpiryDate": "26/05/2022",
            "tpExpiryDate": "26/05/2024",
            "parentUserId": "saravanan@12",
            "walletType": "",
            "isCPADeclaration": "",
            "shortfallPercent": "0.0",
            "revisedDiscountRt": "0",
            "PreviousPolicyDetails": {
                "prevPolicyNo": "",
                "prevPolicyExp": privateCar.previousOdPolicyExpiryDate,
                "prevPolicyNcb": privateCar.ncb,
                "prevPolicyInsurerCode": privateCar.previousInsurerCode,
                "prevPolicyInsurerName": privateCar.previousInsurer,
                "isPrevPolicyClaim": privateCar.lastYearClaim,
                "prevPolicyType": privateCar.previousPolicyType,
                "prevPolicyODExpireDate": privateCar.previousOdPolicyExpiryDate,
                "prevPolicyTPExpireDate": privateCar.previousTpPolicyExpiryDate,
                "prevPolicyTPStartDate": privateCar.previousTpPolicyStartDate
            }
        },
        "VehicleDetails": {
            "engineNo": privateCar.engineNumber,
            "chassisNo": privateCar.chassisNumber,
            "registrationNo": privateCar.registrationNumber1 + "-" + privateCar.registrationNumber2 + "-" + privateCar.registrationNumber3 + "-" + privateCar.registrationNumber4,
            "yearOfMfg": privateCar.manufacturingYear,
            "registrationDate": "27/05/2021",
            "makeCode": privateCar.makeCode,
            "modelCode": privateCar.modelCode,
            "makeName": privateCar.make,
            "modelName": privateCar.model,
            "subModelName": privateCar.subModel,
            "subModelCode": privateCar.subModelCode,
            "engineCC": "",
            "fuelType": privateCar.fuel,
            "rtoCode": privateCar.rtoCode,
            "rtoName": privateCar.rotLocation,
            "actualIdv": 0,
            "vehicleAge": 1.03,
            "seatingCapacity": privateCar.seatingCapacity,
            "cubicCapacity": privateCar.cc,
            "zone": privateCar.zoneName,
            "currentNCB": privateCar.ncb,
            "isInBuilt": "false",
            "isCarOwnerChanged": privateCar.vehicleOwnershipChanged,
            "isUsedToVehicle": "N",
            "istrailerneed": "",
            "rtoNo": privateCar.rtoNo,
            "rtoRegistration": privateCar.rtoRegistration,
            "showRoomPrice": 0,
            "carrierType": "",
            "usageType": "",
            "noOfTraillers": "",
            "trailerIdvDto": [],
            "vehicleType": "",
            "regiCityCode": "",
            "regiCityName": privateCar.rotLocation,
            "grossVehicleWeight": "null"
        },
        "CoverDetails": coverageList,
        "InsurerDetails": [{
            "insurerCode": "124",
            "idv": 0,
            "minIdv": 0,
            "maxIdv": 0,
            "originalIdv": 0,
            "planName": "",
            "tariffDis": "0"
        },],
    }
    const [premium, setPremium] = useState();
    useEffect(() => {
        if (privateCar.save === "true") {
            axios({
                method: "POST",
                url: 'https://pot.fapremium.net/mis/api/saveQuoteDetails.json',
                headers,
                data: request,
            }).then(res => {
                console.log("save", res.data);
                setPrivateCar({ ...privateCar, quoteId: res.data.quoteNo })

            })
                .catch(err => {
                    console.log("error in request", err);
                });
            setPrivateCar({ ...privateCar, save: "false" })
        }
        if (privateCar.recalculate === "true") {
            axios({
                method: "POST",
                url: 'https://pot.fapremium.net/mis/api/singleInsurerCalc.json',
                headers,
                data: dat,
            }).then(res => {
                console.log("single ", res.data);
                setPremium(res.data.premium);
            })
                .catch(err => {
                    console.log("error in request", err);
                }); setPrivateCar({ ...privateCar, recalculate: "false" })
        }

    }, [privateCar.recalculate]);
    //console.log(request1)
    /*  useEffect(() => {
         axios({
             method: "POST",
             url: 'https://pot.fapremium.net/mis/api/saveQuoteDetails.json',
             headers,
             data: da,
         }).then(res => {
             console.log("save", res.data);
         })
             .catch(err => {
                 console.log("error in request", err);
             });
         axios({
             method: "POST",
             url: 'https://pot.fapremium.net/mis/api/singleInsurerCalc.json',
             headers,
             data: dat,
         }).then(res => {
             console.log("single ", res.data);
         })
             .catch(err => {
                 console.log("error in request", err);
             });

         /*  fetch('https://pot.fapremium.net/masters/api/getInsurerDetail.json', {
              method: 'POST',
              headers
          })
              .then((response) => response.json())
              .then((responseData) => {
                  setInsurerdetails(responseData.insurerList);
              }
   )
     }, []); */



    const handleAdd = (e) => {
        if (e.target.checked && privateCar.additionalCovers.includes(e.target.value) !== true) {
            setPrivateCar({ ...privateCar, additionalCovers: [...privateCar.additionalCovers, e.target.value] })
        }
        else {
            if (privateCar.additionalCovers.includes(e.target.value) === true) {
                let val = privateCar.additionalCovers.filter((it) => it !== e.target.value);
                setPrivateCar({ ...privateCar, additionalCovers: val })
            }
        }
    }
    const handleAddon = (e) => {
        if (e.target.checked && privateCar.addon.includes(e.target.value) !== true) {
            setPrivateCar({ ...privateCar, addon: [...privateCar.addon, e.target.value] })
        }
        else {
            if (privateCar.addon.includes(e.target.value) === true) {
                let val1 = privateCar.addon.filter((it) => it !== e.target.value);
                setPrivateCar({ ...privateCar, addon: val1 })
            }
        }
    }
    const handleDiscount = (e) => {
        if (e.target.checked && privateCar.discount.includes(e.target.value) !== true) {
            setPrivateCar({ ...privateCar, discount: [...privateCar.discount, e.target.value] })
        }
        else {
            if (privateCar.discount.includes(e.target.value) === true) {
                let val = privateCar.discount.filter((it) => it !== e.target.value);
                setPrivateCar({ ...privateCar, discount: val })
            }
        }
    }
    const handledrop = (e, v) => {
        if (v === "P.A. COVER TO PAID DRIVER") {
            setPrivateCar({ ...privateCar, pa_cover: (e.target.value) })
        }
        else if (v === "UNNAMED PASSENGER") {
            setPrivateCar({ ...privateCar, unnamed_passenger: (e.target.value) })
        }
    }
    const handleaddonDrop = (e, v) => {
        if (v === "PERSONAL BELONGING") {
            setPrivateCar({ ...privateCar, personal_belongings: (e.target.value) })
        }
        else if (v === "EMERGENCY TRANSPORT AND HOTEL EXPENSES ") {
            setPrivateCar({ ...privateCar, hotel: (e.target.value) })
        }
    }




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
    console.log(privateCar)

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

                            <Button color='primary' className="btn " size="md" onClick={toggleTop}>
                                Change IDV
                            </Button>
                            <Modal isOpen={modalTop} toggle={toggleTop} className="modal-dialog-top">
                                <ModalHeader
                                    toggle={toggleTop}
                                    close={
                                        <button className="close" onClick={toggleTop}>
                                            <Icon name="cross" />
                                        </button>}>
                                    IDV Value
                                </ModalHeader>
                                <ModalBody>
                                    <label for="customRange1" class="form-label">Example range</label>
                                    <input type="range" class="form-range" min={0} max={10} onChange={(e) => setRange(e.target.value)} id="customRange1" value={range}></input>
                                    <p>{range}</p>

                                </ModalBody>
                                <ModalFooter className="bg-light">
                                    <Button color='primary'>Update</Button>
                                </ModalFooter>
                            </Modal>


                        </div>
                        <div className="card-inner   ">
                            <div className="accordion">
                                <div className="accordion-item">
                                    <div className="accordion-head"
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
                                                    productCode.filter(name => (name.coverType).includes("ADDON")).map((filteredName) => {
                                                        return (
                                                            <><li>
                                                                <div onClick={(e) => handleAddon(e)} className="custom-control custom-control-sm custom-checkbox mb-2" >
                                                                    {(privateCar.addon.includes(filteredName.coverName)) ?
                                                                        <><input value={filteredName.coverName} type="checkbox" className="custom-control-input" defaultChecked id={filteredName.coverCode + 10} name="user-choose" />
                                                                            <label className="custom-control-label" htmlFor={filteredName.coverCode + 10}>
                                                                                <span className="user-card">                           <span className="user-name">{filteredName.coverName}</span>
                                                                                </span>
                                                                            </label> </>

                                                                        : <> <input value={filteredName.coverName} type="checkbox" className="custom-control-input" id={filteredName.coverCode + 10} name="user-choose" />
                                                                            <label className="custom-control-label" htmlFor={filteredName.coverCode + 10}>

                                                                                <span >{filteredName.coverName}</span>

                                                                            </label></>}
                                                                </div>
                                                            </li>
                                                                <li>  {
                                                                    privateCar.addon.includes(filteredName.coverName) && filteredName.sumInsuredList.length > 0 &&
                                                                    <div className="bg-primary-dim card-inner mb-2 rounded-2 border-2 border-primary"> <label className="form-label " htmlFor="list1">Sum Insured </label>
                                                                        <select className="form-control " onChange={(e) => handleaddonDrop(e, filteredName.coverName)} type="select" name="select" id="list1">
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
                                                                <div className="custom-control custom-control-sm custom-checkbox mb-2" onClick={(e) => handleAdd(e)}>
                                                                    {(privateCar.additionalCovers.includes(filteredName.coverName)) ? <><input value={filteredName.coverName} type="checkbox" className="custom-control-input" defaultChecked id={filteredName.coverCode} name="user-choose" />
                                                                        <label className="custom-control-label" htmlFor={filteredName.coverCode}>
                                                                            <span className="user-card">                           <span className="user-name">{filteredName.coverName}</span>
                                                                            </span>
                                                                        </label> </> : <><input value={filteredName.coverName} type="checkbox" className="custom-control-input" id={filteredName.coverCode + 20} name="user-choose" />
                                                                        <label className="custom-control-label" htmlFor={filteredName.coverCode + 20}>
                                                                            <span >{filteredName.coverName}</span>

                                                                        </label></>}
                                                                </div>
                                                            </li>
                                                                <li> {
                                                                    privateCar.additionalCovers.includes(filteredName.coverName) && filteredName.sumInsuredList.length > 0 &&
                                                                    <div className="bg-primary-dim card-inner mb-2 rounded-2 border-2 border-primary"><label className="form-label" htmlFor="list1">Sum Insured </label>
                                                                        <select onChange={(e) => handledrop(e, filteredName.coverName)} className="form-control form-select" type="select" name="select" id="default-4">
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
                                                                <div className="custom-control custom-control-sm custom-checkbox" onClick={(e) => handleDiscount(e)} >
                                                                    <input type="checkbox" className="custom-control-input" id={filteredName.coverCode + 30} value={filteredName.coverName} name="user-choose" />
                                                                    <label className="custom-control-label" htmlFor={filteredName.coverCode + 30}>

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

                                <div className="accordion-item">
                                    <div
                                        className="accordion-head collapsed"
                                        onClick={() => toggleCollapse("6")}
                                    >
                                        <h6 className="title">
                                            Previous Covers
                                        </h6>
                                    </div>
                                    <Collapse
                                        className="accordion-body"
                                        isOpen={isOpen === "6" ? true : false}
                                    >
                                        <div className="accordion-inner">
                                            <ul className="custom-control-group custom-control-vertical custom-control-stacked w-100">
                                                {privateCar.policyType !== "" && productCode !== undefined &&
                                                    productCode.filter(name => name.coverType.includes("DISCOUNTS") || name.coverType.includes("ADDON") || name.coverType.includes("ADDITIONAL")).map(filteredName => {
                                                        return (
                                                            <li>
                                                                <div className="custom-control custom-control-sm custom-checkbox mb-2" >
                                                                    <input type="checkbox" className="custom-control-input" id={filteredName.coverCode + 40} value={filteredName.coverName} name="user-choose" />
                                                                    <label className="custom-control-label" htmlFor={filteredName.coverCode + 40}>

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
                        <div className='text-center w-100'>
                            <Button color="primary" onClick={() => setPrivateCar({ ...privateCar, recalculate: "true" })}> Re-calculate</Button>
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
                                <Row className='card-inner'> <Col lg="6" className='align-center justify-content-center'><p ><strong className='text-black'>Min IDV</strong> : <span className='mt-2 '><Icon name="sign-inr" /> 680000 </span></p>
                                </Col>
                                    <Col lg="6" className='align-center justify-content-center'><p ><strong className='text-black'>Max IDV</strong> : <span className='mt-2 '><Icon name="sign-inr" /> 680000 </span></p>
                                    </Col></Row>
                                <Row className='card-inner'  >

                                    <Col className='align-center '>



                                        <div >

                                            <div >
                                                <div

                                                    onClick={() => toggleCollapse("5")}
                                                >
                                                    <Button size='sm' color='primary'>Addon</Button>

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
                            <Col lg="3" className="border-start card-inner text-center gy-2 ">
                                <Col>    <h5 className=' text-center' > <Icon name="sign-inr" />7500</h5></Col>
                                <Col>   <Button color='primary' size='md' onClick={toggle}>Premium Breakup</Button></Col>
                                <Col className=''>   <Button color='primary' className="btn" size='md' >Buy</Button></Col>
                            </Col>
                        </Row>
                    </Card>


                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader
                    toggle={toggle}
                    close={
                        <div>
                            <button className="close ms-2" onClick={toggle}>
                                <Icon name="cross" />
                            </button>
                            <button className="close" >
                                <Icon name="share" />
                            </button>

                        </div>
                    }
                >
                    Premium Breakup
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group border-bottom">
                            <h6>Basic Cover</h6>
                            <div>
                                {
                                    (defaultcover.length > 0) && defaultcover.map((item) =>
                                    (

                                        item.coverName !== "24 x 7 Individual PA" && <p>{item.coverName}</p>

                                    ))

                                }
                            </div>
                        </div>
                        <div className="form-group border-bottom">
                            <h6>Addons</h6>
                            <div>
                                {(privateCar.addon.length > 0) && privateCar.addon.map((item) =>
                                (
                                    <p>{item}</p>

                                ))}
                                {(privateCar.additionalCovers.length > 0) && privateCar.additionalCovers.map((item) =>
                                (
                                    <p>{item}</p>

                                ))}
                                {(privateCar.discount.length > 0) && privateCar.discount.map((item) =>
                                (
                                    <p>{item}</p>

                                ))}
                            </div>
                        </div>
                        <div className="form-group border-bottom">
                            <h6>Discounts</h6>
                            <div></div>
                        </div>
                        <Button color='primary' onClick={(e) => (e.preventDefault())}>Pay</Button>

                    </form>
                </ModalBody>

            </Modal>


        </Block>


    )
}
