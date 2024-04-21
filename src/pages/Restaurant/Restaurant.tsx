"use client";
import { useNavigate } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";

export default function Restaurant() {
  const navigate = useNavigate();

  return (
    <>
      <Stack
        direction={"column"}
        px={{
          xs: 3,
          md: 15,
        }}
        py={2}
        spacing={2}
        justifyContent={"space-between"}
      >
        <img
          src={"https://picsum.photos/300"}
          alt=""
          width={"100%"}
          height={"300"}
        />
        <Typography variant="h6">Tasty Bites</Typography>
        <Typography variant="body1" color={'#868e96'}>
          A cozy restaurant serving delicious dishes.
        </Typography>

        <Typography variant="h6">Photos</Typography>
        <Stack direction={"row"} spacing={2}>
          <img
            src={"https://picsum.photos/300"}
            alt=""
            width={200}
            height={200}
          />
          <img
            src={"https://picsum.photos/300"}
            alt=""
            width={200}
            height={200}
          />
        </Stack>
      </Stack>
      <Stack
        direction={"column"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        sx={{
          position: 'sticky',
          pb: 2
        }}
      >
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            width: "200px",
          }}
          onClick={() => navigate("/booking")}
        >
          Make a booking
        </Button>
      </Stack>
    </>
  );
}
