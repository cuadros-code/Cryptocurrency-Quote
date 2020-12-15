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

export const useCoin = (COINS) => {

    const [coin, setCoin] = useState('');

    const handleChange = ( e ) => {
        setCoin( e.target.value );
    } 

    const Select = () => {

        return (
            <>
                <Label>Select currency</Label>
                <SelectOption 
                    onChange={ handleChange }
                    value={ coin }
                >
                    <option value="" disabled >Please select</option>

                    {
                        COINS.map(coin => (
                            <option value={coin.code} key={coin.code} >{coin.name}</option>
                        ))
                    }
                </SelectOption>
            </>
        )
    }

    return [coin, setCoin, Select];
}
