"use client";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { RestaurantType } from "../../utils/type";
import {
  Button,
  Stack,
  Typography,
  TextField,
  Grid,
  Select,
  FormControl,
  MenuItem,
  ToggleButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { SelectChangeEvent } from "@mui/material/Select";

export default function Booking() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number | null>(0);
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<Dayjs | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<RestaurantType | null>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    const dateTime = date
      ?.set("hour", dayjs(time, "HH:mm").hour())
      ?.set("minute", dayjs(time, "HH:mm").minute());

    const cartLocalStorage = JSON.parse(
      localStorage.getItem("bookingList") || "[]"
    );
    cartLocalStorage.push({
      id: cartLocalStorage.length + 1,
      name: selected?.name,
      booking: {
        name: name,
        size: quantity,
        dateTime: dateTime,
      },
    });
    localStorage.setItem("bookingList", JSON.stringify(cartLocalStorage));
    navigate(`/restaurant/${selected?.id}`);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setTime(event.target.value as string);
  };

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setName(e.target.value);
  };

  useEffect(() => {
    setSelected(JSON.parse(localStorage.getItem("selected") || "[]"));
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
      <Typography variant="h6">Make a booking for {selected?.name}</Typography>
      <Stack direction={"column"} spacing={2}>
        <Typography variant="body1">Name</Typography>
        <TextField
          id="name"
          variant="outlined"
          fullWidth
          onChange={handleSearchChange}
          sx={{
            bgcolor: "white",
          }}
        />

        <Typography variant="body1">Table Size</Typography>

        <Grid container>
          <Grid item xs={6} md={3} pr={0.5}>
            <ToggleButton
              value={1}
              selected={quantity === 1}
              onChange={() => {
                setQuantity(1);
              }}
              sx={{
                width: { xs: "100%", md: "200px" },
                height: { xs: "150px", md: "200px" },
              }}
            >
              1 person
            </ToggleButton>
          </Grid>
          <Grid item xs={6} md={3} pl={0.5}>
            <ToggleButton
              value={2}
              selected={quantity === 2}
              onChange={() => {
                setQuantity(2);
              }}
              sx={{
                width: { xs: "100%", md: "200px" },
                height: { xs: "150px", md: "200px" },
              }}
            >
              2 people
            </ToggleButton>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            pr={{ xs: 0.5, md: 0 }}
            pt={{ xs: 1, md: 0 }}
          >
            <ToggleButton
              value={3}
              selected={quantity === 3}
              onChange={() => {
                setQuantity(3);
              }}
              sx={{
                width: { xs: "100%", md: "200px" },
                height: { xs: "150px", md: "200px" },
              }}
            >
              3 people
            </ToggleButton>
          </Grid>

          <Grid
            item
            xs={6}
            md={3}
            pl={{ xs: 0.5, md: 0 }}
            pt={{ xs: 1, md: 0 }}
          >
            <ToggleButton
              value={4}
              selected={quantity === 4}
              onChange={() => {
                setQuantity(4);
              }}
              sx={{
                width: { xs: "100%", md: "200px" },
                height: { xs: "150px", md: "200px" },
              }}
            >
              4+ people
            </ToggleButton>
          </Grid>
        </Grid>

        <Typography variant="body1">Date</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disablePast
            value={date}
            onChange={(newValue) => setDate(newValue)}
          />
        </LocalizationProvider>

        <Typography variant="body1">Time</Typography>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={time}
            onChange={handleChange}
          >
            <MenuItem value={"12:00"}>12:00</MenuItem>
            <MenuItem value={"13:00"}>13:00</MenuItem>
            <MenuItem value={"14:00"}>14:00</MenuItem>
            <MenuItem value={"15:00"}>15:00</MenuItem>
            <MenuItem value={"16:00"}>16:00</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          width: "200px",
        }}
        onClick={handleOpen}
      >
        make a booking
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to make this booking?"}
        </DialogTitle>
        <DialogContent>
          <Stack direction={"column"} spacing={1}>
            <Typography variant="body1">{selected?.name}</Typography>
            <Typography variant="body1">Name: {name}</Typography>
            <Typography variant="body1">Table size: {quantity}</Typography>
            <Typography variant="body1">Time: {time}</Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit} autoFocus>
            confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
