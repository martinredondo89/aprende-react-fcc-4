import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';

function MostrarLogo() {
	return (
		<div className='freecodecamp-logo-contenedor'>
			<img
				src={freeCodeCampLogo}
				className='freecodecamp-logo'
			/>
		</div>
	);
};

export default MostrarLogo;