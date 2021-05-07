import { useCallback } from 'react';
import { Transition } from 'react-transition-group';

export const Animation = () => {
	const [ animate, setAnimate ] = useState(false);

	const doAnimate = useCallback(() => {
		setAnimate(true);
		setTimeout(() => {
			setAnimate(false);
		}, 3000);
	}, []);
};
