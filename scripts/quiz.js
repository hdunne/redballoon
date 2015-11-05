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
	
	if( q1[ 2 ].checked )
		{
			score = score + 1;
		}
	
	var q2 = document.forms.quiz2.question2;
	
	if( q2[ 0 ].checked )
		{
			score = score + 1;
		}
	var q3 = document.forms.quiz2.question3;
	
	if( q3[ 1 ].checked )
		{
			score = score + 1;
		}

	var q4 = document.forms.quiz2.question4;

	if( q4[ 2 ].checked )
		{
			score = score + 1;
		}

	var q5 = document.forms.quiz2.question5;
	
	if( q5[ 1 ].checked )
		{
			score = score + 1;
		}

	var q6 = document.forms.quiz2.question6;
	
	if( q6[ 0 ].checked )
		{
			score = score + 1;
		}

	
	alert( "You got " + score + " correct!");
}