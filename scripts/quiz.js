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

function processQuizfinal()
{
	var q1 = document.forms.quiz2.question1;
	var score = 0;
	
	if( q1[ 0 ].checked )
		{
			score = score + 1;
		}
	
	var q2 = document.forms.quiz2.question2;
	
	if( q2[ 1 ].checked )
		{
			score = score + 1;
		}
	var q3 = document.forms.quiz2.question3;
	
	if( q3[ 2 ].checked )
		{
			score = score + 1;
		}
	var q4 = document.forms.quiz2.question3;
	
	if( q4[ 2 ].checked )
		{
			score = score + 1;
		}
	var q5 = document.forms.quiz2.question3;
	
	if( q5[ 3 ].checked )
		{
			score = score + 1;
		}
	var q6 = document.forms.quiz2.question3;
	
	if( q6[ 4 ].checked )
		{
			score = score + 1;
		}
	var q7 = document.forms.quiz2.question3;
	
	if( q7[ 5 ].checked )
		{
			score = score + 1;
		}
	var q8 = document.forms.quiz2.question3;
	
	if( q8[ 6 ].checked )
		{
			score = score + 1;
		}
	
	alert( "You got " + score + " correct!");
}