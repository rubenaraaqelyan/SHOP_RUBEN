import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { renderField } from "./formControl";
import {
    alphaNumeric,
    aol,
    email,
    maxLength15,
    minLength2,
    required,
} from "./formValidate";


const FieldLevelValidationForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit} className={"shadow-lg"}>
            <div className="form-group">
                <Field
                    name="password"
                    type="password"
                    component={renderField}
                    label="Password"
                    validate={[required, maxLength15, minLength2]}
                    warn={alphaNumeric}
                />
            </div>
            <div className="form-group">
                <Field
                    name="email"
                    type="email"
                    component={renderField}
                    label="Email"
                    validate={email}
                    warn={aol}
                />
            </div>
            <div className={'wall'}>
                <a href="/password/forgot">Forgot Password?</a>
                <a href="/register" className="float-right">New User?</a>
            </div>
            <div className={'fresh'}>
                <button type="submit" disabled={submitting} className={'btn'}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset} className={'btn btn7'}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'fieldLevelValidation'
})(FieldLevelValidationForm)
