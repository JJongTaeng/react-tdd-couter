import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  // screen object를 이용해서 원하는 엘리먼트에 접근(접근할 때 ID로)
  const counterElement = screen.getByTestId('counter');
  // id가 counter인 엘리먼트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent('0');
});

test('minus button has correct text', () => {
  // App 컴포넌트 렌더링
  render(<App />);

  // screen object를 이용해서 원하는 엘리먼트에 접근(접근할 때 ID로)
  const minusButtonElement = screen.getByTestId('minus-button');

  // id가 minus-button 인 element의 textContent 값이 - 인지 확인
  expect(minusButtonElement).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  // App 컴포넌트 렌더링
  render(<App />);

  // screen object를 이용해서 원하는 엘리먼트에 접근(접근할 때 ID로)
  const plusButtonElement = screen.getByTestId('plus-button');

  // id가 plus-button 인 element의 textContent 값이 + 인지 확인
  expect(plusButtonElement).toHaveTextContent('+');
});

test('when the + button is pressed, the counter changes to 1', () => {
  render(<App/>);
  const plusButtonElement = screen.getByTestId('plus-button');
  const counterElement = screen.getByTestId('counter');
  fireEvent.click(plusButtonElement);

  expect(counterElement).toHaveTextContent('1');

});

test('when the - button is pressed, the counter changes to -1', () => {
  render(<App/>);
  const minusButtonElement = screen.getByTestId('minus-button');
  const counterElement = screen.getByTestId('counter');
  fireEvent.click(minusButtonElement);

  expect(counterElement).toHaveTextContent('-1');

});

test('on/off button has blue color', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('on/off-button');

  expect(buttonElement).toHaveStyle({backgroundColor: 'blue'});
})

test('Prevent the -, + button from being pressed when the on/off button is clicked', () => {
  render(<App />);

  const onOffButtonElement = screen.getByTestId('on/off-button');
  fireEvent.click(onOffButtonElement);

  const plusButtonElement = screen.getByTestId('plus-button');
  const minusButtonElement = screen.getByTestId('minus-button');

  expect(plusButtonElement).toBeDisabled();
  expect(minusButtonElement).toBeDisabled();
});