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

function visitTopic1()
{
	sessionStorage.setItem( "topic1", "visited" );
	checkVisits()
	}

function visitTopic2()
{
	sessionStorage.setItem( "topic2", "visited" );
	checkVisits()
	}

function visitTopic2a()
{
	sessionStorage.setItem( "topic2a", "visited" );
	checkVisits()
	}

function visitTopic2b()
{
	sessionStorage.setItem( "topic2b", "visited" );
	checkVisits()
	}

function visitTopic3()
{
	sessionStorage.setItem( "topic3", "visited" );
	checkVisits()
	}

function visitTopic3a()
{
	sessionStorage.setItem( "topic3a", "visited" );
	checkVisits()
	}

function visitTopic3b()
{
	sessionStorage.setItem( "topic3b", "visited" );
	checkVisits()
	}

function visitTopic3c()
{
	sessionStorage.setItem( "topic3c", "visited" );
	checkVisits()
	}

function visitTopic3d()
{
	sessionStorage.setItem( "topic3d", "visited" );
	checkVisits()
	}

function visitTopic3e()
{
	sessionStorage.setItem( "topic3e", "visited" );
	checkVisits()
	}

function visitTopic4()
{
	sessionStorage.setItem( "topic4", "visited" );
	checkVisits()
	}

function visitTopic4a()
{
	sessionStorage.setItem( "topic4a", "visited" );
	checkVisits()
	}

function visitTopic4b()
{
	sessionStorage.setItem( "topic4b", "visited" );
	checkVisits()
	}

function visitTopic4c()
{
	sessionStorage.setItem( "topic4c", "visited" );
	checkVisits()
	}

function visitTopic4d()
{
	sessionStorage.setItem( "topic4d", "visited" );
	checkVisits()
	}

function visitTopic5()
{
	sessionStorage.setItem( "topic5", "visited" );
	checkVisits()
	}

function visitTopic5a()
{
	sessionStorage.setItem( "topic5a", "visited" );
	checkVisits()
	}

function visitTopic5b()
{
	sessionStorage.setItem( "topic5b", "visited" );
	checkVisits()
	}

function visitTopic5c()
{
	sessionStorage.setItem( "topic5c", "visited" );
	checkVisits()
	}

function visitTopic6()
{
	sessionStorage.setItem( "topic6", "visited" );
	checkVisits()
	}

function visitTopic7()
{
	sessionStorage.setItem( "topic7", "visited" );
	checkVisits()
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
	}
}

