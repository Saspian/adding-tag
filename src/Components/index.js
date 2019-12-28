import React, {useState, useEffect} from 'react';
import Inputfield from './InputField';

const Form = () => {

    const [values, setValues] = useState({
        q: ''
    });

    const showWhenOptionTyped = () => {
        document.querySelector('.fa-times-circle').style.display = "block";
        document.querySelector('.fa-angle-down').style.display = "none";
        document.querySelector('.fa-check-circle').style.display = "block";
    }
    const showWhenEmpty = () => {
        document.querySelector('.fa-angle-down').style.display = "block";
        document.querySelector('.fa-times-circle').style.display = "none";
        document.querySelector('.fa-check-circle').style.display = "none";
    }

    useEffect(()=>{
        if(values.q==='') {
            showWhenEmpty();
        }else{
           showWhenOptionTyped();
        }
        document.querySelectorAll('span').forEach(options => {
            options.addEventListener('click',()=>{
                setValues({...values, q : options.textContent});
            })
        })
    })

    const showOptions = e => {
        document.querySelector('.options').classList.toggle('show-options');
    }
    const changeHandler = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
        showWhenOptionTyped();
    }
    const clearOptions = e => {
        setValues({...values, q : ''});
        if(values.q==='') {
            showWhenEmpty();
        }
    }
    const addOptions = () => {
        var newOptions = document.createElement('span');
        newOptions.className = 'selectedOptions';
        newOptions.appendChild(document.createTextNode(values.q));
        
        document.querySelector('.selected-area').appendChild(newOptions);

        var del = document.createElement('i');
        del.className='fas fa-times selected';
        del.appendChild(document.createTextNode(''));

        newOptions.appendChild(del);
    }
    console.log(values,"@@");

    return (
        <div className="box">
            <Inputfield changeHandler={changeHandler} resetValue={clearOptions} values={values.q} showOptions={showOptions} addOptions={addOptions}/>
        </div>
    )
}

export default Form;
