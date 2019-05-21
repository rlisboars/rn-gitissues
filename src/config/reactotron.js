import Reactotron from "reactotron-react-native";

Reactotron.configure({ name: "github issues" })
  .useReactNative({ asyncStorage: false })
  .connect();

Reactotron.clear();

console.tron = Reactotron;
