// this file holds any scripts that have to do with communicating with the learning management system (LMS)

// define a SCORM object to interface with LMS
var oScorm = pipwerks.SCORM;  

// This function starts the course.  This function should be called first to ensure that
// all session variables are created
function startCourse()
{
	// check to see if cookies is enabled, otherwise, this won't work
	if( typeof sessionStorage == "undefined" || sessionStorage.disabled )
	{
		alert( "You must enable cookies for this course to work properly." );
	}
	else
	{
		// if it is enabled, checked to see if this course was started
		// if it was not able to retrieve, the key "course_started", then
		// then this is the first time we are running the course
        if( !sessionStorage.getItem( "course_started" ) )
        {
        	// clear the session storage
            sessionStorage.clear();
            // set the "key" by giving it a value.  all values are strings!
            // course_started indicated that this OLM has started
    		
    		sessionStorage.setItem( "course_started", "1" );	
    		sessionStorage.setItem( "topic1", "unvisited" );
    		sessionStorage.setItem( "topic2", "unvisited" );
    		sessionStorage.setItem( "topic2a", "unvisited" );
    		sessionStorage.setItem( "topic2b", "unvisited" );
    		sessionStorage.setItem( "topic3", "unvisited" );
    		sessionStorage.setItem( "topic3a", "unvisited" );
    		sessionStorage.setItem( "topic3b", "unvisited" );
    		sessionStorage.setItem( "topic3c", "unvisited" );
    		sessionStorage.setItem( "topic3d", "unvisited" );
    		sessionStorage.setItem( "topic3e", "unvisited" );
    		sessionStorage.setItem( "topic4", "unvisited" );
    		sessionStorage.setItem( "topic4a", "unvisited" );
    		sessionStorage.setItem( "topic4b", "unvisited" );
    		sessionStorage.setItem( "topic4c", "unvisited" );
    		sessionStorage.setItem( "topic4d", "unvisited" );
    		sessionStorage.setItem( "topic5", "unvisited" );
    		sessionStorage.setItem( "topic5a", "unvisited" );
    		sessionStorage.setItem( "topic5b", "unvisited" );
    		sessionStorage.setItem( "topic5c", "unvisited" );
    		sessionStorage.setItem( "topic6", "unvisited" );
    		sessionStorage.setItem( "topic7", "unvisited" );
    		sessionStorage.setItem( "topic8", "unvisited" );
    			
			// set the values you want to persist throughout the website here
        }
	}
	
	// initializeSCORM after the OLM environment has been set up
	initializeSCORM();
}

// This function initializes the course by connecting the course to the LMS 
// The SCORM connection is done once at the beginning of the course
// Another function, reportScores(), will connect again when the 
// user is done with the online learning module
function initializeSCORM()
{
	var lmsConnected = oScorm.init();
	
	// we only want to run initializeSCORM once, so use course_started
	// to keep track of how many times we have initialized 
	var getStarted = sessionStorage.getItem( "course_started" );
	
	// only do the following if we are connected to the LMS and
	// if course_started has a value of 1
	if( lmsConnected && getStarted == "1" )
	{
        // always set the status to incomplete
		oScorm.set( "cmi.success_status", "unknown" );
		oScorm.set( "cmi.lesson_status", "incomplete" );
		oScorm.set( "cmi.completion_status", "incomplete" );
		
		// change course_started to another value so that this initializeSCORM
		// does not run the initialization code again; otherwise, this OLM
		// will be incomplete if the user goes back to the first page even after
		// passing the exam 
		sessionStorage.setItem( "course_started", "2" );
    		
		// retrieve the LMS values (like user name) here and 
		// integrate them into your course
	}
}

// This function reports the score from the assessment to the LMS
// This should only be called when the user submits the answers to the quiz
function reportScores()
{	
	oScorm.save();
}

// This function is called when the window is closed.  It saves and quits the course.
function finishCourse()
{
	oScorm.save();
	oScorm.quit();
	alert("goodbye")
}

// This function is supposed to highlight the current page in navigation
/*function Current(){
	  ('a').each(function() {
	    if ($(this).prop('href') == window.location.href) {
	      $(this).addClass('current');
	    }
	  });
	});
*/

var index = 0;

function showOne()
{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p01").style.backgroundColor = "#663300";
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p01a").style.color = "dfd994";
	index = 0;
}

function showTwo()
{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p02").style.backgroundColor = "#663300";
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p02a").style.color = "dfd994";
	index = 1;
}

function showThree()
{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p03").style.backgroundColor = "#663300";
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p03a").style.color = "dfd994";
	index = 2;
}

function showFour()
{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p04").style.backgroundColor = "#663300";
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p04a").style.color = "dfd994";
	index = 3;
}

function showFive()
{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p05").style.backgroundColor = "#663300";
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p05a").style.color = "dfd994";
	index = 4;
}

function showSix()
{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p06").style.backgroundColor = "#663300";
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p06a").style.color = "dfd994";
	index = 5;
}

function showSeven()
{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p07").style.backgroundColor = "#663300";
	document.getElementById( "content-frame" ).contentWindow.document.getElementById("p07a").style.color = "dfd994";
	index = 6;
}

function visitTopic1()
{
	sessionStorage.setItem( "topic1", "visited" );
	checkVisits()
	showOne()
	}

function visitTopic2()
{
	sessionStorage.setItem( "topic2", "visited" );
	checkVisits()
	showTwo()
	}

function visitTopic2a()
{
	sessionStorage.setItem( "topic2a", "visited" );
	checkVisits()
	showTwo()
	}

function visitTopic2b()
{
	sessionStorage.setItem( "topic2b", "visited" );
	checkVisits()
	showTwo()
	}

function visitTopic3()
{
	sessionStorage.setItem( "topic3", "visited" );
	checkVisits()
	showThree()
	}

function visitTopic3a()
{
	sessionStorage.setItem( "topic3a", "visited" );
	checkVisits()
	showThree()
	}

function visitTopic3b()
{
	sessionStorage.setItem( "topic3b", "visited" );
	checkVisits()
	showThree()
	}

function visitTopic3c()
{
	sessionStorage.setItem( "topic3c", "visited" );
	checkVisits()
	showThree()
	}

function visitTopic3d()
{
	sessionStorage.setItem( "topic3d", "visited" );
	checkVisits()
	showThree()
	}

function visitTopic3e()
{
	sessionStorage.setItem( "topic3e", "visited" );
	checkVisits()
	showThree()
	}

function visitTopic4()
{
	sessionStorage.setItem( "topic4", "visited" );
	checkVisits()
	showFour()
	}

function visitTopic4a()
{
	sessionStorage.setItem( "topic4a", "visited" );
	checkVisits()
	showFour()
	}

function visitTopic4b()
{
	sessionStorage.setItem( "topic4b", "visited" );
	checkVisits()
	showFour()
	}

function visitTopic4c()
{
	sessionStorage.setItem( "topic4c", "visited" );
	checkVisits()
	showFour()
	}

function visitTopic4d()
{
	sessionStorage.setItem( "topic4d", "visited" );
	checkVisits()
	showFour()
	}

function visitTopic5()
{
	sessionStorage.setItem( "topic5", "visited" );
	checkVisits()
	showFive()
	}

function visitTopic5a()
{
	sessionStorage.setItem( "topic5a", "visited" );
	checkVisits()
	showFive()
	}

function visitTopic5b()
{
	sessionStorage.setItem( "topic5b", "visited" );
	checkVisits()
	showFive()
	}

function visitTopic5c()
{
	sessionStorage.setItem( "topic5c", "visited" );
	checkVisits()
	showFive()
	}

function visitTopic6()
{
	sessionStorage.setItem( "topic6", "visited" );
	checkVisits()
	showSix()
	}

function visitTopic7()
{
	sessionStorage.setItem( "topic7", "visited" );
	checkVisits()
	showSeven()
	}

function checkVisits()
{
	var value1 = sessionStorage.getItem( "topic1" ); 
	var value2 = sessionStorage.getItem( "topic2" ); 
	var value2a = sessionStorage.getItem( "topic2a" );
	var value2b = sessionStorage.getItem( "topic2b" );
	var value3 = sessionStorage.getItem( "topic3" ); 
	var value3a = sessionStorage.getItem( "topic3a" );
	var value3b = sessionStorage.getItem( "topic3b" );
	var value3c = sessionStorage.getItem( "topic3c" );
	var value3d = sessionStorage.getItem( "topic3d" );
	var value3e = sessionStorage.getItem( "topic3e" );
	var value4 = sessionStorage.getItem( "topic4" ); 
	var value4a = sessionStorage.getItem( "topic4a" );
	var value4b = sessionStorage.getItem( "topic4b" );
	var value4c = sessionStorage.getItem( "topic4c" );
	var value4d = sessionStorage.getItem( "topic4d" );
	var value5 = sessionStorage.getItem( "topic5" );
	var value5a = sessionStorage.getItem( "topic5a" );
	var value5b = sessionStorage.getItem( "topic5b" );
	var value5c = sessionStorage.getItem( "topic5c" );
	var value6 = sessionStorage.getItem( "topic6" );
	var value7 = sessionStorage.getItem( "topic7" );
	
	if( value1 == "visited" && value2 == "visited" 
		&& value2a == "visited" && value2b == "visited"
		&& value3 == "visited" && value3a == "visited"
		&& value3b == "visited" && value3c == "visited"
		&& value3d == "visited" && value3e == "visited"
		&& value4 == "visited" && value4a == "visited"
		&& value4b == "visited" && value4c == "visited"
		&& value4d == "visited"	&& value5 == "visited" 
		&& value5a == "visited"	&& value5b == "visited" && value5c == "visited"
		&& value6 == "visited" && value7 == "visited" )
	{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "inline"; 
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link-box" ).style.display = "inline";
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "c01" ).style.display = "inline"; 
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "congrats" ).innerHTML = "Congratulations! You have finished all the modules. Please, Take the Final Quiz";
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "congrats" ).style.color = "red";
	}
	
	/*if( value1 == "visited" && value7 == "visited"
		 )
	{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "c01" ).style.display = "inline"; 
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "congrats" ).innerHTML = "Congratulations! You have finished all the modules. Please, Take the Final Quiz";
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "congrats" ).style.color = "red";
	}*/
	
	if( value2 == "visited" && value2a == "visited" && value2b == "visited"
		 )
	{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "c02" ).style.display = "inline"; 
	}
	
	if( value3 == "visited" && value3a == "visited" && value3b == "visited" && value3c == "visited" && value3d == "visited" && value3e == "visited"
	 )
	{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "c03" ).style.display = "inline"; 
	}
	
	if( value4 == "visited" && value4a == "visited" && value4b == "visited" && value4c == "visited" && value4d == "visited"
	 )
	{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "c04" ).style.display = "inline"; 
	}
	
	if( value5 == "visited" && value5a == "visited"	&& value5b == "visited" && value5c == "visited"
	 )
	{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "c05" ).style.display = "inline"; 
	}
	
	if( value6 == "visited"
	 )
	{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "c06" ).style.display = "inline"; 
	}
	
	if( value7 == "visited"
	 )
	{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "c07" ).style.display = "inline"; 
	}
	
}

