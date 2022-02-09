const AddItem = $('DIV#add_item');
AddItem.click(function () {
  const MyList = $('ul.my_list');
  MyList.append('<li>Item</li>');
});
