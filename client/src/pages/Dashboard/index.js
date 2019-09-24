import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { Container, Time } from './styles';
import { setDate } from 'date-fns/esm';

export default function Dashboard() {
  const [date, setDate] = useState(new Date);
  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );
  function handlePrevDay(){
    // reduz em um dia o valor date
    setDate(subDays(date, 1));
  }

  function handleAddDay(){
    // adiciona em um dia o valor date
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay} >
          <MdChevronLeft size={36} color="#fff"/>
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleAddDay} >
          <MdChevronRight size={36} color="#fff"/>
        </button>
      </header>
      <ul>
        <Time past>
          <strong>10</strong>
          <span>Teste</span>
        </Time>
        <Time available>
          <strong>10</strong>
          <span>Teste</span>
        </Time>
        <Time>
          <strong>10</strong>
          <span>Teste</span>
        </Time>
      </ul>
    </Container>
  );
}
