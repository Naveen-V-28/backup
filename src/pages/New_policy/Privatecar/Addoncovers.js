import { useContext } from "react";
import { Button, Card, Col, Row } from "reactstrap";
import {
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    OverlineTitle
} from '../../../components/Component';
import { UserContext } from "./Vehicledetails";

export default function Addoncovers(props) {
    const { privateCar, setPrivateCar, productCode } = useContext(UserContext);




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

    return (
        < >
            <BlockHead size="sm">
                <BlockHeadContent>
                    <BlockTitle page>Create New Claim Request</BlockTitle>
                    <span >Basic info, like insured name and address for which claim needs to be processed</span>
                </BlockHeadContent>
            </BlockHead>
            <Block >
                <Row className="gy-4">
                    {privateCar.policyType !== "Third Party" && <Col md="6" lg="6">
                        <OverlineTitle className="preview-title">ADDON COVERS</OverlineTitle>
                        <ul className="custom-control-group custom-control-vertical custom-control-stacked w-100">
                            {privateCar.policyType !== "" && productCode !== undefined &&
                                productCode.filter(name => (name.coverType).includes("ADDON")).map(filteredName => {
                                    return (
                                        <><li>
                                            <div className="custom-control custom-control-sm custom-checkbox custom-control-pro" >
                                                <input onClick={(e) => handleAddon(e)} value={filteredName.coverName} type="checkbox" className="custom-control-input" id={filteredName.coverCode} name="user-choose" />
                                                <label className="custom-control-label" htmlFor={filteredName.coverCode}>
                                                    <span className="user-card">
                                                        <span className="user-name">{filteredName.coverName}</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </li>
                                            <li>  {
                                                privateCar.addon.includes(filteredName.coverName) && filteredName.sumInsuredList.length > 0 &&
                                                <Card className="bg-light card-inner"> <label className="form-label pt-1" htmlFor="list1">Sum Insured </label>
                                                    <select className="form-control mb-3 " onClick={(e) => handleaddonDrop(e, filteredName.coverName)} type="select" name="select" id="list1">
                                                        <option value="">Select</option>
                                                        {
                                                            filteredName.sumInsuredList.map((item, index) => (<option value={item}>{item}</option>)
                                                            )
                                                        }
                                                    </select></Card>
                                            }</li>
                                        </>
                                    )
                                })}
                        </ul>
                    </Col>}
                    <Col md="6" lg="6" >
                        <>  <div className="mb-4"> <OverlineTitle className="preview-title">ADDITIONAL COVERS</OverlineTitle>
                            <ul className="custom-control-group custom-control-vertical custom-control-stacked w-100">
                                {privateCar.policyType !== "" && productCode !== undefined &&
                                    productCode.filter(name => (name.coverType).includes("ADDITIONAL")).map(filteredName => {
                                        return (
                                            <> <li>
                                                <div className="custom-control custom-control-sm custom-checkbox custom-control-pro" onClick={(e) => handleAdd(e)} >
                                                    {(privateCar.customerType === "Individual" && filteredName.coverName === "COMPULSORY PERSONAL ACCIDENT(OWNER DRIVER)") && <><input value={filteredName.coverName} type="checkbox" className="custom-control-input" defaultChecked id={filteredName.coverCode} name="user-choose" />
                                                        <label className="custom-control-label" htmlFor={filteredName.coverCode}>
                                                            <span className="user-card">                           <span className="user-name">{filteredName.coverName}</span>
                                                            </span>
                                                        </label> </>}

                                                    {
                                                        (privateCar.customerType === "Company" && filteredName.coverName === "LEGAL LIABILITY PAID TO EMPLOYEE") && <><input value={filteredName.coverName} type="checkbox" className="custom-control-input" defaultChecked id={filteredName.coverCode} name="user-choose" />
                                                            <label className="custom-control-label" htmlFor={filteredName.coverCode}>
                                                                <span className="user-card">                           <span className="user-name">{filteredName.coverName}</span>
                                                                </span>
                                                            </label> </>}

                                                    {
                                                        privateCar.customerType === "Individual" ? filteredName.coverName !== "COMPULSORY PERSONAL ACCIDENT(OWNER DRIVER)" && <><input value={filteredName.coverName} type="checkbox" className="custom-control-input" id={filteredName.coverCode} name="user-choose" />
                                                            <label className="custom-control-label" htmlFor={filteredName.coverCode}>
                                                                <span className="user-card">                           <span className="user-name">{filteredName.coverName}</span>
                                                                </span>
                                                            </label> </> :
                                                            filteredName.coverName !== "LEGAL LIABILITY PAID TO EMPLOYEE" && <><input value={filteredName.coverName} type="checkbox" className="custom-control-input" id={filteredName.coverCode} name="user-choose" />
                                                                <label className="custom-control-label" htmlFor={filteredName.coverCode}>
                                                                    <span className="user-card">                           <span className="user-name">{filteredName.coverName}</span>
                                                                    </span>
                                                                </label> </>}
                                                </div>
                                            </li>
                                                <li> {
                                                    privateCar.additionalCovers.includes(filteredName.coverName) && filteredName.sumInsuredList.length > 0 &&
                                                    <Card className="bg-light card-inner"><label className="form-label pt-1" htmlFor="list1">Sum Insured </label>
                                                        <select onChange={(e) => handledrop(e, filteredName.coverName)} className="form-control form-select mb-3" type="select" name="select" id="default-4">
                                                            <option value="">Select</option>
                                                            {
                                                                filteredName.sumInsuredList.map((item) => (<option value={item}>{item}</option>)
                                                                )
                                                            }
                                                        </select></Card>
                                                }</li>
                                                <li> {
                                                    privateCar.additionalCovers.includes(filteredName.coverName) && filteredName.coverName === "BI-FUEL KIT (CNG)" &&
                                                    <Card className="bg-light card-inner">
                                                        <label className="form-label pt-1" htmlFor="list1">Sum Insured </label><input className="form-control" onChange={(e) => setPrivateCar({ ...privateCar, bi_fuel: (e.target.value) })} type="number" placeholder="Enter the values"></input></Card>
                                                }</li>
                                            </>
                                        )
                                    })}
                            </ul> </div>

                            {privateCar.policyType !== "Own Damage" &&
                                <div >  <OverlineTitle className="preview-title">DISCOUNT </OverlineTitle>
                                    <ul className="custom-control-group custom-control-vertical custom-control-stacked w-100">
                                        {privateCar.policyType !== "" && productCode !== undefined &&
                                            productCode.filter(name => (name.coverType).includes("DISCOUNTS")).map(filteredName => {
                                                return (
                                                    <> <li>
                                                        <div className="custom-control custom-control-sm custom-checkbox custom-control-pro" onClick={(e) => handleDiscount(e)} >
                                                            <input type="checkbox" className="custom-control-input" id={filteredName.coverCode} value={filteredName.coverName} name="user-choose" />
                                                            <label className="custom-control-label" htmlFor={filteredName.coverCode}>
                                                                <span className="user-card">
                                                                    <span className="user-name">{filteredName.coverName}</span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                    </>
                                                )
                                            })}
                                    </ul>
                                </div>
                            }</>  </Col>
                </Row>
                <Row className="mt-4 text-center">
                    <Col md="2" className="text-center " >
                        <Button className="btn " color="primary" onClick={() => props.handleNext()} >Calculate</Button>
                    </Col>

                    <Col md="2">
                        <Button className="btn btn-dim bg-purple-dim" size="md" onClick={() => props.handleBack()}>GO BACK</Button>
                    </Col>
                </Row>
            </Block >
        </ >
    )
}
