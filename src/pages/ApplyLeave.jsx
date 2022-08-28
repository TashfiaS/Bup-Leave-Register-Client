import styled from "@emotion/styled";
import React from "react";
import Sidebar from "../components/Sidebar";
import tw from "twin.macro";
import ApplyLeaveForm from "../components/ApplyLeaveForm";
const ApplyLeave = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <ApplyLeaveWrapper>
        <div className="title">Apply Leave</div>
        <div className="leaveForm">
          <ApplyLeaveForm></ApplyLeaveForm>
        </div>
      </ApplyLeaveWrapper>
    </>
  );
};

const ApplyLeaveWrapper = styled.div`
  .title {
    ${tw`font-extrabold text-4xl my-10 ml-20 box-border`}
  }
  .leaveForm {
    ${tw`my-10 ml-20`}
  }
`;

export default ApplyLeave;
