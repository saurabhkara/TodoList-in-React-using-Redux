import './App.css';
import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {addTodo} from './action/index';
import {deleteTodo} from './action/index';
import {removeTodo} from './action/index';



function App() {
  const[inputData, setInputData]=useState('');
  const dispatch =useDispatch();
  const listData = useSelector(state => state.todoReducers.list)

  // console.log(listData);


  return (
    <div className="main-div">
        <div className="child-div">
          <figure> 
          <figcaption style={{color:'white'}}>Add Your List Here</figcaption>
          </figure>
          <div className='addItems'>
            <input type='text' placeholder='Write' 
                value={inputData} onChange={(event)=>setInputData(event.target.value)}
            />
            <i className='fa fa-plus add-btn' onClick={()=>(dispatch(addTodo(inputData)),setInputData(''))}></i>
          </div>
          {listData.map((item)=>(
            <div className='showItems' key={item.id}>
            <div className='eachItem'>
              <h3>{item.data}</h3>
              <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={()=>(dispatch(deleteTodo(item.id)))}></i>
            </div>
           
          </div>

          ))}

           <div className='showItems'>
              <button className='btn effect04' data-sm-link-text='Remove All' 
                  onClick={()=>dispatch(removeTodo())}>
                <span>Check List</span>
              </button>
            </div>
        </div>
    </div>
  );
}

export default App;
