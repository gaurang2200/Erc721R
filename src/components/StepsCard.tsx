import React from "react";
// import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import StepBg from "../images/stepsbg.svg";

function StepsCard({
  id,
  alignment,
  cardTitle,
  buttonText,
} : {
  id: string;
  alignment: string;
  cardTitle: string;
  buttonText: string;
}) {
  return (
    <div className="w-full flex" style={{ justifyContent: alignment }}>
      <div className="relative w-2/5" style={{ height: "25em" }}>
        <img
          src={StepBg}
          style={{ position: "absolute", top: "-60%", [alignment]: "-10%" }}
        />
        <div className="absolute top-0" style={{ [alignment]: "5%" }}>
          <p
            className="font-semibold opacity-10 text-white"
            style={{ fontSize: "10em" }}
          >
            {id}
          </p>
        </div>
        <div
          className="flex flex-col relative top-1/4 text-white"
          style={{
            alignItems: alignment === "left" ? "flex-start" : "flex-end",
            [alignment]: "16%",
          }}
        >
          <p
            className="text-6xl font-light pb-2 mb-6"
            style={{
              textAlign: alignment,
              background: "linear-gradient(90deg, #EE0979 0%, #FF6A00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {cardTitle}
          </p>
          <p className="mb-2" style={{ textAlign: alignment }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="text-amber-200 w-fit rounded-md">
            {buttonText} &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepsCard;
