import React from "react";
import Sidebar from "../components/Sidebar";
import tw from "twin.macro";
import styled from "@emotion/styled";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import AssignmentTurnedInTwoToneIcon from "@mui/icons-material/AssignmentTurnedInTwoTone";
import PendingActionsTwoToneIcon from "@mui/icons-material/PendingActionsTwoTone";
import CancelIcon from "@mui/icons-material/Cancel";
const Dashboard = () => {
  return (
    <DashboardWrapper>
      <div className="title">Dashboard</div>
      <ui className="list">
      <li>
          <div className="listContainer">
            <div className="listIcon">
              <LogoutTwoToneIcon sx={{color:"green"}} />
            </div>
            <div className="listDetail">
              <div className="listTitle">Leave</div>
              <div className="listTitleQuantity">2</div>
            </div>
          </div>
        </li>
        <li>
          <div className="listContainer">
            <div className="listIcon">
              <AssignmentTurnedInTwoToneIcon sx={{color:"blue"}} />
            </div>
            <div className="listDetail">
              <div className="listTitle">Approved</div>
              <div className="listTitleQuantity">2</div>
            </div>
          </div>
        </li>
        <li>
          <div className="listContainer">
            <div className="listIcon">
              <PendingActionsTwoToneIcon sx={{color:"  #a5b414 "}} />
            </div>
            <div className="listDetail">
              <div className="listTitle">Pending</div>
              <div className="listTitleQuantity">3</div>
            </div>
          </div>
        </li>
        <li>
          <div className="listContainer">
            <div className="listIcon">
              <CancelIcon sx={{color:"red"}}/>
            </div>
            <div className="listDetail">
              <div className="listTitle">Canceled</div>
              <div className="listTitleQuantity">4</div>
            </div>
          </div>
        </li>
      </ui>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  .title {
    ${tw`font-extrabold text-4xl my-10 ml-20 box-border`}
  }
  .list {
    ${tw`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}
    li {
      ${tw`list-none mx-auto my-6 border-radius[3%] w-64 h-20 flex align-bottom justify-center`}
      box-shadow: 5px 5px 7px 3px grey;
      .listContainer {
        ${tw`flex mx-12`}
        .listIcon {
          ${tw`mx-2 my-auto`}
        }
        .listDetail{
          ${tw`text-2xl mx-6 my-auto`}
          .listTitle{
            ${tw`text-green-700`}
          }
          .listTitleQuantity{
            ${tw``}
          }
        }
      }
    }
  }
`;

export default Dashboard;
