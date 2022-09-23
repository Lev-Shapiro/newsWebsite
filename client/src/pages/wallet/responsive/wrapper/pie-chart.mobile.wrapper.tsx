import { Typography } from "@mui/material";
import PieChartFilled from "../../../../shared/piechart/piechart-filled.item";

interface IProps {
    text: string;
    fill: [number, string][];
}
function PieChartMobileWrapper(props: IProps) {
    return (
        <>
            <Typography textAlign="center" variant="h5" marginBottom="2%">
                {props.text}
            </Typography>

            <PieChartFilled
                fill={props.fill}
                size={`${75 + window.screen.width / 15}px`}
            />
        </>
    );
}

export default PieChartMobileWrapper;
