export const renderField = ({
                                input,
                                label,
                                type,
                                meta: {touched, error, warning}
                            }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}
                   className={`form-control ${error && touched ? 'input-error' : ''}`}/>
            {touched &&
            ((error && <span className={'error'}>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)