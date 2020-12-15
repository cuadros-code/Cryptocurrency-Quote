import React from 'react'
import Loader from 'react-loader-spinner';
import styled from '@emotion/styled';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Div = styled.div`
    margin-left: 40px;
    margin-top: 140px;
    height: 50vh;
    width: 40vw;
    background-color: #38BDD0;
    border-radius: 15px;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
    color: #FFF;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    padding: 5px;
    font-size: 1.2rem;
`
const DivSpinner = styled.div`
    margin-left: 40px;
    margin-top: 140px;
    height: 50vh;
    text-align: center;
    width: 40vw;
    background-color: transparent;
`


export const ShowResult = ({ dataResult, showSpinner }) => {


    return (
        <div>
            {
                showSpinner
                    ?
                    <DivSpinner>
                    <Loader
                        type="Grid"
                        color="#FFF"
                        height={100}
                        width={100}
                        
                    />
                    </DivSpinner>
                    :
                    <Div> 
                        <h2>The price is : {dataResult.PRICE}</h2>
                        <h3>The highest price of the day: {dataResult.HIGHDAY} </h3>
                        <h3>The lowest price of the day: {dataResult.LOWDAY} </h3>
                        <h3>Change last 24 hours: {dataResult.CHANGE24HOUR} </h3>
                        <h3>Last update: {dataResult.LASTUPDATE} </h3>
                     </Div>

            }



        </div>
    )
}
