import { fireEvent, render } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import { ThemeDefault } from 'vr-challenge-ds';

import { ButtonMenu } from './ButtonMenu';
import { ButtonMenuProps } from './ButtonMenu.types';

const builder = (
  props: ButtonMenuProps = { onClick: () => {} }
): ButtonMenuProps => ({
  ...props,
});

const setup = (props = { buttonMenuProps: builder() }) => {
  const { buttonMenuProps } = props;
  const onClick = vi.fn();

  const renderResult = render(
    <ButtonMenu {...buttonMenuProps} onClick={onClick} />
  );
  const buttonElement = renderResult.getByRole('button');

  return {
    buttonElement,
    buttonMenuProps,
    onClick,
    ...renderResult,
  };
};

describe('ButtonMenu', () => {
  test('should render ButtonMenu', async () => {
    const { buttonElement, container } = setup({
      buttonMenuProps: { onClick: () => {} },
    });

    expect(buttonElement).toBeInTheDocument();
    expect(container.firstChild).toHaveProperty('type', 'button');
    expect(container.firstChild).toHaveStyle({
      backgroundColor: ThemeDefault.colors.text,
    });
  });

  test('should call onClick when the button is clicked', () => {
    const { buttonElement, onClick } = setup({
      buttonMenuProps: { onClick: () => {} },
    });

    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
