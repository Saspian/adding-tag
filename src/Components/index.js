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
    const createOptions = (option) => {
        var newOptions = document.createElement('span');
        newOptions.className = 'selectedOptions';
        newOptions.appendChild(document.createTextNode(option));
        document.querySelector('.selected-area').appendChild(newOptions);
        var del = document.createElement('i');
        del.className='delete fas fa-times selected';
        del.appendChild(document.createTextNode(''));
        newOptions.appendChild(del);
        setValues({...values, q : ''});
    }

    useEffect(()=>{
        values.q==='' ? showWhenEmpty() : showWhenOptionTyped() 
    })
    useEffect(()=>{
        document.querySelectorAll('span').forEach(options => {
            options.addEventListener('click',()=>{
                setValues({...values, q : options.textContent});
                createOptions(options.textContent);
            })
        })
        document.querySelector('.selected-area').addEventListener('click',(e)=>{
            if(e.target.classList.contains('delete')){
                var remove = e.target.parentElement;
                document.querySelector('.selected-area').removeChild(remove);
            }
        })
    },[])
    const showOptions = e => {
        document.querySelector('.options').classList.toggle('show-options');
    }
    const changeHandler = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
        showWhenOptionTyped();
    }
    const clearOptions = e => {
        setValues({...values, q : ''});
        if(values.q==='') showWhenEmpty();
    }
    const addOptions = () => {
        createOptions(values.q);
    }
    console.log(values,"@@");
    return (
        <div className="box">
            <Inputfield changeHandler={changeHandler} resetValue={clearOptions} values={values.q} showOptions={showOptions} addOptions={addOptions}/>
        </div>
    )
}

export default Form;
