function processQuiz3e()
{
	var q1 = document.forms.quiz1.question1;
	var score = 0;
	
	if( q1[ 0 ].checked )
		{
			score = score + 1;
		}
	
	var q2 = document.forms.quiz1.question2;
	
	if( q2[ 1 ].checked )
		{
			score = score + 1;
		}
	var q3 = document.forms.quiz1.question3;
	
	if( q3[ 2 ].checked )
		{
			score = score + 1;
		}
	
	
	alert( "You got " + score + " correct!");
}

var totalScore;

function processQuizfinal()
{

	var q1 = document.forms.quiz2.question1;
	var score = 0;
	
	if( q1[ 2 ].checked )
		{
			score = score + 16.666666667;
		}
	
	var q2 = document.forms.quiz2.question2;
	
	if( q2[ 0 ].checked )
		{
			score = score + 16.666666667;
		}
	var q3 = document.forms.quiz2.question3;
	
	if( q3[ 1 ].checked )
		{
			score = score + 16.666666667;
		}

	var q4 = document.forms.quiz2.question4;

	if( q4[ 2 ].checked )
		{
			score = score + 16.666666667;
		}

	var q5 = document.forms.quiz2.question5;
	
	if( q5[ 1 ].checked )
		{
			score = score + 16.666666667;
		}

	var q6 = document.forms.quiz2.question6;
	
	if( q6[ 0 ].checked )
		{
			score = score + 16.666666667;
		}

	score = Math.round(score);

	
	if (score >= 83)
		{
			totalScore = "Your score is " + score + " you passed! Use link for your certificate.";
		}
	else
		{
			totalScore= "You missed 1 or more questions please try again.";
		}
	parent.reportScores( score, totalScore );
	//alert( "You got " + score + " correct!");
}

/*function gradeQuiz()
{
	var score = 93;
	
	/* 	some code goes here to grade the quiz
      	and to assign a whole number between 0 
			and 100 to the variable score. */

	// call the function to report scores
/*	parent.reportScores( score );
}*/