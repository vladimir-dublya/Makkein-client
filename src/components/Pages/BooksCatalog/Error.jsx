import React from "react";

export const MyErrorBoundary = (props, error) => {
  if (error) {
    return (
      <div className="error-screen">
        <h2>An error has occured</h2>
        <h4>{error}</h4>
      </div>
    );
  } else {
    return <>{props.children}</>;
  }
};
