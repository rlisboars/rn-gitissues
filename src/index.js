if (__DEV__) import("~/config/reactotron");
import React from "react";

import createNavigator from "~/routes";

const Routes = createNavigator();
const App = () => <Routes />;

export default App;
