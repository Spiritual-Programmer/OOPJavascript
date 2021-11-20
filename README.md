# OOPJavascript with Unit Testing

Javascript OOP is an application that takes multiple books as input and outputs the oldest book from the author with the most number of books. This project dives into how to effectivily use classes in Javascript to solve a specfic problem while using modern Javascript techniques following test driven development. The code is written using functional Javascript where the approach is to use pure functions that do not have any side-effects and are deterministic.

Each task and function is also well tested using Jest and have passed all given tests.

## Examples

#### Example 1

**Input:**

Carrie,06/13/1982,Steven King,762

The Stand,01/01/1984,Steven King,1200

The Hunger Games,11/12/2013,Suzanne Collins,600

The Jungle Book,03/21/1898,Rudyard Kipling,483

Kim,02/03/1910,Rudyard Kipling,526

I Robot,08/11/1945,Isaac Asimov,474

Firestarter,04/01/1982,Steven King,597

**Output:**

Firestarter, written by Horror writer Steven King on 04/01/1982 is 597 pages long.

#### Example 2:

**Input:**

Carrie,06/13/1982,Steven King,762

I Robot,08/29/1945,Isaac Asimov,474

The Jungle Book,09/17/1900,Rudyard Kipling,483

Kim,02/03/1910,Rudyard Kipling,526

Mockingjay,08/09/2014,Suzanne Collins,642

**Output:**

The Jungle Book, written by Adventure writer Rudyard Kipling on 09/17/1900 is 483 pages long.

## Getting Started

### Installation

1. Clone the repo into your desired location using `git clone https://github.com/Spiritual-Programmer/OOPJavascript.git`

### How to run the project

1. Run `node script.js` command to run the project

### How to test the project

1. Run `npm test` command to test with jest
2. To see a visual representation of the tests, run the index.html file in your browser located at ./coverage/Icov-report/index.html
