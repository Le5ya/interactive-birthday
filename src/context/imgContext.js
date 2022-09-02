import { createContext } from "react";
import { useFetch } from '../hooks/useFetch'
import { URI_API } from "../const/const";
import { useSelector } from "react-redux/es/exports";

export const imgContext = createContext({});

export const ImgContextProvider = ({ children }) => {
	const {holiday} = useSelector(state => state.holidays.holyday);
	//const { urlImg } = useImg(holiday);
	const { urlImg } = useFetch(`${URI_API}image/${holiday}`);
	
	return (
		<imgContext.Provider value={{urlImg}}>
			{children}
		</imgContext.Provider>
	)
}