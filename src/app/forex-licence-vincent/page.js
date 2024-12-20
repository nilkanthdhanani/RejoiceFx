"use client"
import LicensePage from "@/components/rendering/License";

import vincentFormation from "@/assets/images/webp/vincentFormation.webp";

export default function Vincent() {
    const vincentContent = {
        bannerButton: "Sy. Vincent Forex License",
        bannerTitle: "St. Vincent Company Formation & Forex License",
        bannerSubTitle: "Start your forex business in St. Vincent with strict confidentiality",
        startImage: vincentFormation,
        startButton: "St. Vincent Company Formation",
        startTitle: "Start your Forex Brokerage Business in St Vincent",
        startSubTitle: "St Vincent and the Grenadines offers an advanced level of confidentiality and has one of the best privacy laws. You get lowest minimum capital requirements, no need to get a physical office, good payment service providers, and fast application process for St. Vincent forex license. The minimum paid-up capital requirement is lowest in the world. St. Vincent is calling you, get a St Vincent and the Grenadines Forex License! With PheasanTech, you get comprehensive solutions for St. Vincent FSA and St. Vincent forex company formation process.",
        progressHead: "To Get St. Vincent Forex License Lets obtain your St. Vincent Forex Broker License",
        proccesFirst: "Register an International Business Company in St. Vincent",
        proccesSecond: "Submit an application for St. Vincent Forex Broker License",
        proccesThird: "Fulfilling the capital requirements",
        proccesFourth: "Maintain a registered office address within St. Vincent",
        proccesFifth: "Fastest in the world",
        processHead: "Lowest in the world",
        processPera: "All the companies are exempt from local tax for the first 25 years from the date of registration. There are no corporate or withholding taxes, and even no need for minimum paid-up capital requirements. No annual returns need to be filed and no list of shareholders to be submitted.",
    };

    return (
        <LicensePage content={vincentContent} />
    );
}
