import React from "react";
import CustomerReview from "../components/CustomerReview";

function ReviewPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <CustomerReview showForm={true} />
    </div>
  );
}

export default ReviewPage;
