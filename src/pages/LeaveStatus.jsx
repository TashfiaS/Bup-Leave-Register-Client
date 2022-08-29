import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";
import LeaveStatusTable from "../components/LeaveStatusTable";
const LeaveStatus = () => {
  return (
    <>
      <LeaveStatusWrapper>
        <div className="title">Leave Status</div>
        <div className="leavetableContainer">
          <LeaveStatusTable></LeaveStatusTable>
        </div>
      </LeaveStatusWrapper>
    </>
  );
};

const LeaveStatusWrapper = styled.div`
  .title {
    ${tw`font-extrabold text-4xl my-10 ml-20 box-border`}
  }
`
export default LeaveStatus;
