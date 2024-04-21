"use client";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Menu() {
  const navigate = useNavigate();

  const handleHomeRoute = () => {
    navigate("/");
  };

  const handleBookingRoute = () => {
    navigate("/booking-history");
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={'center'}
      px={{
        xs: 3,
        md: 15,
      }}
      pt={5}
      py={2}
      sx={{
        bgcolor: "#e9ecef",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={"600"}
        onClick={handleHomeRoute}
        sx={{
          cursor: "pointer",
        }}
      >
        TableBooking
      </Typography>

      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          display: {
            xs: "none",
            md: "block",
          },
        }}
        onClick={handleBookingRoute}
      >
        manage booking
      </Button>

      <IconButton sx={{
        display: {
            xs: 'block',
            md: 'none'
        }
      }}>
        <AccountCircleIcon
          sx={{
            fontSize: "32px",
          }}
        />
      </IconButton>
    </Stack>
  );
}
