import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/img/logo2.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
        <Content>
            <nav>
                <img src={logo} alt="Logo roxa"/>
                <Link to="/dashboard">DASHBOARD</Link>
            </nav>
            <aside>
                <Profile>
                    <div>
                        <strong>
                            Hugo Hoffmann
                        </strong>
                        <Link to="/profile">
                            Meu perfil
                        </Link>
                    </div>
                    <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="" />
                </Profile>
            </aside>
        </Content>
    </Container>
  );
}
