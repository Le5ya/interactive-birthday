import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";


const ImageCard = (props) => {
	useContext(imgContext)
	return(
		<img src={props.img} alt="Фон открытки" width={840} height={520} />)

};
export default ImageCard;