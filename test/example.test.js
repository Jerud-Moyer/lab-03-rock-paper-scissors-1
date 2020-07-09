// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { checkResults } from '../get-random-throw.js';

const test = QUnit.test;

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