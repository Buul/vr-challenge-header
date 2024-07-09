import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeDefault } from 'vr-challenge-ds';

import { ButtonMenu } from '../ButtonMenu/ButtonMenu';

import * as Styled from './Header.styled';
import { HeaderProps } from './Header.types';

const HeaderComponent: FC<HeaderProps> = ({ onClickMenu }) => (
  <ThemeProvider theme={ThemeDefault}>
    <Styled.Wrapper data-testid="header">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.92373 32H32V4.91945C32 3.61473 31.4817 2.36344 30.5591 1.44086C29.6365 0.51828 28.3853 0 27.0805 0H0V27.0763C0 28.3821 0.51875 29.6345 1.44213 30.5579C2.36551 31.4812 3.61788 32 4.92373 32ZM8.86614 24.4437H14.8779L19.1104 13.2949H20.6336C21.9605 13.2949 22.6048 13.6875 22.6048 14.6005C22.6048 15.5136 21.8112 16.0085 20.3691 16.0085C20.0471 16.0175 19.725 15.9903 19.4091 15.9275L21.7472 22.0715C22.3957 23.7099 23.4539 24.4736 25.1605 24.4736H29.0005C28.3051 23.7952 27.6736 22.9163 26.5984 20.0661C26.3433 19.34 26.0499 18.6279 25.7195 17.9328C26.4239 17.5718 27.0131 17.0208 27.4203 16.3421C27.8275 15.6634 28.0365 14.8842 28.0235 14.0928C28.0235 11.0805 26.0523 9.37387 22.4768 9.37387H15.2235L11.4645 19.7077H10.8032L9.13068 14.7712C9.01516 14.3059 8.73604 13.8976 8.34435 13.6211C7.95265 13.3445 7.47452 13.2182 6.99734 13.2651H2.96961L6.73281 22.9675C6.86185 23.4229 7.14527 23.8192 7.53449 24.0885C7.9237 24.3579 8.39449 24.4835 8.86614 24.4437Z"
          fill="white"
        />
      </svg>
      <ButtonMenu onClick={onClickMenu} />
    </Styled.Wrapper>
  </ThemeProvider>
);
export default HeaderComponent;
