import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Form } from './components/Form';
import image from './image/cryto.svg';
import { ShowResult } from './components/ShowResult';

const Div = styled.div`
max-width:900px;
margin: 0 auto;
@media (min-width:992px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap:2rem;
}
`

const Image = styled.img`
max-width:100%;
margin-top:5rem;
`

const Heading = styled.h1`
font-family: 'Bebas Neue', cursive;
color: #FFF;
text-align:left;
font-weight:700;
font-size:50px;
margin-left: 30px;
margin-bottom:50px;
margin-top:80px;

&::after{
  content: '';
  width:380px;
  height:6px;
  background-color:#66A2FE;
  display: block;
}
`

function App() {

  const [showResult, setShowResult] = useState(false);

  const [showSpinner, setShowSpinner] = useState(false);

  const [dataResult, setDataResult] = useState({});

  const [readyCoins, setReadyCoins] = useState({
    coin: '',
    crypto: '',
    ready: false
  }
  );

  useEffect(() => {

    if (!readyCoins.ready) return;
    setShowSpinner(true);
    const consultAPI = async () => {

      const URL_API = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${readyCoins.crypto}&tsyms=${readyCoins.coin}`;

      const { data: { DISPLAY: { [readyCoins.crypto]: { [readyCoins.coin]: data } } } } = await axios.get(URL_API);

      setDataResult(data);
      setShowResult(true);
      setShowSpinner(false);


    }

    consultAPI();

  }, [readyCoins])

  return (
    <Div>
      <div>
        <Heading>
          Cryptocurrency Quote
        </Heading>

        <Form setReadyCoins={setReadyCoins} />

      </div>

      <div>
        {
          showResult
            ?
            < ShowResult dataResult={dataResult} showSpinner={showSpinner} />
            :
            <Image
              src={image}
              alt="imagen cryto"
            />
        }


      </div>
    </Div>
  );
}

export default App;
