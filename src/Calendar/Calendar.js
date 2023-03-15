import React from "react";
import "../App.css";

function Calendar({ date }) {
  const givenDate = new Date(date);
  const year = givenDate.getFullYear();
  const month = givenDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  // const days = [];

  // for (let i = 1; i <= daysInMonth; i++) {
  //   days.push(i);
  // }

  return (
    <div className="full-date">
      <div>
        <div style={{ display: "flex" }}>
          <p style={{ minWidth: "50px" }}>Sun</p>
          <p style={{ minWidth: "50px" }}>Mon</p>
          <p style={{ minWidth: "50px" }}>Tue</p>
          <p style={{ minWidth: "50px" }}>Wed</p>
          <p style={{ minWidth: "50px" }}>Thu</p>
          <p style={{ minWidth: "50px" }}>Fri</p>
          <p style={{ minWidth: "50px" }}>Sat</p>
        </div>
        <div>
          {[
            ...Array(Math.ceil((daysInMonth + firstDayOfMonth) / 7)).keys(),
          ].map((week) => (
            <div key={week} style={{ display: "flex" }}>
              {[...Array(7).keys()].map((day) => {
                const dayOfMonth = week * 7 + day + 1 - firstDayOfMonth;
                const isGivenMonth =
                  dayOfMonth >= 1 && dayOfMonth <= daysInMonth;
                const isGivenDate =
                  isGivenMonth &&
                  new Date(year, month, dayOfMonth).toDateString() ===
                    givenDate.toDateString();
                if (dayOfMonth <= 0 || dayOfMonth > daysInMonth) {
                  return <p key={day} style={{ minWidth: "50px" }}></p>;
                }
                return (
                  <p
                    key={day}
                    style={{
                      border: isGivenDate ? "1px solid #c8cfd0" : null,
                      backgroundColor: isGivenDate ? "#3b4445" : null,
                      minWidth: "50px",
                    }}
                  >
                    {dayOfMonth}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
