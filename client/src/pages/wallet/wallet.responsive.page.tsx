import { AttachMoneyRounded } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { Change } from "../../entity/change.entity";
import { Transaction } from "../../entity/transaction.entity";
import Transactions from "./builders/transactions";
import WalletMobile from "./responsive/container/wallet.mobile";
import WalletPc from "./responsive/container/wallet.pc";

function WalletResponsivePage() {
    const transactions: Transaction[] = [
        {
            name: "Premium account",
            amount: 12.98,
            change: Change.Negative,
        },
        {
            name: "Ads",
            amount: 39.23,
            change: Change.Positive,
        },
    ];

    return (
        <Box className="page">
            <Box marginY="2%" display="flex" justifyContent="center">
                <AttachMoneyRounded
                    sx={{ fontSize: "40px", marginRight: "5px" }}
                />
                <Typography variant="h4">
                    1,050.00
                    <Typography marginY="10px">Total Balance</Typography>
                </Typography>
            </Box>

            <Grid
                container
                item
                width="75%"
                margin="auto"
                justifyContent="space-between"
            >
                <Transactions transactions={transactions} />

                {window.innerWidth < 800 ? <WalletMobile /> : <WalletPc />}
            </Grid>
        </Box>
    );
}

export default WalletResponsivePage;
