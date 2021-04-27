import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { signIn } from '@actions';
import ContentDiv from '@shared/ContentDiv';
import { Label, Input, Form, Error, SubmitButton } from './styles';

const schema = yup.object().shape({
	email    : yup
		.string()
		.required('Email is required')
		.email('Email is invalid'),
	password : yup.string().required('Password is required')
});

const SignIn = (props) => {
	const formOptions = { resolver: yupResolver(schema) };
	const { register, handleSubmit, watch, formState: { errors } } = useForm(
		formOptions
	);

	const onSubmit = (formData) => {
		console.log('submit: ', formData);
		props.signIn(formData);
	};

	return (
		<ContentDiv>
			<Form onSubmit={handleSubmit(onSubmit)}>
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

export default connect(mapStateToProps, { signIn })(SignIn);
