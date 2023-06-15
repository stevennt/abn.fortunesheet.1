import { Workbook } from "@fortune-sheet/react";
// try commenting the next line out
import "@fortune-sheet/react/dist/index.css";
import cell from "./data/cell";

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        //height: "700px"
        height: "300px"
      }}
    >
      <Workbook data={[cell]} row={10} column={10}/>
    </div>
  );
};

export default App;
