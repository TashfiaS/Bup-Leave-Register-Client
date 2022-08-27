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
      <div className="backgroundBanner">
        <img src="assets/images/bupBanner.jpg" alt="" />
      </div>
      <div className="title">Dashboard</div>
      <ui className="list">
        <li>
          <div className="listContainer">
            <div className="listIcon">
              <LogoutTwoToneIcon />
            </div>
            <div className="listDetail">
              <div className="listTitle">Leave</div>
              <div className="listTitleQuantity">1</div>
            </div>
          </div>
        </li>
        <li>
          <div className="listContainer">
            <div className="listIcon">
              <AssignmentTurnedInTwoToneIcon />
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
              <PendingActionsTwoToneIcon />
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
              <CancelIcon />
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
  .backgroundBanner {
    z-index: -1;
    width: 100vw;
    ${tw`absolute h-full`}
  }
  .title {
    ${tw`font-extrabold text-4xl my-5 mb-20 box-border`}
  }
  .list {
    ${tw`flex`}
    li {
      ${tw`list-none mx-10 p-5 bg-blue-100 border-radius[5%]`}
      box-shadow: 5px 5px 7px 3px grey;
      .listContainer {
        ${tw`flex mx-12`}
        .listIcon {
          ${tw`mx-2`}
        }
        .listDetail {
          ${tw`mx-2`}
        }
      }
    }
  }
`;

export default Dashboard;
