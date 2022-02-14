subDisplayText = ''; 
  mainDisplayText = '';
  operand1: number;
  operand2: number;
  operator = '';





pressKey(key: string) {
  if (key === '/' || key === 'x' || key === '-' || key === '+') {
    const lastKey = this.mainDisplayText[this.mainDisplayText.length - 1];
    if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+') {
      this.operatorSet = true;
    }
    if ((this.operatorSet) || (this.mainDisplayText === '')) {
      return;
    }
    this.operand1 = parseFloat(this.mainDisplayText);
    this.operator = key;
    this.operatorSet = true;
  }
  if (this.mainDisplayText.length === 10) {
    return;
  }
  this.mainDisplayText += key;
}