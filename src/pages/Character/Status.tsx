import SensorsIcon from "@mui/icons-material/Sensors";
import SensorsOffIcon from "@mui/icons-material/SensorsOff";

interface Props {
  status: string;
}
const Status = ({ status }: Props) => {
  return (
    <span>
      {status === "Alive" ? (
        <SensorsIcon></SensorsIcon>
      ) : (
        <SensorsOffIcon></SensorsOffIcon>
      )}
    </span>
  );
};

export default Status;
