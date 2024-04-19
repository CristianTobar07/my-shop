export const handleKeyDown = (e: any) => {
  const key = e.key;

  if (
    key !== '0' &&
    key !== '1' &&
    key !== '2' &&
    key !== '3' &&
    key !== '4' &&
    key !== '5' &&
    key !== '6' &&
    key !== '7' &&
    key !== '8' &&
    key !== '9' &&
    key !== 'Backspace' &&
    key !== 'Delete' &&
    key !== 'ArrowRight' &&
    key !== 'ArrowLeft' &&
    key !== 'Tab'
  ) {
    e.preventDefault();
  }
};
