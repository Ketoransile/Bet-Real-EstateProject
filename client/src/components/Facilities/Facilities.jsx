// import { useAuth0 } from "@auth0/auth0-react";
// import { Box, Button, Group, NumberInput } from "@mantine/core";
// import { useForm } from "@mantine/form";
// import React, { useContext } from "react";
// import UserDetailContext from "../../context/UserDetailContext";
// import useProperties from "../../hooks/useProperties.jsx";
// import { useMutation } from "react-query";
// import { toast } from "react-toastify";
// import { createResidency } from "../../utils/api";
// const Facilities = ({
//   prevStep,
//   propertyDetails,
//   setPropertyDetails,
//   setOpened,
//   setActiveStep,
// }) => {
//   const form = useForm({
//     initialValues: {
//       bedrooms: propertyDetails.facilities.bedrooms,
//       parkings: propertyDetails.facilities.parkings,
//       bathrooms: propertyDetails.facilities.bathrooms,
//     },
//     validate: {
//       bedrooms: (value) => (value < 1 ? "Must have atleast one room" : null),
//       bathrooms: (value) =>
//         value < 1 ? "Must have atleast one bathroom" : null,
//     },
//   });

//   const { bedrooms, parkings, bathrooms } = form.values;

//   const handleSubmit = () => {
//     const { hasErrors } = form.validate();
//     if (!hasErrors) {
//       setPropertyDetails((prev) => ({
//         ...prev,
//         facilities: { bedrooms, parkings, bathrooms },
//       }));
//       mutate();
//     }
//   };

//   // ==================== upload logic
//   const { user } = useAuth0();
//   const {
//     userDetails: { token },
//   } = useContext(UserDetailContext);
//   const { refetch: refetchProperties } = useProperties();

//   const { mutate, isLoading } = useMutation({
//     mutationFn: () =>
//       createResidency(
//         {
//           ...propertyDetails,
//           facilities: { bedrooms, parkings, bathrooms },
//         },
//         token
//       ),
//     onError: ({ response }) =>
//       toast.error(response.data.message, { position: "bottom-right" }),
//     onSettled: () => {
//       toast.success("Added Successfully", { position: "bottom-right" });
//       setPropertyDetails({
//         title: "",
//         description: "",
//         price: 0,
//         country: "",
//         city: "",
//         address: "",
//         image: null,
//         facilities: {
//           bedrooms: 0,
//           parkings: 0,
//           bathrooms: 0,
//         },
//         userEmail: user?.email,
//       });
//       setOpened(false);
//       setActiveStep(0);
//       refetchProperties();
//     },
//   });

//   return (
//     <Box maw="30%" mx="auto" my="sm">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSubmit();
//         }}
//       >
//         <NumberInput
//           withAsterisk
//           label="No of Bedrooms"
//           min={0}
//           {...form.getInputProps("bedrooms")}
//         />
//         <NumberInput
//           label="No of Parkings"
//           min={0}
//           {...form.getInputProps("parkings")}
//         />
//         <NumberInput
//           withAsterisk
//           label="No of Bathrooms"
//           min={0}
//           {...form.getInputProps("bathrooms")}
//         />
//         <Group position="center" mt="xl">
//           <Button variant="default" onClick={prevStep}>
//             Back
//           </Button>
//           <Button type="submit" color="green" disabled={isLoading}>
//             {isLoading ? "Submitting" : "Add Property"}
//           </Button>
//         </Group>
//       </form>
//     </Box>
//   );
// };

// export default Facilities;
// import React, { useContext } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import { useForm } from "@mantine/form";
// import UserDetailContext from "../../context/UserDetailContext";
// import useProperties from "../../hooks/useProperties.jsx";
// import { useMutation } from "react-query";
// import { toast } from "react-toastify";
// import { createResidency } from "../../utils/api";

// const Facilities = ({
//   prevStep,
//   propertyDetails,
//   setPropertyDetails,
//   setOpened,
//   setActiveStep,
// }) => {
//   const form = useForm({
//     initialValues: {
//       bedrooms: propertyDetails.facilities.bedrooms,
//       parkings: propertyDetails.facilities.parkings,
//       bathrooms: propertyDetails.facilities.bathrooms,
//     },
//     validate: {
//       bedrooms: (value) => (value < 1 ? "Must have at least one room" : null),
//       bathrooms: (value) =>
//         value < 1 ? "Must have at least one bathroom" : null,
//     },
//   });

//   const { bedrooms, parkings, bathrooms } = form.values;

//   const handleSubmit = () => {
//     const { hasErrors } = form.validate();
//     if (!hasErrors) {
//       setPropertyDetails((prev) => ({
//         ...prev,
//         facilities: { bedrooms, parkings, bathrooms },
//       }));
//       mutate();
//     }
//   };

//   const { user } = useAuth0();
//   const {
//     userDetails: { token },
//   } = useContext(UserDetailContext);
//   const { refetch: refetchProperties } = useProperties();

//   const { mutate, isLoading } = useMutation({
//     mutationFn: () =>
//       createResidency(
//         {
//           ...propertyDetails,
//           facilities: { bedrooms, parkings, bathrooms },
//         },
//         token
//       ),
//     onError: ({ response }) =>
//       toast.error(response.data.message, { position: "bottom-right" }),
//     onSettled: () => {
//       toast.success("Added Successfully", { position: "bottom-right" });
//       setPropertyDetails({
//         title: "",
//         description: "",
//         price: 0,
//         country: "",
//         city: "",
//         address: "",
//         image: null,
//         facilities: {
//           bedrooms: 0,
//           parkings: 0,
//           bathrooms: 0,
//         },
//         userEmail: user?.email,
//       });
//       setOpened(false);
//       setActiveStep(0); // Resetting active step to the beginning
//       refetchProperties();
//     },
//   });

//   return (
//     <Box sx={{ maxWidth: "30%", mx: "auto", my: 2 }}>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSubmit();
//         }}
//       >
//         <TextField
//           required
//           label="No of Bedrooms"
//           type="number"
//           InputProps={{ inputProps: { min: 1 } }} // Ensuring minimum of 1 bedroom
//           fullWidth
//           margin="normal"
//           {...form.getInputProps("bedrooms")}
//         />
//         <TextField
//           label="No of Parkings"
//           type="number"
//           InputProps={{ inputProps: { min: 0 } }} // Parkings can be 0 or more
//           fullWidth
//           margin="normal"
//           {...form.getInputProps("parkings")}
//         />
//         <TextField
//           required
//           label="No of Bathrooms"
//           type="number"
//           InputProps={{ inputProps: { min: 1 } }} // Ensuring minimum of 1 bathroom
//           fullWidth
//           margin="normal"
//           {...form.getInputProps("bathrooms")}
//         />
//         <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
//           <Button variant="outlined" onClick={prevStep} disabled={isLoading}>
//             Back
//           </Button>
//           <Button
//             type="submit"
//             variant="contained"
//             color="success"
//             disabled={isLoading}
//           >
//             {isLoading ? "Submitting..." : "Add Property"}
//           </Button>
//         </Stack>
//       </form>
//     </Box>
//   );
// };

// export default Facilities;
// import { useAuth0 } from "@auth0/auth0-react";
// import { Box, Button, Group, NumberInput } from "@mantine/core";
// import { useForm } from "@mantine/form";
// import React, { useContext } from "react";
// import UserDetailContext from "../../context/UserDetailContext";
// import useProperties from "../../hooks/useProperties.jsx";
// import { useMutation } from "react-query";
// import { toast } from "react-toastify";
// import { createResidency } from "../../utils/api";
// const Facilities = ({
//   prevStep,
//   propertyDetails,
//   setPropertyDetails,
//   setOpened,
//   setActiveStep,
// }) => {
//   const form = useForm({
//     initialValues: {
//       bedrooms: propertyDetails.facilities.bedrooms,
//       parkings: propertyDetails.facilities.parkings,
//       bathrooms: propertyDetails.facilities.bathrooms,
//     },
//     validate: {
//       bedrooms: (value) => (value < 1 ? "Must have atleast one room" : null),
//       bathrooms: (value) =>
//         value < 1 ? "Must have atleast one bathroom" : null,
//     },
//   });

//   const { bedrooms, parkings, bathrooms } = form.values;

//   const handleSubmit = () => {
//     const { hasErrors } = form.validate();
//     if (!hasErrors) {
//       setPropertyDetails((prev) => ({
//         ...prev,
//         facilities: { bedrooms, parkings, bathrooms },
//       }));
//       mutate();
//     }
//   };

//   // ==================== upload logic..........................................................................
//   const { user } = useAuth0();
//   const {
//     userDetails: { token },
//   } = useContext(UserDetailContext);
//   const { refetch: refetchProperties } = useProperties();

//   const { mutate, isLoading } = useMutation({
//     mutationFn: () =>
//       createResidency(
//         {
//           ...propertyDetails,
//           facilities: { bedrooms, parkings, bathrooms },
//         },
//         token
//       ),
//     onError: ({ response }) =>
//       toast.error(response.data.message, { position: "bottom-right" }),
//     onSettled: () => {
//       toast.success("Added Successfully", { position: "bottom-right" });
//       setPropertyDetails({
//         title: "",
//         description: "",
//         price: 0,
//         country: "",
//         city: "",
//         address: "",
//         image: null,
//         facilities: {
//           bedrooms: 0,
//           parkings: 0,
//           bathrooms: 0,
//         },
//         userEmail: user?.email,
//       });
//       setOpened(false);
//       setActiveStep(0);
//       refetchProperties();
//     },
//   });

//   return (
//     <Box maw="30%" mx="auto" my="sm">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSubmit();
//         }}
//       >
//         <NumberInput
//           withAsterisk
//           label="No of Bedrooms"
//           min={0}
//           {...form.getInputProps("bedrooms")}
//         />
//         <NumberInput
//           label="No of Parkings"
//           min={0}
//           {...form.getInputProps("parkings")}
//         />
//         <NumberInput
//           withAsterisk
//           label="No of Bathrooms"
//           min={0}
//           {...form.getInputProps("bathrooms")}
//         />
//         <Group position="center" mt="xl">
//           <Button variant="default" onClick={prevStep}>
//             Back
//           </Button>
//           <Button type="submit" color="green" disabled={isLoading}>
//             {isLoading ? "Submitting" : "Add Property"}
//           </Button>
//         </Group>
//       </form>
//     </Box>
//   );
// };

// export default Facilities;
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Group, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext } from "react";
import UserDetailContext from "../../context/UserDetailContext";
import useProperties from "../../hooks/useProperties.jsx";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { createResidency } from "../../utils/api";
const Facilities = ({
  prevStep,
  propertyDetails,
  setPropertyDetails,
  setOpened,
  setActiveStep,
}) => {
  const form = useForm({
    initialValues: {
      bedrooms: propertyDetails.facilities.bedrooms,
      parkings: propertyDetails.facilities.parkings,
      bathrooms: propertyDetails.facilities.bathrooms,
    },
    validate: {
      bedrooms: (value) => (value < 1 ? "Must have atleast one room" : null),
      bathrooms: (value) =>
        value < 1 ? "Must have atleast one bathroom" : null,
    },
  });

  const { bedrooms, parkings, bathrooms } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,
        facilities: { bedrooms, parkings, bathrooms },
      }));
      mutate();
    }
  };

  // ==================== upload logic
  const { user } = useAuth0();
  console.log("User email:", user?.email);
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);
  const { refetch: refetchProperties } = useProperties();

  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      createResidency(
        {
          ...propertyDetails,
          facilities: { bedrooms, parkings, bathrooms },
          userEmail: user?.email,
        },
        token
      ),
    onError: ({ response }) =>
      toast.error(response.data.message, { position: "bottom-right" }),
    onSettled: () => {
      toast.success("Added Successfully", { position: "bottom-right" });
      setPropertyDetails({
        title: "",
        description: "",
        price: 0,
        country: "",
        city: "",
        address: "",
        image: null,
        facilities: {
          bedrooms: 0,
          parkings: 0,
          bathrooms: 0,
        },
        userEmail: user?.email,
      });
      setOpened(false);
      setActiveStep(0);
      refetchProperties();
    },
  });

  return (
    <Box maw="30%" mx="auto" my="sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <NumberInput
          withAsterisk
          label="No of Bedrooms"
          min={0}
          {...form.getInputProps("bedrooms")}
        />
        <NumberInput
          label="No of Parkings"
          min={0}
          {...form.getInputProps("parkings")}
        />
        <NumberInput
          withAsterisk
          label="No of Bathrooms"
          min={0}
          {...form.getInputProps("bathrooms")}
        />
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" color="green" disabled={isLoading}>
            {isLoading ? "Submitting" : "Add Property"}
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Facilities;
