import React from "react"
import { XYPlot, XAxis, YAxis, LineSeries } from "react-vis";

const Line = () => {

    return (
        <div style={{ "display": "flex", "alignItems": 'center', "flexDirection": "column" }}>
            <h1>Stats</h1>
            <p>New users in past 4 days</p>
            <XYPlot height={150} width={300}>
                <LineSeries
                    className="first-series"
                    animation={true}
                    curve={'curveMonotoneX'}
                    data={[{ x: 1, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 15 }, { x: 4, y: 12 }]}
                    style={{
                        fill: 'none',
                        stroke: "#f44336",
                        strokeLinejoin: 'round',
                        strokeWidth: 4
                    }}
                />
                <XAxis
                    title=""
                    tickTotal={4}
                    style={{
                        text: { stroke: 'none', fill: 'none', fontWeight: 600 },
                        line: { stroke: 'white' },
                    } as React.CSSProperties}
                />
                <YAxis title=""
                    tickTotal={2}
                    style={{
                        text: { stroke: 'none', fill: 'white', fontWeight: 600 },
                        line: { stroke: 'white' },
                    } as React.CSSProperties} />
            </XYPlot>
            <br />
            <p>New posts in past 4 days</p>
            <XYPlot height={150} width={300}>
                <LineSeries
                    className="first-series"
                    animation={true}
                    curve={'curveMonotoneX'}
                    data={[{ x: 1, y: 20 }, { x: 2, y: 25 }, { x: 3, y: 15 }, { x: 4, y: 9 }]}
                    style={{
                        fill: 'none',
                        stroke: "#f44336",
                        strokeLinejoin: 'round',
                        strokeWidth: 4
                    }}
                />
                <XAxis
                    title=""
                    tickTotal={4}
                    style={{
                        text: { stroke: 'none', fill: 'none', fontWeight: 600 },
                        line: { stroke: 'white' },
                    } as React.CSSProperties}
                />
                <YAxis title=""
                    tickTotal={3}
                    style={{
                        text: { stroke: 'none', fill: 'white', fontWeight: 600 },
                        line: { stroke: 'white' },
                    } as React.CSSProperties} />
            </XYPlot>
        </div>
    )
}

export default Line