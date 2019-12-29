import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// FOR EVENT HANDELING
window.addEventListener('click',(e)=>{
    if((document.querySelector('#form-input').contains(e.target)) || (document.querySelector('.fa-angle-down').contains(e.target))){
        if(!document.querySelector('.options').classList.contains('show-options')) {
            document.querySelector('.options').classList.add('show-options');
        }
    }
    else{
        if(document.querySelector('.options').classList.contains('show-options')) {
            document.querySelector('.options').classList.remove('show-options');
        }
    }
})
serviceWorker.unregister();
