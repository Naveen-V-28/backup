import classnames from "classnames";
import React, { useState } from 'react';
import { Button, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

import {
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    Icon,
    PreviewCard
} from '../../../components/Component';

import Content from '../../../layout/content/Content';
import Head from '../../../layout/head/Head';
import Activities from "./Activities";
import PolicyPerquisite from "./PolicyPerquisite";
import PreviousInsurer from "./PreviousInsurer";
import Vehicle from "./Vehicle";
export default function Twowheeler() {

    const [activeTab, setActiveTab] = useState("1");
    const [activeIconTab, setActiveIconTab] = useState("1");

    const handleNext = () => {
        if (activeTab !== "5") {
            let str = (parseInt(activeTab) + 1).toString();

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
    }
    const [currDate, setCurrdate] = useState("Jan 01")
    const [currYear, setCurryear] = useState("2023")
    const [currTime, setCurrtime] = useState("00:00")
    const handleSave = () => {
        let currentDate = new Date().toString();
        setCurrdate(currentDate.slice(4, 10));
        setCurryear(currentDate.slice(11, 15));
        setCurrtime(currentDate.slice(16, 21));

    }

    return (


        <React.Fragment >
            <Head title="Claims" />
            <Content >
                <BlockHead size="sm">

                    <BlockHeadContent>
                        <BlockTitle page>Your Trusted Insurance Partner</BlockTitle>
                        <h5 className='ibms'>Quote ID: 89793907</h5>
                    </BlockHeadContent>

                </BlockHead>
                <Block>
                    <PreviewCard>
                        <Nav tabs className="mt-n3 ">
                            <NavItem >
                                <NavLink
                                    tag="a"

                                    className={classnames({ active: activeIconTab === "1" })}
                                    onClick={() => {
                                        setActiveIconTab("1"); setActiveTab("1")
                                    }}
                                >
                                    <Icon name="user-circle" /> <span>Policy Perquisite </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    tag="a"

                                    className={classnames({ active: activeIconTab === "2" })}
                                    onClick={(ev) => {
                                        setActiveIconTab("2"); setActiveTab("2")
                                    }}
                                >
                                    <Icon name="repeat" /> <span>Vehicle Details</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    tag="a"

                                    className={classnames({ active: activeIconTab === "3" })}
                                    onClick={(ev) => {
                                        setActiveIconTab("3"); setActiveTab("3")
                                    }}
                                >
                                    <Icon name="file-text" /> <span>Previous Insurer</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    tag="a"

                                    className={classnames({ active: activeIconTab === "4" })}
                                    onClick={(ev) => {
                                        setActiveIconTab("4"); setActiveTab("4")
                                    }}
                                >
                                    <Icon name="bell" /> <span>Add-on Covers</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    tag="a"

                                    className={classnames({ active: activeIconTab === "5" })}
                                    onClick={(ev) => {
                                        setActiveIconTab("5"); setActiveTab("5")
                                    }}
                                >
                                    <Icon name="activity" /> <span>Activities</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <PolicyPerquisite handleNext={handleNext} handleBack={handleBack} />

                            </TabPane>
                            <TabPane tabId="2">
                                <Vehicle handleNext={handleNext} handleBack={handleBack} />
                            </TabPane>
                            <TabPane tabId="3">
                                <PreviousInsurer handleNext={handleNext} handleBack={handleBack} />
                            </TabPane>
                            <TabPane tabId="4">
                                <PreviousInsurer handleNext={handleNext} handleBack={handleBack} />
                            </TabPane>
                            <TabPane tabId="5">
                                <Activities handleNext={handleNext} handleBack={handleBack} />
                            </TabPane>
                        </TabContent>


                        <hr />
                        <Block>
                            <BlockTitle page>Quotation Notes</BlockTitle>
                            <div className=" mt-4">
                                <label className="form-label" htmlFor="cf-default-textarea">
                                    Brief Description
                                </label>
                                <div className="form-control-wrap">
                                    <textarea
                                        className="form-control form-control-sm"
                                        id="cf-default-textarea"
                                        placeholder="Write your message"
                                    ></textarea>
                                </div>
                            </div>
                            <div className='my-2'>
                                <Button onClick={handleSave} color='primary' size="md">
                                    Save
                                </Button>
                            </div>
                            <PreviewCard className='bg-gray-dim'>
                                <p>Aproin at metus et dolor tincidunt feugiat eu id quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean sollicitudin non nunc vel pharetra.</p>
                            </PreviewCard>

                            <div className='mt-4 text-gray'><span>Added on <span className='text-dark'>{currDate}, {currYear}</span> at <span className='text-dark'>{currTime}</span> | By <span className='text-dark'>Super Admin</span></span></div>
                        </Block>
                    </PreviewCard>
                </Block>
            </Content>
        </React.Fragment >
    )
}
