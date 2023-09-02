import { Stack, Typography } from "@mui/material";
import Icon from '../assets/icons/gym.png';


const BodyPart = ( {item, bodyPart, setBodyPart} ) => {
  return (
    <Stack 
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    m={4}
    onClick={
        () => {setBodyPart(item);
        window.scrollTo({top: 2000, left: 100, behavior: "smooth"})
        }}
    sx={{
        borderTop:  bodyPart === item ? '6px solid #FF5465' : '' ,
        borderRadius: '50px',
        cursor: 'pointer',
        width: '250px',
        height: '250px',
        backgroundColor: '#17477D',
        gap: '40px'
    }}
    >
        
        <img src={Icon} alt="dumblle" style={{width: '80px', height: '80px'}}/>
        <Typography fontSize="24px" fontWeight="bold"  color="#000" textTransform="capitalize"> {item}</Typography>

    </Stack>
  )
}



export default BodyPart