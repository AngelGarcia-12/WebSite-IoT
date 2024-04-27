import React from 'react'
import './IoTStyle.css';

export const IoTPage = () => {
  return (
    <>
        <div id='main'>
            <h2>LED Control</h2>
            <form id='F1' action='LEDON'>
            <input className='button' type='submit' value='LED ON' />
            </form>
            <br/>
            <form id='F2' action='LEDOFF'>
            <input className='button' type='submit' value='LED OFF' />
            </form>
            <br/>
        </div>
    </>
  )
}
