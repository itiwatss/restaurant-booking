"use client";
import { useNavigate, useParams } from "react-router-dom";
import { Stack, Typography, Button, Grid } from "@mui/material";
import { RestaurantType, initialList } from "../../utils/type";
import { useEffect, useState } from "react";

export default function Restaurant() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [restaurant, setRestaurant] = useState<RestaurantType | undefined>(
    undefined
  );

  useEffect(() => {
    const foundRestaurant = initialList.find((e) => e.id === id);
    setRestaurant(foundRestaurant);
  }, [id]);

  return (
    <Stack
      direction={"column"}
      px={{
        xs: 3,
        md: 15,
      }}
      py={2}
      spacing={2}
      justifyContent={"space-between"}
      sx={{
        height: "100vh",
      }}
    >
      <Stack direction={"column"} spacing={2}>
        <Stack
          sx={{
            width: "100%",
            height: { xs: 300, md: 300 },
          }}
        >
          <img
            src={restaurant?.photos[0]}
            alt=""
            width={"100%"}
            height={"100%"}
            style={{
              aspectRatio: "16 / 9",
            }}
          />
        </Stack>

        <Typography variant="h6">{restaurant?.name}</Typography>
        <Typography variant="body1" color={"#868e96"}>
          {restaurant?.description}
        </Typography>

        <Typography variant="h6">Photos</Typography>
        <Grid container>
          {restaurant?.photos.map((e, index) => {
            return (
              <Grid key={index} item xs={3} md={2} mr={{ xs: 1, md: 2 }}>
                <Stack
                  sx={{
                    width: { xs: "100%", md: 200 },
                    height: { xs: "100%", md: 200 },
                  }}
                >
                  <img
                    src={e}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      aspectRatio: '1 / 1'
                    }}
                  />
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Stack>

      <Stack
        direction={"column"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        sx={{
          position: { xs: "sticky", md: "sticky" },
          bottom: 0,
          pb: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            width: "200px",
          }}
          onClick={() => {
            localStorage.setItem("selected", JSON.stringify(restaurant));
            navigate("/booking");
          }}
        >
          Make a booking
        </Button>
      </Stack>
    </Stack>
  );
}
