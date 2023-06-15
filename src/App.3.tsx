import { Workbook } from "@fortune-sheet/react";
// try commenting the next line out
import "@fortune-sheet/react/dist/index.css";
import cell from "./data/cell";

const App = () => {
  return (
    <div key="rootbox"
      style={{
        width: "20%",
        //height: "700px"
        height: "500px"
      }}
    >
      <Workbook data={[cell]} row={30} column={10}/>
    </div>
  );
};

export default App;
