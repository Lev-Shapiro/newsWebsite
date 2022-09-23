import axios from "axios";
import { UserIdentifier, UserRequest, UserResponse } from "../entity/user.entity";
import { runner } from "../scripts/runner";
import { UserErrors } from "./../entity/user.entity";

interface UserRouteResponse {
    user?: UserResponse;
    errors?: UserErrors;
}

class UserModel {
    async signup(userData: UserRequest) {
        const result = await runner<UserRouteResponse>(
            async () =>
                (
                    await axios({
                        method: "post",
                        url: "http://localhost:3000/user/register",
                        data: {
                            data: userData
                        },
                    })
                ).data
        );

        if(!result.success) return {
            errors: {
                global: `Server is not responding. Please try again later`,
            },
        }

        return result.data;
    }

    async login(userIdentifiers: UserIdentifier) {
        const result = await runner<UserRouteResponse>(
            async () =>
                (
                    await axios({
                        method: "post",
                        url: "http://localhost:3000/user/login",
                        data: {
                            where: userIdentifiers
                        },
                    })
                ).data
        );

        if(!result.success) return {
            errors: {
                global: `Server is not responding. Please try again later`,
            },
        }

        return result.data
    }
}

export default UserModel;
