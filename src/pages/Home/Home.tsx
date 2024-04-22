"use client";
import { useState } from "react";
import _ from "lodash";
import { RestaurantType, initialList } from "../../utils/type";
import RestaurantCard from "../../components/RestaurantCard";
import { Stack, TextField, Grid } from "@mui/material";

export default function Home() {
  const [search, setSearch] = useState("");

  const [restaurantList, setRautaurantList] = useState<RestaurantType[] | []>(
    initialList
  );

  const printValue = _.debounce((value: string) => {
    setSearch(value);
    if (value === "") {
      setRautaurantList(initialList);
    } else {
      setRautaurantList(
        restaurantList.filter((e) => _.includes(e.name.toLowerCase(), search))
      );
    }
  }, 0);

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    printValue(e.target.value);
  };

  return (
    <Stack direction={"column"}>
      <Stack
        direction={"column"}
        px={{
          xs: 3,
          md: 15,
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
          onChange={handleSearchChange}
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
                <RestaurantCard data={e} />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Stack>
  );
}
