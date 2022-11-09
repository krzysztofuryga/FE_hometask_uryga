# FE_hometask_uryga

### Step 1 : Cloning repositry

Please clone github repositry using: git clone git@github.com:krzysztofuryga/FE_hometask_uryga.git

### Step 2: check the project sctructure

Check the project structure and the set up:

- package.json file with dependencies
- js folder with files
- tests folder with file
- .gitignore file

### Step 3: build the project locally

First of all you need to open the terminal and navigate to the project root.
**Once the path is correct, run the `yarn` command in order to set up all project dependencies**
After the installation, the project has to be started to start the local testing

### Step 4: the jest installation and run tests

Use: yarn add --dev jest

Add the following section to your package.json:

{
"scripts": {
"test": "jest"
}
}

Finally, run yarn test

Expected results in the terminal:
$ jest
console.log
The perimeter of a rectangle is 50 and the area is 150

      at log (js/rectangle.js:12:20)

console.log
The perimeter of a rectangle is 50 and the area is 150

      at Object.log (tests/rectangle.test.js:15:31)

PASS tests/rectangle.test.js
√ should output rectangle perimeter (9 ms)
√ should generate a rectangle area (1 ms)
√ should generate a rectangle info (108 ms)

Test Suites: 1 passed, 1 total
Tests: 3 passed, 3 total
Snapshots: 0 total
Time: 4.105 s
Ran all test suites.
