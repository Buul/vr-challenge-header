import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeDefault } from 'vr-challenge-ds';

import * as Styled from './ButtonMenu.styled';
import { ButtonMenuProps } from './ButtonMenu.types';

export const ButtonMenu: FC<ButtonMenuProps> = ({ onClick }) => (
  <ThemeProvider theme={ThemeDefault}>
    <Styled.Button type="button" onClick={onClick}>
      <svg
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.18967 6.88309C1.25097 5.96383 2.01447 5.25 2.93601 5.25H15.064C15.9856 5.25 16.7491 5.96384 16.8103 6.88311L17.6063 18.8171C17.6063 18.8171 17.6063 18.8171 17.6063 18.8171C17.7122 20.4041 16.4527 21.75 14.862 21.75H3.13801C1.54733 21.75 0.287785 20.4042 0.393671 18.8171M0.393671 18.8171L1.18967 6.88309C1.18967 6.88309 1.18967 6.88308 1.18967 6.88309M2.93601 6.75C2.80356 6.75 2.69506 6.85216 2.68635 6.98289L1.89035 18.9169C1.84224 19.6378 2.41469 20.25 3.13801 20.25H14.862C15.5853 20.25 16.1578 19.6378 16.1097 18.9169L15.3137 6.98291C15.305 6.85218 15.1965 6.75 15.064 6.75H2.93601Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.25 4C5.25 1.92879 6.92879 0.25 9 0.25H9.001C11.0722 0.25 12.751 1.92879 12.751 4V8C12.751 8.41421 12.4152 8.75 12.001 8.75C11.5868 8.75 11.251 8.41421 11.251 8V4C11.251 2.75721 10.2438 1.75 9.001 1.75H9C7.75721 1.75 6.75 2.75721 6.75 4V8C6.75 8.41421 6.41421 8.75 6 8.75C5.58579 8.75 5.25 8.41421 5.25 8V4Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 10.25C7.41421 10.25 7.75 10.5858 7.75 11V12C7.75 12.4142 7.41421 12.75 7 12.75C6.58579 12.75 6.25 12.4142 6.25 12V11C6.25 10.5858 6.58579 10.25 7 10.25Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 10.25C11.4142 10.25 11.75 10.5858 11.75 11V12C11.75 12.4142 11.4142 12.75 11 12.75C10.5858 12.75 10.25 12.4142 10.25 12V11C10.25 10.5858 10.5858 10.25 11 10.25Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.02991 15.1572C6.02991 15.1572 6.02991 15.1572 6.02991 15.1572L6.02989 15.1572L6.02952 15.1569L6.02883 15.1562L6.02779 15.1551C6.02725 15.1546 6.02701 15.1544 6.02708 15.1544L6.0273 15.1546C6.02816 15.1555 6.02903 15.1564 6.02989 15.1572C6.0299 15.1572 6.0299 15.1572 6.02991 15.1572ZM6.0273 15.1546L6.03107 15.1582C6.03613 15.163 6.04593 15.1722 6.06038 15.1851C6.0893 15.211 6.1366 15.2516 6.20138 15.3023C6.33128 15.404 6.52933 15.5442 6.78856 15.6855C7.30725 15.9684 8.05929 16.25 9 16.25C9.94017 16.25 10.6922 15.9684 11.2111 15.6855C11.4704 15.5441 11.6686 15.4039 11.7986 15.3022C11.8635 15.2515 11.9108 15.2108 11.9398 15.1849C11.9542 15.172 11.964 15.1629 11.9691 15.1581L11.9729 15.1545C12.2661 14.8647 12.7388 14.8659 13.0305 15.1579C13.3233 15.4509 13.3231 15.9257 13.0301 16.2185L12.5 15.688C13.0301 16.2185 13.0299 16.2187 13.0297 16.219L13.0292 16.2194L13.0282 16.2205L13.0257 16.2229L13.0192 16.2293L13.0003 16.2474C12.9851 16.2618 12.9646 16.2808 12.9389 16.3038C12.8875 16.3497 12.8152 16.4115 12.7227 16.4838C12.5382 16.6281 12.2714 16.8159 11.9291 17.0025C11.2448 17.3756 10.2468 17.75 9 17.75C7.75271 17.75 6.75475 17.3756 6.07044 17.0025C5.72817 16.8158 5.46147 16.628 5.27699 16.4836C5.18459 16.4113 5.11229 16.3495 5.06092 16.3036C5.03522 16.2807 5.0147 16.2616 4.99947 16.2472L4.98058 16.2291L4.97413 16.2227L4.97165 16.2203L4.9706 16.2192L4.97012 16.2188C4.96989 16.2185 4.96967 16.2183 5.5 15.688L4.96967 16.2183C4.67678 15.9254 4.67678 15.4506 4.96967 15.1577C5.26156 14.8658 5.73417 14.8648 6.0273 15.1546Z"
          fill="white"
        />
      </svg>
    </Styled.Button>
  </ThemeProvider>
);
