import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { signUp } from '@actions';
import ContentDiv from '@shared/ContentDiv';
import { Label, Input, Form, Error, SubmitButton } from './styles';

const schema = yup.object().shape({
	firstName : yup.string().required('First name is required').max(20),
	lastName  : yup.string().required('Last name is required').max(20),
	email     : yup
		.string()
		.required('Email is required')
		.email('Email is invalid'),
	password  : yup
		.string()
		.required('Password is required')
		.min(6, 'Password must be minimum 6 characters')
		.max(30, 'Password must be maximum 30 characters')
});

const SignUp = (props) => {
	const formOptions = { resolver: yupResolver(schema) };
	const { register, handleSubmit, formState: { errors } } = useForm(
		formOptions
	);

	const onSubmit = (formData) => {
		console.log('submit: ', formData);
		props.signUp(formData);
	};

	return (
		<ContentDiv>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Label>First Name</Label>
				<Input {...register('firstName')} />
				<Error>
					{errors.firstName ? errors.firstName.message : ''}
				</Error>
				<Label>Last Name</Label>
				<Input {...register('lastName')} />
				<Error>{errors.lastName ? errors.lastName.message : ''}</Error>
				<Label>Email</Label>
				<Input {...register('email')} />
				<Error>{errors.email ? errors.email.message : ''}</Error>
				<Label>Password</Label>
				<Input {...register('password')} />
				<Error>{errors.password ? errors.password.message : ''}</Error>
				<Error>{props.error ? props.error : ''}</Error>
				<SubmitButton as={Input} type="submit" />
			</Form>
		</ContentDiv>
	);
};

const mapStateToProps = (state) => {
	return { error: state.user.error };
};

export default connect(mapStateToProps, { signUp })(SignUp);
