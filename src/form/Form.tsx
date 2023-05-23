import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Components
import FormBackgroundAndShapes from './FormBackgroundAndShapes';
/* import FormSocialMediaLinks from './FormSocialMediaLinks'; */

/* Using z we can define the schema with all our validation rules */

/* z has an object property/method in which we pass an object with properties that represent our form fields. */

const schema = z.object({
	/* Our form has a name that is of a string data type and takes a minimum of 3 characters.
	
	When specifying our validation rules, we can pass an optional object with the message property*/

	name: z
		.string()
		.min(3, { message: 'Username must be at least 3 characters long' }),

	/* Our form also has a pin that is of a number data type that should not be less than 9999 (Coercing a 5-number pin).
	
	We can also pass an optional object to catch exceptions and throw a error in case the value the input receives cannot be coerced into a number.
	*/
	pin: z.number({invalid_type_error: "PIN field is required"}).min(9999, {message: "PIN must be a number greater than or equal to 9999"}),
});

// This now replaces the interface in the previous code.
type FormData = z.infer<typeof schema>;

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		/* Pass a configuration object and set resolver to zodResolver function which we call and pass the schema object. */
		resolver: zodResolver(schema),
	});

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
					{...register('name')}
					type="text"
					placeholder="Username"
					id="username"
				/>
				{/* Zod will now generate an error message based on the schema we defined at the beginning of this file */}
				{errors.name && <p>{errors.name.message}</p>}

				<label htmlFor="password">PIN</label>
				<input
					/* Because React value inputs always returns a string, add a second argument here to instruct react-hook-form to interpret the string value it will receive as a number. */
					{...register('pin', { valueAsNumber: true })}
					type="number"
					placeholder="PIN"
					id="pin"
				/>
				{errors.pin && <p>{errors.pin.message}</p>}

				<button>Log In</button>

				{/* You can uncomment the component below if you want to view it after cloning the repo.
				Remember to uncomment the import statement above too. */}

				{/* <FormSocialMediaLinks /> */}
			</form>
		</>
	);
};

export default Form;
