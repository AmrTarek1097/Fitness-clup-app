import { Typography, Stack, Button } from "@mui/material";
import React from "react";
import BodyPartImg from "../assets/icons/body-part.png";
import TargetImg from "../assets/icons/target.png";
import EquipmentImg from "../assets/icons/equipment.png";

export const Details = ({ exerciseDetails }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetails;

  console.log(gifUrl);
  return (
    <Stack
      gap="200px"
     
      sx={{ flexDirection: { md: "row" }, p: "40px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography textTransform="capitalize" variant="h3" ml={5}>{name}</Typography>

        <Typography textTransform="capitalize" variant="h6" ml={5}>
          {name} is one of the best exercises to target your {target}. It will
          help you gain more muscle mass and be more fit.
        </Typography>

        <Stack direction="column" gap="24px" ml={3}>
          <Stack direction="row" alignItems="center" gap="20px">
          <Button sx={{ background: '#FF5465', borderRadius: '50%', width: '100px', height: '100px' }}>
            <img src={TargetImg} alt={bodyPart} />
            </Button>
            <Typography textTransform="capitalize" fontSize="18px" fontWeight="bold" ml={5}>
              {target}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap="20px">
          <Button sx={{ background: '#FF5465', borderRadius: '50%', width: '100px', height: '100px' }}>
            <img src={BodyPartImg} alt={bodyPart} />
            </Button>
            <Typography textTransform="capitalize" fontSize="18px" fontWeight="bold" ml={5}>
              {bodyPart}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap="20px">
          <Button sx={{ background: '#FF5465', borderRadius: '50%', width: '100px', height: '100px' }}>
            <img src={EquipmentImg} alt={equipment} />
            </Button>
            <Typography textTransform="capitalize" fontSize="18px" fontWeight="bold" ml={5}>
              {equipment}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
