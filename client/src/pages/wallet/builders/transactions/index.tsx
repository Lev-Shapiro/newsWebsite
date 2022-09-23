import { Grid, List, useTheme } from "@mui/material";
import { Transaction } from "../../../../entity/transaction.entity";
import TransactionInfoItem from "./transaction-info.item";

function Transactions({
    transactions,
}: {
    transactions: Transaction[];
}) {
    const mobile = window.innerWidth < 800;

    const sectionBox = {
        backgroundColor: useTheme().palette.mode === "dark" ? "#202020" : "",
        boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        borderRadius: "5px",
        marginBottom: "5%",
    };

    return (
        <Grid item xs={mobile ? 12 : 3} sx={sectionBox}>
            <List
                sx={
                    mobile
                        ? {
                              width: "100%",
                              maxWidth: 360,
                          }
                        : {}
                }
                aria-label="transactions"
            >
                {transactions.map((transaction, i) => (
                    <TransactionInfoItem transaction={transaction} key={i}/>
                ))}
            </List>
        </Grid>
    );
}

export default Transactions;
