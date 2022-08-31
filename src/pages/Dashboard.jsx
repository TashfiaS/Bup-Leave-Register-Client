import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import AssignmentTurnedInTwoToneIcon from "@mui/icons-material/AssignmentTurnedInTwoTone";
import PendingActionsTwoToneIcon from "@mui/icons-material/PendingActionsTwoTone";
import CancelIcon from "@mui/icons-material/Cancel";
import { motion } from "framer-motion";
import { devices } from "../components/Responsive";
const Dashboard = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <DashboardWrapper>
        <div className="title">Dashboard</div>
        <motion.ui className="list" variants={container} initial="hidden" animate="visible">
          <motion.li variants={item}>
            <div className="listContainer">
              <div className="listIcon">
                <LogoutTwoToneIcon sx={{ color: "green", fontSize: "4rem" }} />
              </div>
              <div className="listDetail">
                <div className="listTitle">Leave</div>
                <div className="listTitleQuantity">2</div>
              </div>
            </div>
          </motion.li>
          <motion.li variants={item}>
            <div className="listContainer">
              <div className="listIcon">
                <AssignmentTurnedInTwoToneIcon sx={{ color: "blue", fontSize: "4rem" }} />
              </div>
              <div className="listDetail">
                <div className="listTitle">Approved</div>
                <div className="listTitleQuantity">2</div>
              </div>
            </div>
          </motion.li>
          <motion.li variants={item}>
            <div className="listContainer">
              <div className="listIcon">
                <PendingActionsTwoToneIcon sx={{ color: " #a5b414", fontSize: "4rem" }} />
              </div>
              <div className="listDetail">
                <div className="listTitle">Pending</div>
                <div className="listTitleQuantity">3</div>
              </div>
            </div>
          </motion.li>
          <motion.li variants={item}>
            <div className="listContainer">
              <div className="listIcon">
                <CancelIcon sx={{ color: "red", fontSize: "4rem" }} />
              </div>
              <div className="listDetail">
                <div className="listTitle">Canceled</div>
                <div className="listTitleQuantity">4</div>
              </div>
            </div>
          </motion.li>
        </motion.ui>
      </DashboardWrapper>
    </>
  );
};

const DashboardWrapper = styled.div`
  .title {
    ${tw`font-extrabold text-4xl my-10 ml-20 box-border`}
  }
  .list {
    ${tw`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-gray-100 w-5/6 mx-auto p-14`}
    li {
      ${tw`list-none mx-auto my-6 border-radius[3%] w-72 h-36 flex align-bottom justify-center bg-white`}
      box-shadow: 5px 5px 7px 3px grey;
      .listContainer {
        ${tw`flex mx-12`}
        .listIcon {
          ${tw`mx-2 my-auto`}
        }
        .listDetail {
          ${tw`text-2xl mx-6 my-auto`}
          .listTitle {
            ${tw`text-green-700`}
          }
          .listTitleQuantity {
            ${tw``}
          }
        }
      }
    }
  }
 @media ${devices.mobileL} {
    .list{
      li{
        ${tw`w-56 h-24`}
      }
    }
 }
 @media ${devices.mobileM} {
    .list{
      li{
        ${tw`w-40 h-20`}
      }
    }
 }
`;

export default Dashboard;
