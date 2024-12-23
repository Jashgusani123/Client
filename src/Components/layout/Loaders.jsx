import React from "react";
import { Grid, Skeleton, Stack } from "@mui/material";
import { BouncingSkeleton } from "../Styles/StyleComponents";

const LayoutLoader = () => {
  return (
    <Grid container style={{ height: "calc(100vh - 4rem)" }} spacing={3}>
      {/* Sidebar */}
      <Grid
        item
        sm={4}
        md={3}
        sx={{ display: { xs: "none", sm: "block" } }}
        style={{ height: "100%" }}
      >
        <Skeleton variant="rounded" height="100vh" />
      </Grid>

      {/* Content */}
      <Grid item xs={12} sm={8} md={5} lg={6} style={{ height: "100%" }}>
        <Stack spacing={1}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} variant="rounded" height="3.76rem" />
          ))}
        </Stack>
      </Grid>

      {/* Right Sidebar */}
      <Grid
        item
        md={4}
        lg={3}
        style={{ height: "100%" }}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Skeleton variant="rounded" height="100vh" />
      </Grid>
    </Grid>
  );
};

const TypingLoader = () => {
  return (
    <Stack
      spacing={"0.5rem"}
      direction={"row"}
      padding={"0.5rem"}
      justifyContent={"center"}
    >
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{ animationDelay: "0.1s" }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{ animationDelay: "0.2s" }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{ animationDelay: "0.4s" }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{ animationDelay: "0.6s" }}
      />
    </Stack>
  );
};

export { LayoutLoader, TypingLoader };
