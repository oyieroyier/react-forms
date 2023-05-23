import { FieldValues, useForm } from 'react-hook-form';

// Components
import FormBackgroundAndShapes from './FormBackgroundAndShapes';
import FormSocialMediaLinks from './FormSocialMediaLinks';

const Form = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};

	return (
		<>
			<FormBackgroundAndShapes />
			<form onSubmit={handleSubmit(onSubmit)}>
				<h3>Login Here</h3>

				<label htmlFor="username">Username</label>
				<input
					{...register('name')}
					type="text"
					placeholder="Email or Phone"
					id="username"
				/>

				<label htmlFor="password">PIN</label>
				<input
					{...register('pin')}
					type="password"
					placeholder="PIN"
					id="password"
				/>

				<button>Log In</button>

				<FormSocialMediaLinks />
			</form>
		</>
	);
};

export default Form;
