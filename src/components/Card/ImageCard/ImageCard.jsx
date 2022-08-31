import { useContext } from "react";
import { ImgContextProvider } from "../../../context/imgContext";

const ImageCard = (props) => {
	useContext(ImgContextProvider);
	return (
		<img src={props.img} alt="Фон открытки" width={840} height={520} />
		)

};
export default ImageCard;