"use client";
import { useEffect, useState } from "react";
import { Button, Stack, Typography, Card, Link } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import { UserType } from "../../utils/type";

export default function BookingHistory() {
  const [bookingHistory, setBookingHistory] = useState<UserType[] | null>(null);
  useEffect(() => {
    const cartLocalStorage = JSON.parse(
      localStorage.getItem("bookingList") || "[]"
    );
    setBookingHistory(cartLocalStorage);
  }, []);
  return (
    <Stack
      direction={"column"}
      px={{
        xs: 3,
        md: 15,
      }}
      py={2}
      spacing={2}
    >
      <Typography variant="h6">Manage my bookings</Typography>
      <Typography variant="h6">upcoming</Typography>
      {bookingHistory?.map((e: UserType) => {
        return (
          <Card
            sx={{
              border: "1px solid black",
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <img
                src={"https://picsum.photos/300"}
                alt=""
                width={200}
                height={200}
              />
              <Stack
                direction={"column"}
                justifyContent={"space-between"}
                spacing={1}
                p={2}
                sx={{
                  width: "100%",
                }}
              >
                <Stack
                  direction={"column"}
                  alignItems={"flex-start"}
                  spacing={1}
                >
                  <Link
                    component="button"
                    variant="body1"
                    sx={{
                      color: "black",
                    }}
                  >
                    {e.name}
                  </Link>
                  <Typography variant="body1">Name: {e.booking?.name}</Typography>
                  <Typography variant="body1">Table size: {e.booking?.size} people</Typography>
                  <Typography variant="body1">Date: {dayjs(e.booking?.dateTime).format('DD/MM/YYYY')}</Typography>
                  <Typography variant="body1">Time: {dayjs(e.booking?.dateTime).format('HH:mm')}</Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} pr={2}>
                <Button
                  variant="outlined"
                  sx={{
                    minWidth: "48px",
                    minHeight: "48px",
                    background: "#ff8787",
                    border: 0,
                    boxShadow: "0px 8px 24px 0px #EA7C6952",
                    "&:hover": {
                      background: "#d86654",
                      border: 0,
                    },
                  }}
                >
                  <DeleteIcon
                    sx={{
                      fontSize: "32px",
                      color: "black",
                    }}
                  />
                </Button>
              </Stack>
            </Stack>
          </Card>
        );
      })}
    </Stack>
  );
}
