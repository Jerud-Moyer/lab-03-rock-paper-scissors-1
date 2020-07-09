// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../get-random-throw.js';
import { checkResults } from '../check-results.js';


const test = QUnit.test;

test('it should call getRandomThrow, and return true if the output string is rock, paper or scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testThrow = getRandomThrow();
    let compareResult = null;

    if (testThrow === 'rock' || testThrow === 'paper' || testThrow === 'scissors') {
        compareResult = true;
    } else {
        compareResult = false;
    }
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = true;
    const actual = compareResult;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should call getRandomThrow, and return a type of string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testThrow = getRandomThrow();
    let compareResult = null;
    
    if (typeof(testThrow) === 'string') {
        compareResult = true;
    } else {
        compareResult = false;
    }
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = true;
    const actual = compareResult;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take two identical strings - rock and rock - and return draw for a tie', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerChoice = "rock";
    const computerChoice = "rock";

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = "draw";
    const actual = checkResults(playerChoice, computerChoice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take two identical strings - paper and paper - and return draw for a tie', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerChoice = "paper";
    const computerChoice = "paper";

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = "draw";
    const actual = checkResults(playerChoice, computerChoice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take two identical strings - scissors and scissors - and return draw for a tie', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerChoice = "scissors";
    const computerChoice = "scissors";

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = "draw";
    const actual = checkResults(playerChoice, computerChoice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take strings for rock and scissors, and return win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerChoice = "rock";
    const computerChoice = "scissors";

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = "win";
    const actual = checkResults(playerChoice, computerChoice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take strings for rock and paper, and return lose', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerChoice = "rock";
    const computerChoice = "paper";

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = "lose";
    const actual = checkResults(playerChoice, computerChoice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take strings for paper and rock, and return win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerChoice = "paper";
    const computerChoice = "rock";

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = "win";
    const actual = checkResults(playerChoice, computerChoice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take strings for paper and scissors, and return lose', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerChoice = "paper";
    const computerChoice = "scissors";

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = "lose";
    const actual = checkResults(playerChoice, computerChoice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take strings for scissors and rock, and return lose', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerChoice = "scissors";
    const computerChoice = "rock";

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = "lose";
    const actual = checkResults(playerChoice, computerChoice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take strings for scissors and paper, and return win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerChoice = "scissors";
    const computerChoice = "paper";

    //Act 
    // Call the function you're testing and set the result to a const
    const expected = "win";
    const actual = checkResults(playerChoice, computerChoice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});