const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

let bookings = [];

app.get("/api/booked-dates", (req, res) => {
  res.json(bookings);
});

app.post("/api/book", (req, res) => {
  const { date } = req.body;

  if (bookings.includes(date)) {
    return res.status(400).json({ message: "Slot already taken" });
  }

  bookings.push(date);
  res.json({ message: "Booked successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
