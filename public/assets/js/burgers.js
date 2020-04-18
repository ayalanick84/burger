
$(() => {
  $(".change-eat").on("click", function () {
    const id = $(this).data("id");
    const newEat = $(this).data("neweat");

    const newEatState = { value: newEat };

    
    $.ajax(`/api/burgers/${id}/devoured`, {
      type: "PUT",
     
      data: JSON.stringify(newEatState),
   
      contentType: "application/json; charset=UTF-8",
    }).then(() => {
  
      location.reload();
    });
  });

  $(".create-form").on("submit", (event) => {
  
    event.preventDefault();

    const newBurger = {
      name: $("#ca").val().trim()
     
    };

    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
 
      location.reload();
    });
  });

  $(".delete-burger").on("click", function () {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE",
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
