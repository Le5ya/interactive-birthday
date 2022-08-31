import { createContext, useState } from "react";
export const ImgContext = createContext('');

export const ImgContextProvider = ({ children }) => {
	const [img, setImg] = useState('')
	return (
		<ImgContext.Provider value={{img, setImg}}>
			{children}
		</ImgContext.Provider>
	)
}