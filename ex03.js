
var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];


var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
    "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3", 
    "33", "999", "9"];
    
var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false];

'use strict';


function duplicates(list){
    var dup = [];
    var new_list = [];

    for (var i = 0; i < list.length; i++){
	for (var j = 0; j < new_list.length; j++){
	    if (list[i] === new_list[j]){
		dup.push(list[i])	    
	    }
	    else{
		new_list.push(list[i]);
	    }
	}
}
    return dup
}


// d = {}

// d[whatever] = d.get(whatever,0)+1

// if d[whatever] < 1:
// store to new list


/////////actually another try at the code///////////
var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];


var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
    "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3", 
    "33", "999", "9"];
    
var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false];

'use strict';


function make_object(list){
    var dictionary = {};
    for (var i = 0;i<list.length;i++){
        // if (dictionary[list[i]]) {
        
        if (list[i] in dictionary) {
            dictionary[list[i]] += 1;            
        } 
        else {
           if (list[i] === "true") {
               if (dictionary["true"]) {
                    dictionary["true"] += 1;
               } else {
                   dictionary["true"] = 1;
               }
            }
            dictionary[list[i]] = 1;
            
        }

    }
    console.log(dictionary);
    return dictionary;
}

function duplicates(list){
    var dictionary = make_object(list);
    var something = [];
    for (var name in dictionary){  
        if (dictionary[name] > 1) {
            something.push(name);
        }   
    }
    return something;   
     }

// console.log(make_object(hackbrightStudents));
// console.log(duplicates(hackbrightStudents));
// console.log(duplicates(classroomIds));
console.log(duplicates(randomJunkIFound));
