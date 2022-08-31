import { createContext, useState } from "react";
export const ImgContext = createContext('');

export const ImgContextProvider = ({ children }) => {
	const [img, setImg] = useState('')
	return (
		<imgContext value={{img, setImg}}>
			{children}
		</imgContext>
	)
}