import React from 'react';
import { BCreate } from './styled';
import { MdNotifications } from 'react-icons/md';
import DracoRange from '../../assets/draco-ranger.png';

export const CreateAcount = () => {
  return (
    <>
      <BCreate.section>
        <BCreate.title>
          <BCreate.h1>Criar uma Conta</BCreate.h1>
        </BCreate.title>
        <BCreate.imgContainer>
          <BCreate.img src={DracoRange} />
          <BCreate.link to="/register">
            Cadastrar <MdNotifications />
          </BCreate.link>
        </BCreate.imgContainer>
        <BCreate.text>
          Ansioso para viver novas aventuras? Criar uma conta é rápido e fácil, para que você possa embarcar nesta jornada o mais rápido possível.
          Basta fornecer um e-mail válido, seu nome e um nome de aventureiro, não se esqueça da senha e PRONTO! Tavernas, dragões e muito mais
          aguardam por você.
        </BCreate.text>
      </BCreate.section>
    </>
  );
};
