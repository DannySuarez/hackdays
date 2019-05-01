const test = QUnit.test;

function flipCoin(number) {
     if(number < 0.5) {
         return 'heads';
     } return 'tails';
}

test ('return heads if number is less than .5', assert => {
     //arrange
     const number = .4;
     const expected = 'heads';
     //act
     const actual = flipCoin(number);
     //assert 
     assert.equal(expected, actual);

});

test ('return tails if number is greater than or equal to  .5>', assert => {
     //arrange
     const number = .5;
     const expected = 'tails';
     //act
     const actual = flipCoin(number);
     //assert
     assert.equal(expected, actual);
})

function addFunction() {
    return 9;
}

test('create a function that takes two numbers and returns their sum', assert => {

    //Arrange
    const numOne = 4;
    const numTwo = 5;
    const expected = numOne + numTwo;
    //Act
    const actual = addFunction();
    //Assert 
    assert.equal(expected, actual);
});

function subFunction() {
    return 8;

}

test('create a function that takes two numbers and returns their difference', assert => {

    //arrange
    const numOne = 10;
    const numTwo = 2;
    const expected = numOne - numTwo;
    //act
    const actual = subFunction();
    //assert
    assert.equal(expected, actual);
});

function multFunction() {
    return 100;
}

test('create a function that multiplies two numbers', assert => {
    //arrange
    const numOne = 10;
    const numTwo = 10;
    const result = numOne * numTwo;

    //act
    const expected = multFunction();

    //assert
    assert.equal(expected, result);

});

function allNumbers(car) {
    let newArray = '';
    
    for(let i = 0; i < car.length; i++) {
        newArray += car[i];
    }

    return newArray;
}

// array.join *look up for formating*
test('create a function that takes an array of numbers and loops thorugh that array and returns a string of all of the numbers ', assert => {

    //arange
    const myArray = [1, 2, 3, 4];
    const expected = '1234';
    //act
    const result = allNumbers(myArray);

    //assert
    assert.equal(expected, result);

});