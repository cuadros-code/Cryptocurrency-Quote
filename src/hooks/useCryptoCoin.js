import React, { useState } from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
font-family: 'Bebas Neue', cursive;
color: #FFF;
font-weight: bold;
font-size: 2.4rem;
margin-top:2rem;
display: block;
`

const SelectOption = styled.select`
width: 100%;
padding: 0.7rem;
display: block;
--webkit-appearance: none;
border-radius: 10px;
font-size: 1rem;
border: none;
`


export const useCryptoCoin = ( listCrypto ) => {

    const [coin, setCoin] = useState('');

    const handleChange = ( e ) => {
        setCoin( e.target.value );
    } 

    const SelectCrypto = () => {

        return (
            <>
                <Label>Select CryptoCoin</Label>
                <SelectOption 
                    onChange={ handleChange }
                    value={ coin }
                >
                    <option value="" disabled >Please select</option>

                    {
                        listCrypto.map( coin => (
                            <option 
                                value={coin.CoinInfo.Name}
                                key={coin.CoinInfo.Id}
                            >
                                {coin.CoinInfo.FullName}
                            </option>
                        ))
                    }
                </SelectOption>
            </>
        )
    }

    return [coin, setCoin, SelectCrypto];
    


}
