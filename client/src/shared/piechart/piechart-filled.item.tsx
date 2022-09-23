import { Box } from "@mui/system";

function PieChartFilled({ fill, size }: { fill: [number, string][]; size: string }) {
    const circleSum = fill.reduce((prev, [num]) => prev + num, 0);
    var degreeSum = 0,
        gradientRes = "";

    for (var i = 0; i < fill.length; i++) {
        var [num, color] = fill[i];
        num = ~~(360 * (num / circleSum));

        gradientRes += `${color} 0 ${degreeSum + num}deg`;
        degreeSum += num;

        if (i != fill.length - 1) gradientRes += ",";
    }

    return (
        <Box
            sx={{
                width: size,
                height: size,
                margin: "auto",
                borderRadius: "50%",
                backgroundImage: `conic-gradient(${gradientRes})`,
            }}
        />
    );
}

export default PieChartFilled;
