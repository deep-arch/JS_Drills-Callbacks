# Callbacks

This project is for getting solutions of particular problems using **`callbacks`** and **`setTimeout`** methods.

## Installations
---

### 1. Install git

**`For Linux`** <https://git-scm.com/downloads>

**`For Windows`** <https://gitforwindows.org/>


### 2. Install Node

<https://nodejs.org/en/download/>

### 3. Install VSCode

<https://code.visualstudio.com/download>



### 4. Clone the repository :

```
git clone https://github.com/deep-arch/JS_Drills-Callbacks.git
```

### 5. Go to the working directory

```sh
cd JS_Drills-Callbacks
```

### 6. Install npm

```sh
npm install
```

### Run the functions :

```
npm run start1
npm run start2
npm run start3
npm run start4
npm run start5
npm run start6
```
---
## Constraint
```
Each function that you write must take at least 2s to execute using the setTimeout function like so:

	function() {
		setTimeout(() => {
			// Your code here
		}, 2 * 1000);
	}
```
---
## Problems

```
Problem 1 : Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.

Problem 2 : Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.

Problem 3 : Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.

Problem 4 : Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously

Problem 5 : Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously

Problem 6 : Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
```
