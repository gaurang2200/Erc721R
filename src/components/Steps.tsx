import React from "react";
import StepsCard from "./StepsCard";

const Steps = () => {
    return (
        <>
            <div className="py-24 px-6 lg:px-12 relative overflow-hidden">
                <StepsCard
                    id="01"
                    alignment="left"
                    cardTitle="How Refund Works"
                    buttonText="Create Now"
                />
                <StepsCard
                    id="02"
                    alignment="right"
                    cardTitle="How Rewarding Works"
                    buttonText="Create Account"
                />
                <StepsCard
                    id="03"
                    alignment="left"
                    cardTitle="How Refraction works"
                    buttonText="Add Nominee"
                />
            </div>
        </>
    )
}

export default Steps;