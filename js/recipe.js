function duplicateRow(ntemplate,entryType, entryRow ) {
	console.log("entry row " + entryRow);
	i = 0;
	text = '';
	max = 0;
	max = 0+ entryRow.length;
	while (i < max) {
		newTemplate = ntemplate.replace(/#id#/g,  entryType + (i + 1));
		newTemplate = newTemplate.replace(/#content#/g,  entryRow[i]);
		text += newTemplate;
		i++;
	}
	return text;
}

function loadContent(recipesrc ) {
	$.ajax({
		 url:recipesrc,
		 dataType: 'json', // Notice! JSONP <-- P (lowercase)
		 success:function(json){
			 // do stuff with json (in this case an array)
			 //alert("Success --  " + json.recipe.ingredient );
				recipeName = json.recipe.name;
				recipeDescription = json.recipe.description;
				ingredientList = json.recipe.ingredient;
				preparationList = json.recipe.preparation;
				cIntructionList = json.recipe.cookInstruction;
				$("#recipeImage").attr("src", json.recipe.recipeImageUrl);				
				$('#recipeName').text(recipeName);
				$('#recipeDescription').text(recipeDescription);
				text = "";
				text = $("#ingredientList").html();
				text = duplicateRow(text,'ingredientchkbx', ingredientList);
				$("#ingredientList").html(text);
				text = $("#preparationList").html();
				text = duplicateRow(text,'prepchkbx', preparationList);
				$("#preparationList").html(text);
				text = $("#cInstructionList").html();
				text = duplicateRow(text,'instchkbx', cIntructionList);
				$("#cInstructionList").html(text);

			 
		 },
		 error:function(){
			 alert("Error detected!!!");
		 }      
	});
	
}
