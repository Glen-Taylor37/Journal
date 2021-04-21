import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ContentDiv from '@shared/ContentDiv';
import { Label, Input, Error } from './styles';

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

const SignUp = () => {
	const formOptions = { resolver: yupResolver(schema) };
	const { register, handleSubmit, watch, formState: { errors } } = useForm(
		formOptions
	);

	const onSubmit = (data) => console.log(data);

	return (
		<ContentDiv>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Label>First Name</Label>
				<input {...register('firstName')} />
				<Error>
					{errors.firstName ? errors.firstName.message : ''}
				</Error>
				<Label>Last Name</Label>
				<input {...register('lastName')} />
				<Error>{errors.lastName ? errors.lastName.message : ''}</Error>
				<Label>Email</Label>
				<input {...register('email')} />
				<Error>{errors.email ? errors.email.message : ''}</Error>
				<Label>Password</Label>
				<input {...register('password')} />
				<Error>{errors.password ? errors.password.message : ''}</Error>
				<input type="submit" />
			</form>
		</ContentDiv>
	);
};

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, {})(SignUp);
