import { useContext } from "react";
import { UserContext } from "./Vehicledetails";

/* prevpolicy insuer date
prevpolicyexpiry = od expiry date
last year claim= prev policy claim = value "Y " "N"*/

export default function Request() {
    const { privateCar, setPrivateCar, productCode } = useContext(UserContext);


    let odEndDate_nb, tpEndDate_nb, policyStartDate_nb, policyStartDate, policyEndDate, previousPolicyExpiryDate, previousOdPolicyExpiryDate, previousTpPolicyStartDate, previousTpPolicyExpiryDate, productcode, customer, businessType, productName;

    let registrationdate = new Date(privateCar.registrationDate).toLocaleDateString('en-GB');
    if (privateCar.policyType === "New Business") {
        policyStartDate_nb = new Date(privateCar.registrationDate).toLocaleDateString('en-GB');
        tpEndDate_nb = new Date(privateCar.registrationDate).toLocaleDateString('en-GB');
        odEndDate_nb = new Date(privateCar.registrationDate).toLocaleDateString('en-GB');
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

    if (privateCar.customerType === "Individual") {
        customer = "COMPANY"
    }

    if (privateCar.policyType !== "New Business" && privateCar.policyType !== "Own Damage") {
        policyStartDate = new Date(privateCar.registrationDate).toLocaleDateString('en-GB');
        policyEndDate = new Date(privateCar.registrationDate).toLocaleDateString('en-GB');

    }
    if (privateCar.policyType === "Own Damage") {
        previousOdPolicyExpiryDate = new Date(privateCar.registrationDate).toLocaleDateString('en-GB');
        previousTpPolicyStartDate = new Date(privateCar.registrationDate).toLocaleDateString('en-GB');
        previousTpPolicyExpiryDate = new Date(privateCar.registrationDate).toLocaleDateString('en-GB');
        productcode = "PCCOD"
        businessType = "RollOver"
        productName = "PCC_OWNDAMAGE"
    }

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
            "policyStartDate": policyStartDate,
            "expiryDate": policyEndDate,
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
            "odExpiryDate": "",
            "tpExpiryDate": "",
            "parentUserId": "saravanan@12",
            "walletType": "",
            "isCPADeclaration": "",
            "shortfallPercent": "0.0",
            "revisedDiscountRt": "0",
            "PreviousPolicyDetails": {
                "prevPolicyNo": "",
                "prevPolicyExp": previousOdPolicyExpiryDate,
                "prevPolicyNcb": privateCar.ncb,
                "prevPolicyInsurerCode": privateCar.previousInsurerCode,
                "prevPolicyInsurerName": privateCar.previousInsurer,
                "isPrevPolicyClaim": privateCar.lastYearClaim,
                "prevPolicyType": privateCar.previousPolicyType,
                "prevPolicyODExpireDate": previousOdPolicyExpiryDate,
                "prevPolicyTPExpireDate": previousTpPolicyExpiryDate,
                "prevPolicyTPStartDate": previousTpPolicyStartDate
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
            "rtoName": privateCar.rtoName,
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
            "regiCityName": privateCar.rtoName,
            "grossVehicleWeight": "null"
        },
        "CoverDetails": [],
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

    //console.log(request)

    let coverageList = [];
    if (privateCar.policyType !== "Own Damage" && privateCar.customerType === "Individual") {
        coverageList = [{
            "coverCode": "CPA",
            "coverName": "COMPULSORY PERSONAL ACCIDENT(OWNER DRIVER)",
            "coverType": "ADDITIONAL",
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
            privateCar.discount.includes(list.coverName) === true && (coverageList = [...coverageList, {
                coverCode: list.coverCode,
                coverName: list.coverName,
                coverType: list.coverType,
                isPrevOpted: "",
                isRateParam: "",
                sumInsured: "0",
                sumInsuredType: "NONE"
            }])


                (privateCar.addon.includes(list.coverName) && list.coverName !== "PERSONAL BELONGING" && list.coverName !== "EMERGENCY TRANSPORT AND HOTEL EXPENSES ") && (coverageList = [...coverageList, {
                    coverCode: list.coverCode,
                    coverName: list.coverName,
                    coverType: list.coverType,
                    isPrevOpted: "",
                    isRateParam: "",
                    sumInsured: "0",
                    sumInsuredType: "NONE"
                }])
                (privateCar.addon.includes(list.coverName) && list.coverName === "PERSONAL BELONGING") && (coverageList = [...coverageList, {
                    coverCode: list.coverCode,
                    coverName: list.coverName,
                    coverType: list.coverType,
                    isPrevOpted: "",
                    isRateParam: "",
                    sumInsured: privateCar.personal_belongings,
                    sumInsuredType: "NONE"
                }])
                (privateCar.addon.includes(list.coverName) && list.coverName === "EMERGENCY TRANSPORT AND HOTEL EXPENSES ") && (coverageList = [...coverageList, {
                    coverCode: list.coverCode,
                    coverName: list.coverName,
                    coverType: list.coverType,
                    isPrevOpted: "",
                    isRateParam: "",
                    sumInsured: privateCar.hotel,
                    sumInsuredType: "NONE"
                }])


                (privateCar.additionalCovers.includes(list.coverName) && list.coverName !== "P.A. COVER TO PAID DRIVER" && list.coverName !== "UNNAMED PASSENGER" && list.coverName !== "BI-FUEL KIT (CNG)") && (coverageList = [...coverageList, {
                    coverCode: list.coverCode,
                    coverName: list.coverName,
                    coverType: list.coverType,
                    isPrevOpted: "",
                    isRateParam: "",
                    sumInsured: "0",
                    sumInsuredType: "NONE"
                }])

                (privateCar.additionalCovers.includes(list.coverName) && list.coverName === "P.A. COVER TO PAID DRIVER") && (coverageList = [...coverageList, {
                    coverCode: list.coverCode,
                    coverName: list.coverName,
                    coverType: list.coverType,
                    isPrevOpted: "",
                    isRateParam: "",
                    sumInsured: privateCar.pa_cover,
                    sumInsuredType: "NONE"
                }])
                (privateCar.additionalCovers.includes(list.coverName) && list.coverName === "UNNAMED PASSENGER") && (coverageList = [...coverageList, {
                    coverCode: list.coverCode,
                    coverName: list.coverName,
                    coverType: list.coverType,
                    isPrevOpted: "",
                    isRateParam: "",
                    sumInsured: privateCar.unnamed_passenger,
                    sumInsuredType: "NONE"
                }])
                (privateCar.additionalCovers.includes(list.coverName) && list.coverName === "BI-FUEL KIT (CNG)") && (coverageList = [...coverageList, {
                    coverCode: list.coverCode,
                    coverName: list.coverName,
                    coverType: list.coverType,
                    isPrevOpted: "",
                    isRateParam: "",
                    sumInsured: privateCar.bi_fuel,
                    sumInsuredType: "NONE"
                }])

        )
    }
    )
    console.log(coverageList)

    return (
        <div>
        </div>
    )
}
