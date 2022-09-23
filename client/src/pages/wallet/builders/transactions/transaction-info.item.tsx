import { AttachMoneyRounded } from "@mui/icons-material";
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { Change } from "../../../../entity/change.entity";
import { Transaction } from "../../../../entity/transaction.entity";

function TransactionInfoItem({
    transaction,
}: {
    transaction: Transaction;
}) {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary={transaction.name} />

                <ListItemIcon
                    sx={{
                        float: "right",
                        color:
                            transaction.change === Change.Positive
                                ? "#67E8B1"
                                : "#FF605F",
                    }}
                >
                    <AttachMoneyRounded />
                    {transaction.amount}
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    );
}

export default TransactionInfoItem;
