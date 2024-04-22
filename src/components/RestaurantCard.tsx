"use client";
import { Button, Stack, Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RestaurantType } from "../utils/type";

interface CartDrawerProps {
  data: RestaurantType;
}

export default function RestaurantCard({ data }: CartDrawerProps) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        border: "1px solid black",
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }}>
        <img src={data.photos[0]} alt="" width={"100%"} height={200} />
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          spacing={1}
          p={{ xs: 2, md: 2 }}
        >
          <Stack direction={"column"} spacing={1}>
            <Typography variant="body1">{data.name}</Typography>
            <Typography variant="body2" sx={{ width: "200px" }}>
              {data.description}
            </Typography>
          </Stack>

          <Stack direction={"row"} justifyContent={"space-between"}>
            <Button
              variant="contained"
              color="warning"
              sx={{
                textTransform: "none",
              }}
            >
              booked
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
              }}
              onClick={() => navigate(`/restaurant/${data.id}`)}
            >
              select
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
