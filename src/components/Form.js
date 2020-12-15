import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { useCoin } from '../hooks/useCoin';
import { useCryptoCoin } from '../hooks/useCryptoCoin';
import { COINS } from '../data/coins';

const Button = styled.input`
    margin-top: 20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color: #66a2fe;
    border:none;
    width:100%;
    border-radius:10px;
    color: #fff;
    transition: background-color 0.3 ease-in;

    &:hover{
        background-color: #326AC0;
        cursor:pointer;
    }
`

const DivError = styled.div`
    height: 30px;
    width: auto;
    font-family: 'Bebas Neue', cursive;
    font-weight: bold;
    font-size: 1.3rem;
    color: #FFF;
    background-color: red;
    border-radius: 15px;
    text-align:center;
    padding: 8px;


`


export const Form = ({ setReadyCoins }) => {

    const [ErrorUI, setErrorUI] = useState(false);

    const [listCrypto, setListCrypto] = useState([]);

    //Component Select Coin
    const [coin, , Select] = useCoin(COINS);

    // Component Select top Crypto
    const [crypto, , SelectCrypto] = useCryptoCoin(listCrypto);


    // Call API TOP LIST 
    useEffect(() => {

        const consultAPI = async () => {
            const URL_API = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const { data: { Data } } = await axios.get(URL_API);
            setListCrypto(Data);
        }

        consultAPI();

    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

        if (coin.trim() === '' || crypto.trim() === '') {
            setErrorUI(true);

        } else {
            setErrorUI(false);
            setReadyCoins({
                coin,
                crypto,
                ready: true
            })
        }

    }

    return (
        <form onSubmit={handleSubmit} >

            {
                ErrorUI && <DivError> Insert All Inputs </DivError>
            }

            <Select />

            <SelectCrypto />

            <Button
                type="submit"
                value="Submit"
            />
        </form>
    )
}
