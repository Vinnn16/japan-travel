import React from "react";
import CustomerReview from "../components/CustomerReview";

function ReviewPage() {
  return (
    <div style={{ paddingTop: "10px" }}>
      <CustomerReview showForm={true} />
    </div>
  );
}

export default ReviewPage;
