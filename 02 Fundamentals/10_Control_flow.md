Control flow
The control flow is the order in which the computer executes statements in a script.
Code is run in order from the first line in the file to the last line, unless the computer runs across
the
structures that change the control flow, such as conditionals and loops.
For example, imagine a script used to validate user data from a webpage form. The script submits validated data, but if the user, say, leaves a required field empty, the script prompts them to fill it in. To do this, the script uses a conditional structure or if...else , so that different code executes depending on whether the form is complete or not:
if ( isEmpty ( field ) ) { promptUser ( ) ; } else { submitForm ( ) ; }
Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution.
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
if...else
The if...else statement executes a statement if a specified condition is truthy . If the condition is falsy , another statement in the optional else clause will be executed.
if ( condition ) statement1 // With an else clause if ( condition ) statement1 else statement2
condition An expression that is considered to be either truthy or falsy .
statement1 Statement that is executed if condition is truthy . Can be any statement, including further nested if statements. To execute multiple statements, use a block statement ( { /_ ... _/ } ) to group those statements. To execute no statements, use an empty statement.
statement2 Statement that is executed if condition is falsy and the else clause exists. Can be any statement, including block statements and further nested if statements.
Multiple if...else statements can be nested to create an else if clause. Note that there is no elseif (in one word) keyword in JavaScript.
if ( condition1 ) statement1 else if ( condition2 ) statement2 else if ( condition3 ) statement3 // … else statementN

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
