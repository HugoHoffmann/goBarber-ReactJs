import React from 'react';
import api from '~/services/api';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button" >
          <MdChevronLeft size={36} color="#fff"/>
        </button>
        <strong>31 de maio</strong>
        <button type="button" >
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
