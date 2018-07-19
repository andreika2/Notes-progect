// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import {creatStore, createStore} from 'redux';

function noteslist(state = [], action){
    if(action.type === 'Add_Notes'){
        return [
            ...state,
            action.title
        ]
    }
    return state;
}

const store = createStore(noteslist);



store.subscribe(()=>{
    console.log('Subscribe',store.getState()); 
})



const addNotebtn = document.querySelectorAll('.addNotes')[0];
addNotebtn.addEventListener('click', ()=>{

    const NotesName = document.querySelectorAll('.noteInput')[0].value;
    store.dispatch({type:'Add_Notes', title:NotesName});
    const list = document.querySelectorAll('.list')[0];
    list.innerHTML = '';
    document.querySelectorAll('.noteInput')[0].value = '';
    store.getState().forEach(notes => {
        const li = document.createElement('li');
        li.textContent = notes;
        list.appendChild(li);
        
    });

});