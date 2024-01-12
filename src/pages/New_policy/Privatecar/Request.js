/* import axios from "axios";
import { useContext, useEffect } from "react";
import headers from "../token";
import { UserContext } from "./Vehicledetails"; */
let Insurerdetails = [
    {
        "insurerCode": "135",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "111",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "122",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "129",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "105",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "135",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "125",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "121",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "133",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "124",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "121",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "118",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "125",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "112",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "128",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "Silver",
        "tariffDis": "0"
    },
    {
        "insurerCode": "124",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "105",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "125",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "116",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "120",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "111",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "122",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "129",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "117",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "114",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "138",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "138",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "107",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "126",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "107",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    },
    {
        "insurerCode": "138",
        "idv": 0,
        "minIdv": 0,
        "maxIdv": 0,
        "originalIdv": 0,
        "planName": "",
        "tariffDis": "0"
    }
]

export default Insurerdetails;
/*
export default function Request() {
    const { privateCar, setPrivateCar, productCode } = useContext(UserContext);


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
    console.log(coverageList)

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
        "InsurerDetails": [
            {
                "insurerCode": "135",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "111",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "122",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "129",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "105",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "135",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "125",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "121",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "133",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "124",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "121",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "118",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "125",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "112",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "128",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "Silver",
                "tariffDis": "0"
            },
            {
                "insurerCode": "124",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "105",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "125",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "116",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "120",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "111",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "122",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "129",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "117",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "114",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "138",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "138",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "107",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "126",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "107",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            },
            {
                "insurerCode": "138",
                "idv": 0,
                "minIdv": 0,
                "maxIdv": 0,
                "originalIdv": 0,
                "planName": "",
                "tariffDis": "0"
            }
        ]


    }



    useEffect(() => {
        axios({
            method: "POST",
            url: 'https://pot.fapremium.net/mis/api/saveQuoteDetails.json',
            headers,
            data: request,
        }).then(res => {
            console.log("save", res.data);

        })
            .catch(err => {
                console.log("error in request", err);
            });

    }, []);
    console.log(request)
    return (
        <div>
        </div>
    )
}
 */