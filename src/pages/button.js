
import { AwesomeButtonProgress } from "react-awesome-button";
import { BeakerIcon, TrashIcon } from "@primer/octicons-react"; // custom icons

const Buttons = () => {
  return (
    <AwesomeButtonProgress type="primary" onPress={async (element, next)=>{
      // await for something then call
      next();
    }}>Primary Progress</AwesomeButton>
  <AwesomeButtonProgress type="anchor" size="icon"><TrashIcon /></AwesomeButton>
);
}

export default buttons
