# Haiku
 
  ### By Beverly Potts
 
## Description
 Get Started:
 
FIRST: [REMEMBER TO (1) CHANGE package.json PROJECT NAME AND DESCRIPTION TO CURRENT PROJECT NAME AND DESCRIPTION, (2) CHANGE TITLE OF HtmlWebpackPlugin IN webpack.config.js TO CURRENT PROJECT NAME, AND (3) CHANGE TITLE OF project-name.js IN SRC DIRECTORY TO NAME OF CURRENT PROJECT.]
 
SECOND:
  $ npm install
  $ npm install dotenv-webpack --save-dev
  $ git init
  $ git add .gitignore
  $ git commit -m "Activate .gitignore"
  $ npm run build
  $ git add .
  $ git commit -m "Initial global commit"
 
  $ npm run start (to initiate live server)
  
  [Description of program functionality & intent presented as an elevator pitch.]
 
## Languages & Technologies Used:
 
  ### Programming Languages & Libraries
  * Bootstrap
  * CSS
  * HTML
  * JavaScript
  * jQuery
  * Node
  * WebPack
 
  ### Operating Systems & Programs
  * Brave
  * Git Bash
  * Google Chrome
  * Microsoft Windows 10
  * Visual Studio Code
 
## Installation
 
  1.  Download a web browser, such as Apple Safari, Brave, Google Chrome, Microsoft Edge, Mozilla Firefox, or Yandex.
  2.  Navigate to https://github.com/BAPotts/haiku.git.
  3.  Click the green "Clone or download" button at the right of the screen.
  4.  Select "Download ZIP."
  5.  Use a file extractor or unzip program (such as PeaZip, Unzipper, WinZip, Zipware, or 7-ZIP) to extract the ZIP files onto your computer.
  6.  Open the directory containing the extracted files.
  7.  Open your computer's terminal and navigate to the directory bearing the name of the program and containing the top level subdirectories and files.
  8.  Enter the command "$ npm install" in the terminal and press "Enter".
  9.  Enter the command "$ npm run build" in the terminal and press "Enter".
  10. Enter the command "$ npm run start" in the terminal and press "Enter".
  11. The program should open and run with its user interface accessible in your default web browser.
 
## Specifications
 
  | Program Behavior | Example Behavior | Example Output |
  | ----------- | ----------- | ----------- |
  |Program will allow user to construct a one line poem |"This is line 1"  | poem.line1 !=null |
  |Program will allow user to construct a 3 line poem |"This is line 1", "This is line 2", "this is line 3"|poem.line1!=null, poem.line2!=null, poem.line3!=null|
  |Program will seperate sentence into words|"This is line 1"|poem.line1 === ["this", "is", "line", "1"]|
  |Program will subtract silent 'e' from end of words|"apple"|"appl"|
  |Program will identify vowels|"apple"|"vowel count === 2"|
  |Program will subtract one vowel from two vowel sequences|"mouth"|"moth"|
  
  
 
## Known Bugs
 
  * No known bugs at this time. 
 
### Contributors
 
  * Beverly Potts
 
### License
 
This website is licensed under the GNU General Public License GPLv3. (C) 2020 Beverly Potts. All rights reserved.