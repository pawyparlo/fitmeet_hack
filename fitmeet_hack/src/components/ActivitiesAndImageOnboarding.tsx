import React, { useState } from "react";
import Layout from "antd/es/layout/layout";
import UploadImage from "./UploadImage";
import ActivityForm from "./ActivityForm";

const ActivitiesAndImageOnboarding = () => {
  const [activityFormCount, setActivityFormCount] = useState<number>(2);
  const [activityForms, setActivityForms] = useState(
    Array(activityFormCount).fill(undefined)
  );
  return (
    <Layout className="w-screen flex justify-top items-center bg-transparent ">
      <div className="pt-5">
        <UploadImage />
      </div>
      <div className="w-screen flex justify-center items-center border-1 border-gray-500 rounded border-solid p-[5px] mb-5">
        <h1 className="text-yellow">Activities</h1>
      </div>
      <div>
        {[...Array(activityFormCount)].map((_, index) => (
          <div className="w-screen flex flex-column justify-center items-center border-1 border-gray-500 rounded border-solid p-[5px] mb-5">
            <ActivityForm />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ActivitiesAndImageOnboarding;
