import {ClipLoader} from 'react-spinners'

const Loading = ({ className }) => {
	return (
		<div className={`${className} flex justify-center p-5`}>
			<ClipLoader color={`#04A0D7`} size={60} margin={2} />
		</div>
	);
};

export default Loading;
