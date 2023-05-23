import { FieldValues, useForm } from 'react-hook-form';

// Components
import FormBackgroundAndShapes from './FormBackgroundAndShapes';
/* import FormSocialMediaLinks from './FormSocialMediaLinks'; */

interface FormData {
	name: string;
	pin: number;
}

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	console.log(errors);

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
					{...register('name', { required: true, minLength: 3 })}
					type="text"
					placeholder="Email or Phone"
					id="username"
				/>
				{errors.name?.type === 'required' && <p>The name field is required</p>}
				{errors.name?.type === 'minLength' && (
					<p>The name field must be at least 3 characters long</p>
				)}

				<label htmlFor="password">PIN</label>
				<input
					{...register('pin', { required: true, minLength: 6 })}
					type="password"
					placeholder="PIN"
					id="pin"
				/>
				{errors.pin?.type === 'required' && <p>The PIN field is required</p>}
				{errors.pin?.type === 'minLength' && (
					<p>The PIN field must be at least 6 characters long</p>
				)}

				<button>Log In</button>

				{/* You can uncomment the component below if you want to view it after cloning the repo.
				Remember to uncomment the import statement above too. */}

				{/* <FormSocialMediaLinks /> */}
			</form>
		</>
	);
};

export default Form;
