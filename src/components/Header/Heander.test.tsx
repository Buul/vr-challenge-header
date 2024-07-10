import { render } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import { ThemeDefault } from 'vr-challenge-ds';

import Header from './Header';

const setup = () => {
  const onClick = vi.fn();

  const renderResult = render(<Header />);
  const headerElement = renderResult.getByTestId('header');

  return {
    headerElement,
    onClick,
    ...renderResult,
  };
};

describe('Header', () => {
  test('should render Header', async () => {
    const { headerElement, container } = setup();

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
