import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"

const TestGridAlignment = () => {
    return (
        <>
            <Box sx={{
                backgroundColor: "yellow", display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly", // allign according to main axis
                alignItems: "center", // allign according to secondary axis
                height: 400
            }}>
                <Paper sx={{ width: 50, height: 50, backgroundColor: "orange", m: 2 }} />
                <Paper sx={{ width: 50, height: 50, backgroundColor: "orange", m: 2 }} />
                <Paper sx={{ width: 50, height: 50, backgroundColor: "orange", m: 2 }} />
            </Box>

            <div style={{ margin: 20 }}></div>

            <Grid container sx={{ backgroundColor: "yellow", padding: 0, height: 400 }}>
                <Grid item md={12} sx={{
                    backgroundColor: "#666", p: 1, m: 0,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between", // allign according to main axis
                    alignItems: "center" // allign according to secondary axis
                }}>
                    <Grid container>
                        <Grid md={5} item>
                            <Paper sx={{ width: 50, height: 50, backgroundColor: "orange", m: 0.5 }} />
                        </Grid>
                        <Grid md={2} item sx={{ display: "flex", justifyContent: "center" }}>
                            <Paper sx={{ width: 50, height: 50, backgroundColor: "orange", m: 0.5 }} />
                        </Grid>
                        <Grid md={5} item sx={{ display: "flex", justifyContent: "right" }}>
                            <Paper sx={{ width: 50, height: 50, backgroundColor: "orange", m: 0.5 }} />
                            <Paper sx={{ width: 50, height: 50, backgroundColor: "orange", m: 0.5 }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={2} sx={{
                    backgroundColor: "#33f", p: 0, m: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end", // allign according to main axis
                    alignItems: "start" // allign according to secondary axis
                }}>
                    <Paper sx={{ width: 50, height: 50, backgroundColor: "orange", m: 0.5 }} />
                    <Paper sx={{ width: 50, height: 50, backgroundColor: "orange", m: 0.5 }} />
                    <Paper sx={{ width: 50, height: 50, backgroundColor: "orange", m: 0.5 }} />
                </Grid>
                <Grid item md={10} sx={{ backgroundColor: "#3f3", p: 1, m: 0 }}>
                    <Grid container >
                        <Grid item md={6} sx={{
                            backgroundColor: "#f33",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around", // allign according to main axis
                            alignItems: "center" // allign according to secondary axis
                        }}>
                            <Paper sx={{
                                width: 50, height: 50,
                                backgroundColor: "orange", m: 0.5
                            }} />
                            <Paper sx={{
                                width: 50, height: 50,
                                backgroundColor: "orange", m: 0.5
                            }} />
                        </Grid>
                        <Grid item md={6} sx={{
                            backgroundColor: "#f66",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between", // allign according to main axis
                            alignItems: "center" // allign according to secondary axis
                        }}>
                            < Paper sx={{
                                width: 100, height: 300,
                                backgroundColor: "orange", m: 0.5
                            }} />
                            <Paper sx={{
                                width: 100, height: 300,
                                backgroundColor: "orange", m: 0.5
                            }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} sx={{ backgroundColor: "#333", p: 1, m: 0 }}>
                    Footer
                </Grid>
            </Grid >
        </>
    )
}

export default TestGridAlignment