import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useCode({code}: {code: string}) {
	const [isValid, setIsValid] = useState(false)

	const verifyCode = useCallback(async () => {
		try {
			const {data} = await axios.get(`/api/code/${code}`);
			console.log(data);
			setIsValid(true);
		} catch(e) {
			setIsValid(false);
		}
	}, [code])

	useEffect(() => {
		verifyCode();
	}, [verifyCode])

	return (isValid);
}