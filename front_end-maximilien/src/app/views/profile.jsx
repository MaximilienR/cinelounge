import React, { useState } from "react";
import Information from "../components/profile/Information";
import Navbarprofile from "../components/profile/Navbarprofile";

const ProfileView = (props) => {
  return (
    <div className="flex">
    <Navbarprofile/>
    <Information/>
    </div>
  );
};

export default ProfileView;
