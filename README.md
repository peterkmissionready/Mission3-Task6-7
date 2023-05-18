1. Drag and drop index.js and test.js to a folder of your choice from the downloaded zip file.
The rest of the steps assume you have NodeJS installed.

2. Type
`npm init -y` on the current directory, where you the index.js and test.js is located.

3. Type
`npm install express cors lodash uuid` on terminal.
This should install 4 packages required to host localhost:3000/ on the server, the answer to Task 7.

4. Type 
`npm install supertest mocha chai --save-dev` on terminal.
This should install SuperTest, Mocha and Chai required to perform unit testing on local server running at http://localhost:3000/risk, the answer to Task 6.

5. Edit package.json (which was created after you first typed `npm install...` so that the "scripts" variable
will look like the following:

...
"scripts": {
	"start": "node index.js",
	"test": "mocha"
},
...
