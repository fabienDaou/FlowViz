import React from "react";
import { XAxis, YAxis, Scatter, ReferenceDot, ScatterChart, ResponsiveContainer, CartesianGrid } from "recharts";

const FlowChart = ({ estimates, onAddEstimate }) => {
    const flowArea = [
        { x: 0, y: 0 }, { x: 65, y: 100 }, { x: 100, y: 100 }, { x: 0, y: 0 }
    ];
    const highChallengeLowSkillArea = { x: 0, y: 100, r: 125 };
    const highSkillLowChallengeArea = { x: 70, y: 0, r: 75 };

    const flowAreaStyle = {
        line: true, fill: "#33ff61", shape: <EmptyScatterShape />
    };
    const dangerousAreaStyle = {
        fill: "#ff6133", stroke: "none", ifOverflow: "hidden"
    };
    return (
        <ResponsiveContainer minWidth={200} width="80%" height={700}>
            <ScatterChart data={estimates} onClick={onAddEstimate}>
                <XAxis type="number" dataKey="x" domain={[0, 100]} />
                <YAxis type="number" dataKey="y" domain={[0, 100]} />
                <CartesianGrid stroke="#ccc" />
                <Scatter data={flowArea} {...flowAreaStyle} />
                <ReferenceDot {...highChallengeLowSkillArea} {...dangerousAreaStyle} />
                <ReferenceDot {...highSkillLowChallengeArea} {...dangerousAreaStyle} />
                <Scatter data={estimates} fill="#6133ff" strokeWidth={10} />
            </ScatterChart>
        </ResponsiveContainer>
    );
}

const EmptyScatterShape = () => (<></>);

export default FlowChart;