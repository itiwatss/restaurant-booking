"use client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography, Card, Link } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import { UserType } from "../../utils/type";

export default function BookingHistory() {
  const navigate = useNavigate();
  const [bookingHistory, setBookingHistory] = useState<UserType[] | undefined>(
    undefined
  );

  const refreshPage = () => {
    navigate(0);
  };

  const handleDelete = (selected: UserType) => {
    const newBookingHistory = bookingHistory?.filter(
      (e) => e.id !== selected.id
    );
    setBookingHistory(newBookingHistory);
    localStorage.setItem("bookingList", JSON.stringify(newBookingHistory));
    refreshPage();
  };

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
      {bookingHistory?.map((e: UserType, index: number) => {
        return (
          <Card
            key={index}
            sx={{
              border: "1px solid black",
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={"space-between"}
              alignItems={{ xs: "flex-start", md: "center" }}
            >
              <Stack direction={{ xs: "column", md: "row" }} sx={{
                width: '100%'
              }}>
                <img
                  src={"https://picsum.photos/300"}
                  alt=""
                  height={200}
                />
                <Stack
                  direction={"column"}
                  justifyContent={"space-between"}
                  spacing={1}
                  p={2}
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
                        fontWeight: 600,
                      }}
                    >
                      {e.name}
                    </Link>
                    <Typography variant="body1">
                      Name: {e.booking?.name}
                    </Typography>
                    <Typography variant="body1">
                      Table size:{" "}
                      {e.booking?.size === 4
                        ? `${e.booking?.size}+`
                        : e.booking?.size}{" "}
                      people
                    </Typography>
                    <Typography variant="body1">
                      Date: {dayjs(e.booking?.dateTime).format("DD/MM/YYYY")}
                    </Typography>
                    <Typography variant="body1">
                      Time: {dayjs(e.booking?.dateTime).format("HH:mm")}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack
                direction={"row"}
                pl={{ xs: 2, md: 0 }}
                pb={{ xs: 2, md: 0 }}
                pr={{ xs: 0, md: 2 }}
              >
                <Button
                  variant="outlined"
                  onClick={() => handleDelete(e)}
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
                      fontSize: { xs: "24px", md: "32px" },
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
