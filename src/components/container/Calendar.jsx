import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import googleCalendarPlugin from "@fullcalendar/google-calendar";

export const Calendar = () => {
  return (
    <FullCalendar
      googleCalendarApiKey="AIzaSyCvGNAFBo-ukoPEcVIS2v1SxoW0PXonTXE"
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      initialView="dayGridMonth"
      events={{
        googleCalendarId: "meme.hisa33@gmail.com"
      }}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth"
      }}
      locale="ja"
      navLinks="false"
      editable="false"
    />
  );
};

// import React from "react";
// import Iframe from "react-iframe";
// import styled from "styled-components";
// import { Calendar } from "@fullcalendar/core";
// import googleCalendarPlugin from "@fullcalendar/google-calendar";

// let calendar = new Calendar(calendarEl, {
//   plugins: [googleCalendarPlugin],
//   googleCalendarApiKey: "AIzaSyA_QJwjtIXCNA4GS8Wzi82JkLA9LNRnu0g",
//   events: {
//     googleCalendarId: "l05ur2ljobrce6nvvfg83k2u44@group.calendar.google.com"
//   }
// });
// export const Calendar = () => {
//   return (
//     <div>s
//       <SIframe
//         src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=Asia%2FTokyo&showTitle=0&showDate=1&showNav=1&showTz=0&showPrint=0&showTabs=0&showCalendars=0&title=%E6%A0%B9%E6%B4%A5%E6%95%B4%E4%BD%93%E9%99%A2&mode=MONTH&src=bDA1dXIybGpvYnJjZTZudnZmZzgzazJ1NDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23795548&color=%230B8043"
//         frameborder="0"
//         scrolling="no"
//       ></SIframe>
//     </div>
//   );
// };

// const SIframe = styled(Iframe)`
//   width: 100%;
//   height: 700px;

//   @media screen and (max-width: 768px) {
//     height: 500px;
//   }

//   @media screen and (max-width: 600px) {
//     height: 400px;
//   }
// `;
