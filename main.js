var names_of_guest_array = [];
    
function submit()
{
    var guest_name = document.getElementById("Enter_name").value;
	names_of_guest_array.push(guest_name);
	document.getElementById("display_name").innerHTML=names_of_guest_array;
	console.log(names_of_guest_array);
   }
function show_list()
{
	var i= names_of_guest_array.join("<br>");
	console.log(names_of_guest_array);
	document.getElementById("show_names").innerHTML=i.toString();
	}
function sorting()
	{
		names_of_guest_array.sort;
		var i= names_of_guest_array.join("<br>");
		console.log(names_of_guest_array);		
		document.getElementById("sorted_names").innerHTML=i.toString();
		}
		
function Search()
{
	var s= document.getElementById("search_name").value;
	var found=0;
	var j;
	for(j=0; j<names_of_guest_array.length; j++)
		{
			if(s==names_of_guest_array[j]){
				found=found+1;
			}	
		}
	document.getElementById("search_name").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
