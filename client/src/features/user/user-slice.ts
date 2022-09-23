import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Role } from "../../entity/role.entity";
import { UserResponse as User } from "../../entity/user.entity";

const defaultUserValue = {
    id: -1,
    name: "",
    email: "",
    password: "",
    role: Role.USER,
    birthday: ""
}

const userState: { user: User } = {
    user: defaultUserValue,
};

const user = createSlice({
    name: "user",
    initialState: userState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },

        logout(state) {
            state.user = defaultUserValue;
        }
    },
});

export const { setUser, logout } = user.actions;

export default user.reducer;
