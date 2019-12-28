import React, {useState} from 'react';
import PropTypes from 'prop-types';

const InputField = ({changeHandler, resetValue, values, showOptions, addOptions}) => {

    return(
    <div>
        <form>
        <label className="selected-area"></label>
        <div className="form-container input-group">
            <input type="text" name="q" value={values} className="form-control form-control-lg" id="form-input" onChange={changeHandler} aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                <button className="btn btn-secondary fas fa-check-circle" type="button" onClick={addOptions}></button>
                <button className="btn btn-secondary fas fa-times-circle" type="button" onClick={resetValue}></button>
                <button className="btn btn-secondary fas fa-angle-down" type="button" onClick={showOptions}></button>   
            </div>           
        </div>
        </form>
            <div className="options">
                <span>Default Text One</span>
                <span>Longer Default Text One</span>
                <span>Very Very Long Default Text One</span>
            </div>
    </div>
    )
}
export default InputField;
InputField.propTypes = {
    changeHandler: PropTypes.func,
    resetValue: PropTypes.func,
    values: PropTypes.string,
    showOptions: PropTypes.func,
    addOptions: PropTypes.func
}

