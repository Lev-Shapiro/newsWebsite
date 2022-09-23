import { Search } from "@mui/icons-material";
import { Box, Grid, IconButton, InputBase } from "@mui/material";
import PostComponent from "./post.component";

function HomePage() {
    return (
        <Box className="page">
            <Box
                width="50%"
                margin="auto"
                display="flex"
                border="1px solid grey"
                borderRadius="5px"
                p="10px"
                marginY="2%"
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Posts"
                    inputProps={{ "aria-label": "search posts" }}
                />

                <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                >
                    <Search />
                </IconButton>
            </Box>

            <Grid container item spacing={4} justifyContent="center">
                <Grid item>
                    <PostComponent />
                </Grid>

                <Grid item>
                    <PostComponent />
                </Grid>

                <Grid item>
                    <PostComponent />
                </Grid>

                <Grid item>
                    <PostComponent />
                </Grid>

                <Grid item>
                    <PostComponent />
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;
