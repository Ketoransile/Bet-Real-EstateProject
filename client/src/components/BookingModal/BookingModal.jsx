// import { Modal, Button } from "@mantine/core";
// import { DatePicker } from "@mantine/dates";
// import React, { useContext, useState } from "react";
// import { useMutation } from "react-query";
// import UserDetailContext from "../../context/UserDetailContext";
// import { bookVisit } from "../../utils/api.js";
// import dayjs from "dayjs";

// const BookingModal = ({ opened, setOpened, email, propertyId }) => {
//   const [value, setValue] = useState(null);

//   const {
//     userDetails: { token },
//     setUserDetails,
//   } = useContext(UserDetailContext);

//   const handleBookingSuccess = () => {
//     toast.success("You have booked your visit", {
//       position: "bottom-right",
//     });
//     setUserDetails((prev) => ({
//       ...prev,
//       bookings: [
//         ...prev.bookings,
//         {
//           id: propertyId,
//           date: dayjs(value).format("DD/MM/YYYY"),
//         },
//       ],
//     }));
//   };

//   const { mutate, isLoading } = useMutation({
//     mutationFn: () => bookVisit(value, propertyId, email, token),
//     onSuccess: () => handleBookingSuccess(),
//     onError: ({ response }) => toast.error(response.data.message),
//     onSettled: () => setOpened(false),
//   });
//   return (
//     <Modal
//       opened={opened}
//       onClose={() => setOpened(false)}
//       title="Select your date of visit"
//       centered
//     >
//       <div className="flexColCenter">
//         <DatePicker
//           placeholder="Pick date"
//           value={value}
//           onChange={setValue}
//           minDate={new Date()}
//         />
//         <Button disabled={!value || isLoading} onClick={() => mutate()}>
//           Book visit
//         </Button>
//       </div>
//     </Modal>
//   );
// };

// export default BookingModal;
// import React, { useContext, useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
// } from "@mui/material";
// import { useMutation } from "react-query";
// import UserDetailContext from "../../context/UserDetailContext";
// import { bookVisit } from "../../utils/api.js";
// import dayjs from "dayjs";
// import { toast } from "react-toastify";

// const BookingModal = ({ opened, setOpened, email, propertyId }) => {
//   const [value, setValue] = useState(null);

//   const {
//     userDetails: { token },
//     setUserDetails,
//   } = useContext(UserDetailContext);

//   const handleBookingSuccess = () => {
//     toast.success("You have booked your visit", {
//       position: "bottom-right",
//     });
//     setUserDetails((prev) => ({
//       ...prev,
//       bookings: [
//         ...prev.bookings,
//         {
//           id: propertyId,
//           date: dayjs(value).format("DD/MM/YYYY"),
//         },
//       ],
//     }));
//   };

//   const { mutate, isLoading } = useMutation({
//     mutationFn: () => bookVisit(value, propertyId, email, token),
//     onSuccess: () => handleBookingSuccess(),
//     onError: ({ response }) => toast.error(response.data.message),
//     onSettled: () => setOpened(false),
//   });

//   return (
//     <Dialog
//       open={opened}
//       onClose={() => setOpened(false)}
//       aria-labelledby="booking-dialog-title"
//       maxWidth="xs"
//       fullWidth
//     >
//       <DialogTitle id="booking-dialog-title">
//         Select your date of visit
//       </DialogTitle>
//       <DialogContent className="flexColCenter">
//         <TextField
//           label="Pick date"
//           type="date"
//           value={value ? dayjs(value).format("YYYY-MM-DD") : ""}
//           onChange={(e) => setValue(e.target.value)}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           inputProps={{
//             min: dayjs().format("YYYY-MM-DD"),
//           }}
//           fullWidth
//         />
//       </DialogContent>
//       <DialogActions className="flexColCenter">
//         <Button
//           variant="contained"
//           color="primary"
//           disabled={!value || isLoading}
//           onClick={() => mutate()}
//         >
//           Book visit
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default BookingModal;
// import React, { useContext, useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
// } from "@mui/material";
// import { useMutation } from "react-query";
// import UserDetailContext from "../../context/UserDetailContext";
// import { bookVisit } from "../../utils/api.js";
// import dayjs from "dayjs";
// import { toast } from "react-toastify";

// const BookingModal = ({ opened, setOpened, email, propertyId }) => {
//   const [value, setValue] = useState(null);

//   const {
//     userDetails: { token },
//     setUserDetails,
//   } = useContext(UserDetailContext);

//   const handleBookingSuccess = () => {
//     toast.success("You have booked your visit", {
//       position: "bottom-right",
//     });
//     setUserDetails((prev) => ({
//       ...prev,
//       bookings: [
//         ...prev.bookings,
//         {
//           id: propertyId,
//           date: dayjs(value).format("DD/MM/YYYY"),
//         },
//       ],
//     }));
//   };

//   const { mutate, isLoading } = useMutation({
//     mutationFn: () => bookVisit(value, propertyId, email, token),
//     onSuccess: () => handleBookingSuccess(),
//     onError: ({ response }) => toast.error(response.data.message),
//     onSettled: () => setOpened(false),
//   });

//   return (
//     <Dialog
//       open={opened}
//       onClose={() => setOpened(false)}
//       aria-labelledby="booking-dialog-title"
//       maxWidth="xs"
//       fullWidth
//     >
//       <DialogTitle id="booking-dialog-title">
//         Select your date of visit
//       </DialogTitle>
//       <DialogContent className="flexColCenter" style={{ paddingTop: "16px" }}>
//         <TextField
//           label="Pick date"
//           type="date"
//           value={value ? dayjs(value).format("YYYY-MM-DD") : ""}
//           onChange={(e) => setValue(e.target.value)}
//           InputLabelProps={{
//             shrink: true,
//             style: { top: "-6px" }, // Adjust label positioning
//           }}
//           inputProps={{
//             min: dayjs().format("YYYY-MM-DD"),
//           }}
//           fullWidth
//           style={{ marginTop: "8px" }} // Add some margin to avoid overlapping
//         />
//       </DialogContent>
//       <DialogActions className="flexColCenter">
//         <Button
//           variant="contained"
//           color="primary"
//           disabled={!value || isLoading}
//           onClick={() => mutate()}
//         >
//           Book visit
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default BookingModal;
import React, { useContext, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/UserDetailContext.js";
import { bookVisit } from "../../utils/api.js";
import { toast } from "react-toastify";
import dayjs from "dayjs";
const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState(null);
  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("You have booked your visit", {
      position: "bottom-right",
    });
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: propertyId,
          date: dayjs(value).format("DD/MM/YYYY"),
        },
      ],
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, propertyId, email, token),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message),
    onSettled: () => setOpened(false),
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date of visit"
      centered
    >
      <div className="flexColCenter" style={{ gap: "1rem" }}>
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Book visit
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
