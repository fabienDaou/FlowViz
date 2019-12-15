const FLOWVIZ_KEY = "FlowViz";

export const saveNewFlowEstimates = (estimates) => {
    let currentEstimates = localStorage.getItem(FLOWVIZ_KEY);
    currentEstimates = !currentEstimates ? [] : JSON.parse(currentEstimates);
    const date = new Date();
    let newEstimates = [{ date: date.getTime(), estimates }, ...currentEstimates];
    localStorage.setItem(FLOWVIZ_KEY, JSON.stringify(newEstimates));
};

export const getFlowEstimates = () => {
    let currentEstimates = localStorage.getItem(FLOWVIZ_KEY);
    return !currentEstimates ? [] : JSON.parse(currentEstimates);
};

export const getFlowEstimateByDate = (date) => {
    let currentEstimates = localStorage.getItem(FLOWVIZ_KEY);
    currentEstimates = !currentEstimates ? [] : JSON.parse(currentEstimates);
    return currentEstimates.filter(estimate => estimate.date === date)[0];
};