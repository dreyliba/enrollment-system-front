import React from "react";
import { Route } from "react-router-dom";
// import Layout from "../components/Layouts";
import { isAuth } from "../modules/utils/helper";
import { Redirect } from "react-router-dom";

function Private(props) {
  if (!isAuth()) {
    return <Route render={() => <Redirect to="/" />} />;
  }

  return (
    <div>
      {/* <Layout> */}
      <Route {...props} />
      {/* </Layout> */}
    </div>
  );
}

export default Private;
