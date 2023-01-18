import { useState } from 'react';

import { api } from '../utils/api';

const SignUpPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  const create = api.example.signUp.useMutation();
  const addPicture = api.example.addPicture.useMutation();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		create.mutate({ email, password });
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				name="password"
				id="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type="submit">Sign Up</button>
		</form>
	);
};

export default SignUpPage;
