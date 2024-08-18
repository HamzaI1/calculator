describe('Calculator', () => {
  let container;

  beforeEach(() => {
    // Create a container for the mock HTML
    container = document.createElement('div');
    container.innerHTML = `
      <div class="calculator">
    <div class="screen js-screen">
    </div>
    <div class="calc-column">
      <div class="button js-number">7</div>
      <div class="button js-number">8</div>
      <div class="button js-number">9</div>
      <div class="button operator js-operator">&#247;</div>
    </div>
    <div class="calc-column">
      <div class="button js-number">4</div>
      <div class="button js-number">5</div>
      <div class="button js-number">6</div>
      <div class="button operator js-operator">&#215;</div>
    </div>
    <div class="calc-column">
      <div class="button js-number">1</div>
      <div class="button js-number">2</div>
      <div class="button js-number">3</div>
      <div class="button operator js-operator">&#8722;</div>
    </div>
    <div class="calc-column">
      <div class="button js-number">0</div>
      <div class="button point js-number">&#46;</div>
      <div class="button operator js-calculate">&#61;</div>
      <div class="button operator js-operator">&#43;</div>
    </div>
    <div class="clear js-clear">Clear</div>
  </div>
    `;
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Remove the container after each test
    document.body.removeChild(container);
  });

  describe('evaluate function', () => {
    it('should correctly add two numbers', () => {
      const result = evaluate('3', '5', '+');
      expect(result).toBe(8);
    });

    it('should correctly subtract two numbers', () => {
      const result = evaluate('10', '4', '−');
      expect(result).toBe(6);
    });

    it('should correctly multiply two numbers', () => {
      const result = evaluate('2', '3', '×');
      expect(result).toBe(6);
    });

    it('should correctly divide two numbers', () => {
      const result = evaluate('9', '3', '÷');
      expect(result).toBe(3);
    });

    it('should return an error message when dividing by zero', () => {
      const result = evaluate('10', '0', '÷');
      expect(result).toBe('Error: division by zero.');
    });
  });
});
