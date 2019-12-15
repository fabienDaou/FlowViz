import React from 'react';
import Title from "./components/Title";
import { Paper, Button } from "@material-ui/core";
import FlowMenu from "./components/FlowMenu";
import "./index.css";
import FlowChart from './components/FlowChart';
import { saveNewFlowEstimates, getFlowEstimates, getFlowEstimateByDate } from "./services/flowEstimatesService";

function App() {
  const [estimates, setEstimates] = React.useState([]);

  const addFlowEstimate = ({ xValue, yValue }) => {
    setEstimates([...estimates, { x: xValue, y: yValue }]);
  };
  const saveEstimates = () => {
    saveNewFlowEstimates(estimates);
    setEstimates([]);
  };

  const onEstimateClick = (date) => {
    setEstimates(getFlowEstimateByDate(date).estimates);
  };
  return (
    <div>
      <Title />
      <FlowMenu estimateDates={getFlowEstimates().map(estimate => estimate.date)} onEstimateClick={onEstimateClick} />
      <Paper elevation={5} className="Paper">
        <FlowChart estimates={estimates} onAddEstimate={addFlowEstimate} />
      </Paper>
      <Button variant="contained" color="primary" style={{ marginLeft: "50px" }} onClick={saveEstimates}>
        Save
      </Button>
    </div>
  );
}

export default App;
