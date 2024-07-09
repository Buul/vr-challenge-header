import { render } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import { ThemeDefault } from 'vr-challenge-ds';

import Header from './Header';
import { HeaderProps } from './Header.types';

const builder = (
  props: HeaderProps = { onClickMenu: () => {} }
): HeaderProps => ({
  ...props,
});

const setup = (props = { headerProps: builder() }) => {
  const { headerProps } = props;
  const onClick = vi.fn();

  const renderResult = render(
    <Header {...headerProps} onClickMenu={onClick} />
  );
  const headerElement = renderResult.getByTestId('header');

  return {
    headerElement,
    headerProps,
    onClick,
    ...renderResult,
  };
};

describe('Header', () => {
  test('should render Header', async () => {
    const { headerElement, container } = setup({
      headerProps: { onClickMenu: () => {} },
    });

    expect(headerElement).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle({
      backgroundColor: ThemeDefault.colors.primary,
    });
    expect(container.firstChild).toHaveStyle({
      height: '64px',
    });
    expect(container.firstChild).toHaveStyle({
      width: '100%',
    });
  });
});
