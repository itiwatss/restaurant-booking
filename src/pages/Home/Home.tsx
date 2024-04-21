"use client";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Stack,
  Typography,
  TextField,
  Card,
  Grid,
} from "@mui/material";

export default function Home() {
  const navigate = useNavigate();
  // const [search, setSearch] = useState("");

  const restaurantList = [
    {
      id: 1,
      name: "Tasty Bites",
      description: "A cozy restaurant serving delicious dishes.",
      photos: ["https://picsum.photos/300", "https://picsum.photos/300"],
    },
    {
      id: 2,
      name: "Sizzle Grill",
      description: "An upscale steakhouse with a lively atmosphere.",
      photos: ["https://picsum.photos/300", "https://picsum.photos/300"],
    },
  ];

  // const handleSearchChange = (
  //   e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  // ) => {
  //   setSearch(e.target.value);
  // };

  return (
    <Stack direction={"column"}>
      <Stack
        direction={"column"}
        px={{
          xs: 3, md: 15
        }}
        py={5}
        sx={{
          bgcolor: "#e9ecef",
        }}
      >
        <TextField
          id="search"
          variant="outlined"
          placeholder="search a restaurant..."
          fullWidth
          // onChange={handleSearchChange}
          sx={{
            bgcolor: "white",
          }}
        />
      </Stack>

      <Stack direction={"column"}>
        <Grid container px={{ xs: 3, md: 15 }} py={5} spacing={5}>
          {restaurantList.map((e) => {
            return (
              <Grid key={e.id} item xs={12} md={6}>
                <Card
                  sx={{
                    border: "1px solid black",
                  }}
                >
                  <Stack direction={"row"}>
                    <img src={e.photos[0]} alt="" width={200} height={200} />
                    <Stack
                      direction={"column"}
                      justifyContent={"space-between"}
                      spacing={1}
                      p={2}
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Stack direction={"column"} spacing={1}>
                        <Typography variant="body1">{e.name}</Typography>
                        <Typography variant="body2" sx={{ width: "200px" }}>
                          {e.description}
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
                          onClick={() => navigate(`/restaurant/${e.id}`)}
                        >
                          select
                        </Button>
                      </Stack>
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Stack>
  );
}
